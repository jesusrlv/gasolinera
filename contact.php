<?php
	if(!isset( $_POST['name']) || !isset($_POST['email']) || !isset($_POST['message']) ) {
		echo 'error, intenta nuevamente';
		die();
	}
	$email_from = $_POST['email'];
	$email_message = "Revisar correo de ".stripslashes($_POST['name'])."\n\n";
	$email_message .=" en fecha ".date("d/m/Y")." at ".date("H:i")."\n\n";
	$email_message .= stripslashes($_POST['message']);

	$headers = 'De: '.$email_from."\r\n" .
   'Reply-To: '.$email_from."\r\n" ;

	mail('jesusrlvrojo@gmail.com', $email_subject, $email_message, $headers);
	echo "Gracias por contactarnos.";
	die();
?>