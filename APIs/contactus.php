<?php
require_once 'database.php';
$response = array();
$response['message'] = "Sorry, something went wrong!";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = "Please fill in all the required fields.";
    } else {
        $query = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
        $statement = $conn->prepare($query);
        $statement->bind_param('sss', $name, $email, $message);
        
        if ($statement->execute()) {
            $response['message'] = "Thank you for contacting us. We will get back to you soon.";           
        } else {
            $response['message'] = "Error occurred while storing the data. Please try again later.";           
        }
  
    }
}
echo json_encode($response);
?>