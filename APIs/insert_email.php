<?php
require_once 'database.php';
$response = array();
$response['message'] = "Sorry, something went wrong!";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';

    $stmt = $conn->prepare("INSERT INTO subscriptions (emails) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        $response['message'] = "Thanks for subscription!";
    }else{
        $response['message'] = "It looks like you already are subscribed to our newsletter!";
    }
    $stmt->close();
}
echo json_encode($response);
$conn->close();
?>
