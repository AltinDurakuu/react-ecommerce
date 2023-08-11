<?php
require_once 'database.php';

$response = array();
$response['message'] = "Something went wrong!";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $address = $_POST['address'];
    $productIdsAndQuantities = $_POST['productIdsAndQuantities'];

    $sql = "INSERT INTO orders (name, email, phoneNumber, address) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die('Prepare failed: ' . htmlspecialchars($conn->error));
    }

    if (!$stmt->bind_param('ssss', $name, $email, $phoneNumber, $address)) {
        die('Binding parameters failed: ' . htmlspecialchars($stmt->error));
    }

    if (!$stmt->execute()) {
        die('Execute failed: ' . htmlspecialchars($stmt->error));
    }

    $orderId = $stmt->insert_id;

    foreach ($productIdsAndQuantities as $item) {
        $productId = intval($item['productId']);
        $quantity = intval($item['quantity']);

        $sql = "INSERT INTO order_items (orderId, productId, quantity) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            die('Prepare failed for order_items: ' . htmlspecialchars($conn->error));
        }

        if (!$stmt->bind_param('iii', $orderId, $productId, $quantity)) {
            die('Binding parameters failed for order_items: ' . htmlspecialchars($stmt->error));
        }

        if (!$stmt->execute()) {
            die('Execute failed for order_items: ' . htmlspecialchars($stmt->error));
        }

        $stmt->close();
    }

    $response = [
        "orderId" => $orderId,
        "message" => "Order successfully saved. We will contact you soon.",
    ];
    echo json_encode($response);
} else {
    http_response_code(405); 
    $response = [
        "message" => "Unsupported request method.",
    ];
    echo json_encode($response);
}
?>
