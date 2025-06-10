<?php
// contact-form-handler.php

// Configure these values
$recipientEmail = "sathyendrababum@gmail.com";
$emailSubject = "New Contact Form Submission";

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields and sanitize data
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validate data
    $errors = [];
    
    // Check name
    if (empty($name)) {
        $errors[] = "Please enter your name.";
    }

    // Check email
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    // Check message
    if (empty($message)) {
        $errors[] = "Please enter your message.";
    }

    // If no errors, send email
    if (empty($errors)) {
        // Build email content
        $emailContent = "Name: $name\n";
        $emailContent .= "Email: $email\n\n";
        $emailContent .= "Message:\n$message\n";

        // Build email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email
        if (mail($recipientEmail, $emailSubject, $emailContent, $headers)) {
            http_response_code(200);
            echo "Thank you! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        http_response_code(400);
        echo implode("<br>", $errors);
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}