-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2023 at 12:31 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothes_accessories`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `idcontact` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `message` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`idcontact`, `name`, `email`, `message`) VALUES
(1, 'Altin', 'altinduraku404@gmail.com', 'hello'),
(2, 'Altin Duraku', 'altinduraku02@gmail.com', 'hi there'),
(3, 'Altin', 'altin@test.com', 'testing');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `orderscol` varchar(100) DEFAULT NULL,
  `orderDate` datetime DEFAULT current_timestamp(),
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `email`, `phoneNumber`, `address`, `orderscol`, `orderDate`, `name`) VALUES
(1, 'altindurakuuu@gmail.com', '112', 'a', NULL, '2023-08-10 01:53:23', 'Altin'),
(2, 'altindurakuuu@gmail.com', '112', 'a', NULL, '2023-08-10 14:32:30', 'Altin'),
(3, 'altindurak2@gmail.com', '133', 'vushtrri', NULL, '2023-08-10 14:41:00', 'Altin');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `orderItemId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`orderItemId`, `orderId`, `productId`, `quantity`) VALUES
(1, 2, 1, 1),
(2, 3, 1, 2),
(3, 3, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `idproduct` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `category` varchar(30) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `times_sold` int(11) DEFAULT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp(),
  `imagepath` varchar(150) DEFAULT NULL,
  `imagepathhover` varchar(160) DEFAULT NULL,
  `old_price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idproduct`, `name`, `type`, `description`, `category`, `price`, `times_sold`, `date_added`, `imagepath`, `imagepathhover`, `old_price`) VALUES
(1, 'Watch', 'accessories', 'useful watch', 'Women', '19.00', 3, '2023-05-25 00:42:26', 'dist/images/product9.jpg', NULL, NULL),
(2, 'Jeans', 'clothes', 'Description of jeans', 'Men', '49.99', 10, '2023-05-25 00:54:09', 'dist/images/product15.jpg', NULL, 55),
(3, 'Dress', 'clothes', 'Description of dress', 'Women', '59.99', 3, '2023-05-25 00:54:09', 'dist/images/product12.jpg', NULL, NULL),
(4, 'Shoes', 'clothes', 'Description of shoes', 'Men', '79.99', 0, '2023-05-25 00:54:09', 'dist/images/product6.jpg', NULL, NULL),
(5, 'Handbag', 'accessories', 'Description of handbag', 'Women', '39.99', 0, '2023-05-25 00:54:09', 'dist/images/product5.jpg', NULL, NULL),
(6, 'T-Shirt', 'clothes', 'Description of t-shirt', 'Men', '19.99', 0, '2023-05-25 00:54:09', 'dist/images/product13.jpg', NULL, 0),
(7, 'Jeans', 'Jeans', 'Jeans for girls', 'Kids', '34.99', 0, '2023-05-25 00:54:09', 'dist/images/product16.jpg', NULL, NULL),
(8, 'Handbag', 'accessories', 'Description of hat', 'Kids', '24.99', 5, '2023-05-25 00:54:09', 'dist/images/product8.jpg', NULL, 56),
(9, 'Watch', 'accessories', 'Watch for Mens', 'Men', '89.99', 1, '2023-05-25 00:54:09', 'dist/images/product9.jpg', NULL, NULL),
(10, 'Sunglasses', 'accessories', 'Description of sunglasses', 'Kids', '59.99', 8, '2023-05-25 00:54:09', 'dist/images/product4.jpg', NULL, 88),
(11, 'Shoes', 'clothes', 'Mens shoes', 'Men', '29.99', 0, '2023-05-25 00:54:09', 'dist/images/product1.jpg', NULL, NULL),
(13, 'Shirt', 'clothes', 'shirt', 'Men', '222.00', 2, '2023-05-24 23:04:31', 'dist/images/product14.jpg', '', 250);

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `idsubscriptions` int(11) NOT NULL,
  `emails` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`idsubscriptions`, `emails`) VALUES
(156, 'altinduraku02@gmail.com'),
(158, 'altinduraku2@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(128) NOT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phonenumber` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`iduser`, `name`, `email`, `username`, `password`, `address`, `phonenumber`) VALUES
(30, 'Altini', 'altinduraku02@gmail.com', 'altiniii', '$2y$10$5pesmny01fVSfRCPCE8EbeGv8iQQ8PloA9.0MoVTjdrurpO05Y5Ly', '#Altini1', '044111000'),
(32, 'Altin Duraku', 'altinduraku4111204@gmail.com', 'altiniiiid', '$2y$10$kPwmumCa2WcjToha7F18rO9A4qP3KkOaR9oh1MVJWhoSwKXC23jMa', 'None', '23121445566'),
(38, 'Altin Duraku', 'altinduraku4042221@gmail.com', 'aaaltiniii', '$2y$10$4Y3ZB5D9mSaZiyp1yC08OuCIsDSIAzbLoNMJKkbcSOZpU6RruV/Ne', 'None', '2333311222'),
(41, 'Altin Duraku', 'altinduraku40422@gmail.com', 'aaaltini1', '$2y$10$bzbwSp02uTYku8oO/PF4eOywjS/yv.zsmQBcfWUA39GVyqgzVhHjW', 'None', '1233331102'),
(44, 'Altin Duraku', 'altinduraku404@gmail.com', 'altini', '$2y$10$dlBW4BRSsx4bwpjldAYOGujskg9mJlYLa2ujDH7xxgrkqslW3rlxe', 'None', '045486873'),
(47, 'Altin', 'aaltindurakuuu@gmail.com', 'aaaltindurakuu', '$2y$10$U76x74DgyPRoURma5PTcf.oqk1uP7CgoCBKov1ubJwBFmhG2Bh4da', 'none', '1222211133');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`idcontact`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD UNIQUE KEY `orderId_UNIQUE` (`orderId`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`orderItemId`),
  ADD KEY `FK_order_items_orders` (`orderId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idproduct`),
  ADD UNIQUE KEY `idproducts_UNIQUE` (`idproduct`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`idsubscriptions`),
  ADD UNIQUE KEY `idsubscriptions_UNIQUE` (`idsubscriptions`),
  ADD UNIQUE KEY `emails_UNIQUE` (`emails`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `phonenumber_UNIQUE` (`phonenumber`),
  ADD UNIQUE KEY `iduser_UNIQUE` (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `idcontact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `orderItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `idsubscriptions` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FK_order_items_orders` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
