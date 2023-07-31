<?php
require_once 'database.php';
require_once 'jwt.php'; 

$response = array();
$response['message'] = "";
$response['loggedin'] = false;
$response['user'] = null;

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $emailOrUsername = $_POST['login_username_email'];
    $password = $_POST['login_password'];

    $stmt = $conn->prepare("SELECT * FROM `user` WHERE `email` = ? OR `username` = ?");
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ss", $emailOrUsername, $emailOrUsername);

    if ($stmt->execute()) {
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            if (password_verify($password, $user['password'])) {
                $response['message'] = "Logged in";
                $response['loggedin'] = true;

                $tokenPayload = array(
                    'username' => $user['username'],
                    'name' => $user['name']
                );
                $jwtToken = generateJwtToken($tokenPayload);

                $response['token'] = $jwtToken;

                $response['user'] = array(
                    'username' => $user['username'],
                    'name' => $user['name']
                );
            } else {
                $response['message'] = "Incorrect password!";
            }
        } else {
            $response['message'] = "Invalid email/username!";
        }
    } else {
        $response['message'] = "Error executing query: " . $stmt->error;
    }
    $stmt->close();
}

echo json_encode($response);
?>