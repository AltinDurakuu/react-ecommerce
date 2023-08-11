<?php
require_once 'database.php';

$sql = "SELECT * FROM product WHERE 1=1";

$filters = [];
$category = $_GET['category'] ?? '';
$type = $_GET['type'] ?? '';
$price = $_GET['price'] ?? '';
$name = $_GET['name'] ?? '';
$times_sold = $_GET['times_sold'] ?? '';
$productId = $_GET['productId'] ?? '';

if (!empty($category)) {
    $filters[] = "category = '" . $conn->real_escape_string($category) . "'";
}
if (!empty($type)) {
    $filters[] = "type = '" . $conn->real_escape_string($type) . "'";
}

if (!empty($price)) {
    $filters[] = "price <= " . floatval($price);
}
if (!empty($productId)) { // Add this block to filter by productId
    $filters[] = "idproduct = " . intval($productId);
}
if (!empty($name)) {
    $filters[] = "(name LIKE '%" . $conn->real_escape_string($name) . "%' OR description LIKE '%" . $conn->real_escape_string($name) . "%')";
}

if (!empty($times_sold)) {
    $filters[] = "times_sold >= " . intval($times_sold);
}

if (!empty($filters)) {
    $sql .= " AND " . implode(" AND ", $filters);
}

$sort = $_GET['sort'] ?? '';

switch ($sort) {
    case 'times_sold':
        $sql .= " ORDER BY times_sold DESC";
        break;
    case 'added_time':
        $sql .= " ORDER BY date_added DESC";
        break;
    case 'sale_percentage':
        $sql .= " AND old_price > price AND old_price IS NOT NULL ORDER BY (1 - (price / old_price)) DESC";
        break;
    default:
        $sql .= " ORDER BY idproduct DESC";
        break;
}

$limit = isset($_GET['limit']) ? intval($_GET['limit']) : null;

if ($limit !== null) {
    $sql .= " LIMIT " . $limit;
}

$result = $conn->query($sql);

$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

$conn->close();

header("Content-Type: application/json");
echo json_encode($products);
?>