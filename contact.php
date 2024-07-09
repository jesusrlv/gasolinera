<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'jesusrlvrojo@gmail.com'; // Reemplaza con tu dirección de correo
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Your message has been sent successfully!';
    } else {
        echo 'Failed to send message. Please try again.';
    }
} else {
    echo 'Invalid request.';
}
?>
