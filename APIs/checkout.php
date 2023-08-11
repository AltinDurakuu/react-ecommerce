<?php
require_once 'database.php';
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 86400");
    header("Content-Length: 0");
    header("HTTP/1.1 204 No Content");
    exit();
}
// Check if the userData properties are not empty
$response = array();
$response['message'] = "";
$response['products'] = "";
$response['totalAmount'] = "";
$userData = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phoneNumber = trim($_POST['phoneNumber']);
    $address = trim($_POST['address']);
    $products = $_POST['productIdsAndQuantities'];

    // Process and use the data as needed
    // For example, you can create an array with the user data
    $userData = [
        'name' => $name,
        'email' => $email,
        'phoneNumber' => $phoneNumber,
        'address' => $address
    ];
    $response['message'] = $userData;
    $response['products'] = $products;
}



if (
    empty($userData['name']) ||
    empty($userData['email']) ||
    empty($userData['phoneNumber']) ||
    empty($userData['address'])
) {
    http_response_code(400);
    $response = [
        "error" => "Invalid user data",
    ];
    header("Content-Type: application/json");
    echo json_encode($response);
    exit();
}


$totalAmount = 0;

foreach ($products as $product) {
    $productId = intval($product['productId']);
    $quantity = intval($product['quantity']);

    // Retrieve product price from the database
    $sql = "SELECT price FROM product WHERE idproduct = $productId";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $productPrice = $row['price'];
        $totalAmount += $productPrice * $quantity;
    }
    }


    $response['totalAmount'] = $totalAmount;


header("Content-Type: application/json");
echo json_encode($response);

$conn->close();

?>
