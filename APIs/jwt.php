<?php
require_once 'vendor/src/BeforeValidException.php';
require_once 'vendor/src/ExpiredException.php';
require_once 'vendor/src/SignatureInvalidException.php';
require_once 'vendor/src/JWT.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\KEY;
$secretKey = "altini";

function generateJwtToken($payload) {
  global $secretKey;
  define('JWT_SECRET_KEY', $secretKey);
  
  try {
    $jwtToken = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
    return $jwtToken;
  } catch (Exception $e) {
    return null;
  }
}

function verifyJwtToken($jwtToken) {
  global $secretKey;
 
  try {
      $decoded = (json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $jwtToken)[1])))));
      return $decoded;
  } catch (Exception $e) {
      return null;
  }
}


?>
