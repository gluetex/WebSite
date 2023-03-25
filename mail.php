<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "emre.ertugg1@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    if (mail($to, $subject, $body)) {
      $response = array("success" => true);
    } else {
      $response = array("success" => false);
    }
    
    header("Content-Type: application/json");
    echo json_encode($response);
  }
?>