<?php
$secret = getenv('GH_WEBHOOK_SECRET');
$payload = file_get_contents('php://input');
$headerSignature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

if ($secret) {
	$expectedSignature = 'sha256=' . hash_hmac('sha256', $payload, $secret);
	if (!hash_equals($expectedSignature, $headerSignature)) {
		http_response_code(403);
		die('Invalid signature.');

	}
}

$output = shell_exec("sudo -u deploy git -C /var/www/bmtechbrasil.com.br pull origin main 2>&1");
echo $output;
?>
