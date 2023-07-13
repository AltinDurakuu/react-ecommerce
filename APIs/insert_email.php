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

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the email from the request body
    $email = $_POST['email'] ?? '';

    // Prepare and execute the SQL statement to insert the email
    $stmt = $conn->prepare("INSERT INTO subscriptions (emails) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    // Check if the insertion was successful
    if ($stmt->affected_rows > 0) {
        // Email inserted successfully
        echo "Email inserted successfully";
    } else {
        // Failed to insert email
        echo "Failed to insert email";
    }

    // Close the statement
    $stmt->close();
} else {
    // Invalid request method
    echo "Invalid request method";
}

// Close the database connection
$conn->close();
?>
