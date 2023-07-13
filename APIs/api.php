<?php
$host = "localhost";
$dbname = "clothes_accessories";
$username = "root";
$password = "";

// Establish database connection
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_errno) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the base query
$sql = "SELECT * FROM product WHERE 1=1";

// Check and add filters to the query
$filters = [];
$category = $_GET['category'] ?? '';
$price = $_GET['price'] ?? '';
$name = $_GET['name'] ?? '';
$times_sold = $_GET['times_sold'] ?? '';

if (!empty($category)) {
    $filters[] = "category = '" . $conn->real_escape_string($category) . "'";
}

if (!empty($price)) {
    $filters[] = "price <= " . floatval($price);
}

if (!empty($name)) {
    $filters[] = "(name LIKE '%" . $conn->real_escape_string($name) . "%' OR description LIKE '%" . $conn->real_escape_string($name) . "%')";
}

if (!empty($times_sold)) {
    $filters[] = "times_sold >= " . intval($times_sold);
}

// Add the filters to the query if any are provided
if (!empty($filters)) {
    $sql .= " AND " . implode(" AND ", $filters);
}

// Determine the sorting option
$sort = $_GET['sort'] ?? '';

switch ($sort) {
    case 'times_sold':
        $sql .= " ORDER BY times_sold DESC";
        break;
    case 'added_time':
        $sql .= " ORDER BY date_added DESC";
        break;
    case 'sale_percentage':
        $sql .= " AND old_price IS NOT NULL ORDER BY (1 - (price / old_price)) DESC";
        break;
    default:
        // No sorting option specified, use default sorting
        $sql .= " ORDER BY idproduct DESC";
        break;
}

// Check if the "limit" parameter is provided
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : null;

// Add the limit to the query if provided
if ($limit !== null) {
    $sql .= " LIMIT " . $limit;
}

// Execute the query
$result = $conn->query($sql);

// Fetch the data and convert it to an associative array
$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

// Close the database connection
$conn->close();

// Return the data as JSON
header("Content-Type: application/json");
echo json_encode($products);
?>