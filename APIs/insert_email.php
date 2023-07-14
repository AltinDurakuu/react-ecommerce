<?php
require_once 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';

    $stmt = $conn->prepare("INSERT INTO subscriptions (emails) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Email inserted successfully";
    } else {
        echo "Failed to insert email";
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}

$conn->close();
?>
