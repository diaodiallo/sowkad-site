<?php
/**
 * Sowkad — traitement des formulaires de contact et de candidature.
 * Hébergement LWS : la fonction mail() de PHP est disponible sur les offres mutualisées.
 *
 * À CONFIGURER : l'adresse qui reçoit les messages et l'expéditeur (une adresse
 * de votre domaine, créée dans l'espace client LWS, pour éviter le spam).
 */
const DESTINATAIRE = 'contact@sowkad.com';
const EXPEDITEUR   = 'site@sowkad.com';
const TAILLE_MAX_CV = 5 * 1024 * 1024; // 5 Mo

function retour(string $page, string $etat): void {
    $ancre = in_array($page, ['/equipe/', '/en/team/'], true) ? '#candidature' : '';
    header('Location: ' . $page . '?envoi=' . $etat . $ancre, true, 303);
    exit;
}

function champ(string $nom, int $max = 200): string {
    $v = isset($_POST[$nom]) ? trim((string) $_POST[$nom]) : '';
    $v = str_replace(["\r", "\n", "\0"], ' ', $v); // aucune ligne d'en-tête injectable
    return mb_substr($v, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    retour(($_POST['lang'] ?? '') === 'en' ? '/en/' : '/', 'erreur');
}

$type = ($_POST['type'] ?? '') === 'candidature' ? 'candidature' : 'contact';
$en   = ($_POST['lang'] ?? '') === 'en';
$pages = $en
    ? ['contact' => '/en/contact/', 'candidature' => '/en/team/']
    : ['contact' => '/contact/', 'candidature' => '/equipe/'];
$page = $pages[$type];

// Pot de miel anti-robots : ce champ est invisible pour les humains.
if (!empty($_POST['site_web'])) {
    retour($page, 'ok');
}

$nom     = champ('nom');
$email   = champ('email');
$message = isset($_POST['message']) ? mb_substr(trim((string) $_POST['message']), 0, 5000) : '';

if ($nom === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($_POST['consentement'])) {
    retour($page, 'erreur');
}

$lignes = ["Nom : $nom", "E-mail : $email"];
if ($type === 'contact') {
    $lignes[] = 'Organisation : ' . champ('organisation');
    $lignes[] = 'Pays : ' . champ('pays');
    $lignes[] = 'Besoin : ' . champ('besoin');
    $sujet = 'Site Sowkad — nouvelle demande de ' . $nom . ($en ? ' (EN)' : '');
} else {
    $lignes[] = 'Profil : ' . champ('profil');
    $sujet = 'Site Sowkad — candidature de ' . $nom . ($en ? ' (EN)' : '');
}
$corps = implode("\n", $lignes) . "\n\nMessage :\n" . $message . "\n";

$entetes = [
    'From: Site Sowkad <' . EXPEDITEUR . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
];

// Pièce jointe (CV) pour les candidatures, uniquement en PDF.
$cv = $_FILES['cv'] ?? null;
$avecCv = $type === 'candidature' && $cv && $cv['error'] === UPLOAD_ERR_OK;

if ($avecCv) {
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    if ($cv['size'] > TAILLE_MAX_CV || $finfo->file($cv['tmp_name']) !== 'application/pdf') {
        retour($page, 'erreur');
    }
    $frontiere = 'sowkad_' . bin2hex(random_bytes(8));
    $entetes[] = 'Content-Type: multipart/mixed; boundary="' . $frontiere . '"';
    // Nom d'origine du fichier envoyé par le candidat, nettoyé (lettres, chiffres, tirets).
    $origine = pathinfo((string) $cv['name'], PATHINFO_FILENAME);
    $origine = trim(preg_replace('/[^A-Za-z0-9_-]+/', '-', $origine), '-') ?: 'CV';
    $nomFichier = 'Candidature-' . mb_substr($origine, 0, 60) . '.pdf';

    $contenu  = "--$frontiere\r\n";
    $contenu .= "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n";
    $contenu .= $corps . "\r\n";
    $contenu .= "--$frontiere\r\n";
    $contenu .= "Content-Type: application/pdf; name=\"$nomFichier\"\r\n";
    $contenu .= "Content-Transfer-Encoding: base64\r\n";
    $contenu .= "Content-Disposition: attachment; filename=\"$nomFichier\"\r\n\r\n";
    $contenu .= chunk_split(base64_encode(file_get_contents($cv['tmp_name']))) . "\r\n";
    $contenu .= "--$frontiere--";
    $corps = $contenu;
} else {
    $entetes[] = 'Content-Type: text/plain; charset=UTF-8';
}

$sujetEncode = '=?UTF-8?B?' . base64_encode($sujet) . '?=';
$ok = mail(DESTINATAIRE, $sujetEncode, $corps, implode("\r\n", $entetes), '-f' . EXPEDITEUR);

retour($page, $ok ? 'ok' : 'erreur');
