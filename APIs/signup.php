<?php
require_once 'database.php';

$response = array();
$response['message'] = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {  
      $nameRegex = '/^[a-zA-Z\s]+$/';
      $usernameRegex = '/^[a-zA-Z][a-zA-Z0-9]*$/';
      $emailMaxLength = 70;
      $phoneMaxLength = 70;
      $addressMaxLength = 128;
      
      $number = preg_match('@[0-9]@', $password);
      $uppercase = preg_match('@[A-Z]@', $password);
      $lowercase = preg_match('@[a-z]@', $password);
      $specialChars = preg_match('@[^\w]@', $password);
  
      $errors = [];
      if (!isset($_POST['terms'])) {
        $errors[] = 'You have to agree with terms and conditions';
        
    }
      if (!preg_match($nameRegex, $name)) {
          $errors[] = 'Invalid name. Please enter a name without special characters.';
      }
  
      if (!preg_match($usernameRegex, $username)) {
          $errors[] = 'Invalid username. It must start with a letter and can contain only letters and numbers.';
      }
  
      if (strlen($email) > $emailMaxLength) {
          $errors[] = 'Email cannot exceed ' . $emailMaxLength . ' characters.';
      }
  
      if (strlen($phone) > $phoneMaxLength) {
          $errors[] = 'Phone number cannot exceed ' . $phoneMaxLength . ' characters.';
      }
      
      if(strlen($password) < 8 || !$number || !$uppercase || !$lowercase || !$specialChars) {
        $errors[] = 'Invalid password. It should contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.';
      }
  
      if ($password != $password2) {
          $errors[] = 'Passwords do not match.';
      }
  
      if (strlen($address) > $addressMaxLength) {
          $errors[] = 'Address cannot exceed ' . $addressMaxLength . ' characters.';
      }
if (empty($errors)) {
  $checkStmt = $conn->prepare("SELECT * FROM `user` WHERE `email` = ? OR `username` = ? OR `phonenumber` = ?");
  if (!$checkStmt) {
      die("Prepare failed: " . $conn->error);
  }

  $checkStmt->bind_param("sss", $email, $username, $phone);

  $checkStmt->execute();

  $checkResult = $checkStmt->get_result();

  if ($checkResult->num_rows > 0) {
      while ($row = $checkResult->fetch_assoc()) {
          if ($row['email'] === $email) {
              $errors[] = 'Email already exists.';
          }
          if ($row['username'] === $username) {
              $errors[] = 'Username already exists.';
          }
          if ($row['phonenumber'] === $phone) {
              $errors[] = 'Phone number already exists.';
          }
      }
  }

  $checkStmt->close();
  $checkResult->close();
}
      if (empty($errors)) {
    $stmt = $conn->prepare("INSERT INTO `user` (`name`, `username`, `email`, `password`, `address`, `phonenumber`) VALUES (?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ssssss", $name, $username, $email, $passwordHash, $address, $phone);

    if ($stmt->execute()) {
        $response['message'] = "Signed up Successfully";
    } else {
        $response['message'] = "Something went wrong! Please try again!";
    }

    $stmt->close();
  
      } else {
        $errorString = "";
        foreach ($errors as $error) {
            $errorString .= $error . "\n";
        }
        $response['message'] = $errorString;;
      }
  }

} 
echo json_encode($response);
?>