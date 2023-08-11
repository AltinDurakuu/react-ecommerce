<?php
require_once 'database.php';
require_once 'jwt.php';

$response = array();
$response['message'] = "";
$response['user'] = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['token'];

    $decodedToken = verifyJwtToken($token);

    if ($decodedToken !== null && isset($decodedToken->iduser)) {
        $iduser = $decodedToken->iduser;

        $stmt = $conn->prepare("SELECT name, email, phoneNumber, address FROM `user` WHERE `iduser` = ?");
        if (!$stmt) {
            die("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("i", $iduser);

        if ($stmt->execute()) {
            $result = $stmt->get_result();

            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                $response['message'] = "User found";
                $response['user'] = $user;
            } else {
                $response['message'] = "User not found!";
            }
        } else {
            $response['message'] = "Error executing query: " . $stmt->error;
        }
        $stmt->close();
    } else {
        $response['message'] = "Invalid token!";
    }
} else {
    $response['message'] = "Unsupported request method.";
}

echo json_encode($response);
?>
