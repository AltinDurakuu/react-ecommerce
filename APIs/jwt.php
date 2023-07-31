<?php
require_once 'vendor/src/BeforeValidException.php';
require_once 'vendor/src/ExpiredException.php';
require_once 'vendor/src/SignatureInvalidException.php';
require_once 'vendor/src/JWT.php';

use \Firebase\JWT\JWT;

function generateJwtToken($payload) {
  $secretKey = bin2hex(random_bytes(32));
  define('JWT_SECRET_KEY', $secretKey);
  
  try {
    $jwtToken = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
    return $jwtToken;
  } catch (Exception $e) {
    return null;
  }
}

function verifyJwtToken($jwtToken) {
  if (!defined('JWT_SECRET_KEY')) {
    return null;
  }
  
  try {
    $decoded = JWT::decode($jwtToken, JWT_SECRET_KEY, array('HS256'));
    return $decoded;
  } catch (Exception $e) {
    return null;
  }
}

?>
