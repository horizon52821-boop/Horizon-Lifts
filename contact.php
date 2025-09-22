<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars($_POST['name']);
  $email   = htmlspecialchars($_POST['email']);
  $phone   = htmlspecialchars($_POST['phone']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  $to      = "tgopoza6@gmail.com";  // Replace with your actual email
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $body = "You received a new message from your website:\n\n";
  $body .= "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Phone: $phone\n";
  $body .= "Subject: $subject\n";
  $body .= "Message:\n$message\n";

  if (mail($to, "Contact Form: $subject", $body, $headers)) {
    echo "Thank you! Your message has been sent.";
  } else {
    echo "Sorry, something went wrong. Please try again.";
  }
}
?>
