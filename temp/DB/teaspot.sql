-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 08, 2023 at 11:32 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teaspot`
--

-- --------------------------------------------------------

--
-- Table structure for table `commentdb`
--

CREATE TABLE `commentdb` (
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `commentID` int NOT NULL,
  `page_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `commentdb`
--

INSERT INTO `commentdb` (`message`, `user`, `date`, `commentID`, `page_id`) VALUES
('Test', 'Alex', '2023-03-05 21:35:35', 42, 1),
('Test', 'Alex', '2023-03-08 12:54:08', 49, 2),
('Test', 'Alex', '2023-03-08 12:55:23', 50, 2),
('', 'All', '2023-03-08 12:55:51', 51, 5),
('a', 'a', '2023-03-08 14:50:57', 118, 2),
('a', 'a', '2023-03-08 14:51:25', 119, 2),
('adsf', 'adf', '2023-03-08 14:58:14', 128, 3),
('adsf', 'adf', '2023-03-08 14:58:48', 129, 3),
('adsf', 'adf', '2023-03-08 14:59:03', 130, 3),
('adsf', 'adf', '2023-03-08 14:59:17', 131, 3),
('adsf', 'adf', '2023-03-08 15:00:09', 132, 3),
('Test', 'Alexander', '2023-03-08 15:24:39', 164, 6);

-- --------------------------------------------------------

--
-- Table structure for table `logger`
--

CREATE TABLE `logger` (
  `user` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `type` varchar(40) NOT NULL,
  `logID` int NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logger`
--

INSERT INTO `logger` (`user`, `message`, `type`, `logID`, `date`) VALUES
('Alexander', 'This is a test', 'comment post', 26, '2023-03-06 12:48:37'),
('Alex', 'Test\r\n', 'comment post', 27, '2023-03-07 13:24:38'),
(NULL, NULL, 'newsletter addition', 28, '2023-03-07 16:47:34'),
(NULL, NULL, 'newsletter addition', 29, '2023-03-07 16:50:00'),
(NULL, NULL, 'newsletter addition', 30, '2023-03-07 16:58:59'),
(NULL, NULL, 'newsletter addition', 31, '2023-03-07 16:59:20'),
(NULL, NULL, 'newsletter addition', 32, '2023-03-07 16:59:29'),
(NULL, NULL, 'comment post', 33, '2023-03-07 17:12:29'),
('a', 'd', 'comment post', 34, '2023-03-07 17:15:42'),
('Alex', 'Alex', 'comment post', 35, '2023-03-08 12:52:28'),
('Alex', 'Test', 'comment post', 36, '2023-03-08 12:52:46'),
('Alex', 'Test', 'comment post', 37, '2023-03-08 12:54:08'),
('Alex', 'Test', 'comment post', 38, '2023-03-08 12:55:23'),
('All', '', 'comment post', 39, '2023-03-08 12:55:51'),
('a', '', 'comment post', 40, '2023-03-08 12:55:57'),
('test', 'test', 'comment post', 41, '2023-03-08 13:10:26'),
('comm', '', 'comment post', 42, '2023-03-08 13:18:13'),
('Tester', 'Test this', 'comment post', 43, '2023-03-08 13:18:25'),
('test', 'test', 'comment post', 44, '2023-03-08 13:28:18'),
('test', 'test', 'comment post', 45, '2023-03-08 13:31:43'),
('t', '', 'comment post', 46, '2023-03-08 13:41:31'),
('test', 'test', 'comment post', 47, '2023-03-08 13:42:07'),
('t', '', 'comment post', 48, '2023-03-08 13:42:16'),
('alex', 'this is a test\r\n', 'comment post', 49, '2023-03-08 13:42:30'),
('alex', 'this is a test\r\n', 'comment post', 50, '2023-03-08 13:43:10'),
('a', 'e', 'comment post', 51, '2023-03-08 13:43:52'),
('a', 'e', 'comment post', 52, '2023-03-08 13:44:26'),
('e', 'e', 'comment post', 53, '2023-03-08 13:44:31'),
('a', 'a', 'comment post', 54, '2023-03-08 13:44:44'),
('ae', 'ae', 'comment post', 55, '2023-03-08 13:45:03'),
('e', 'e', 'comment post', 56, '2023-03-08 13:45:14'),
('a', 'a', 'comment post', 57, '2023-03-08 13:46:44'),
('a', 'a', 'comment post', 58, '2023-03-08 13:47:10'),
('a', 'a', 'comment post', 59, '2023-03-08 13:47:18'),
('a', 'a', 'comment post', 60, '2023-03-08 13:47:30'),
('a', 'a', 'comment post', 61, '2023-03-08 13:48:29'),
('Alexadner', 'theirhseaeifnasefasef', 'comment post', 62, '2023-03-08 13:59:11'),
('alexander', 'test', 'comment post', 63, '2023-03-08 14:08:09'),
('alexander', 'test', 'comment post', 64, '2023-03-08 14:08:50'),
('a', 'a', 'comment post', 65, '2023-03-08 14:09:40'),
('a', 'a', 'comment post', 66, '2023-03-08 14:12:21'),
('a', 'a', 'comment post', 67, '2023-03-08 14:15:26'),
('a', 'a', 'comment post', 68, '2023-03-08 14:15:52'),
('alex', 'test', 'comment post', 69, '2023-03-08 14:19:17'),
('alex', 'testsaesetas', 'comment post', 70, '2023-03-08 14:19:25'),
('a', 'a', 'comment post', 71, '2023-03-08 14:20:47'),
('asdfasef', 'asfasefsef', 'comment post', 72, '2023-03-08 14:20:53'),
('asfeas', 'esfes', 'comment post', 73, '2023-03-08 14:20:57'),
('asfeas', 'esfes', 'comment post', 74, '2023-03-08 14:21:20'),
('delete', 'this', 'comment post', 75, '2023-03-08 14:21:33'),
('delete', 'this', 'comment post', 76, '2023-03-08 14:22:24'),
('df', 'df', 'comment post', 77, '2023-03-08 14:22:32'),
('df', 'df', 'comment post', 78, '2023-03-08 14:23:14'),
('asdfasd', 'asdfasdfasdf', 'comment post', 79, '2023-03-08 14:23:21'),
('asdfasd', 'asdfasdfasdf', 'comment post', 80, '2023-03-08 14:23:31'),
('a', 'a', 'comment post', 81, '2023-03-08 14:23:38'),
('a', 'a', 'comment post', 82, '2023-03-08 14:24:39'),
('a', 'a', 'comment post', 83, '2023-03-08 14:24:51'),
('a', 'a', 'comment post', 84, '2023-03-08 14:25:15'),
('a', 'a', 'comment post', 85, '2023-03-08 14:25:34'),
('adfaksdfjas', 'asdfkajsfse', 'comment post', 86, '2023-03-08 14:25:41'),
('adfaksdfjas', 'asdfkajsfse', 'comment post', 87, '2023-03-08 14:25:50'),
('adfaksdfjas', 'asdfkajsfse', 'comment post', 88, '2023-03-08 14:25:58'),
('comment here', 'thais isa  aksefjaseiofdpofaj sef opasjefasdklfjaseifo pasjefioa ;sef', 'comment post', 89, '2023-03-08 14:26:28'),
('ALEXANDER', 'REALLY COOL STUFF', 'comment post', 90, '2023-03-08 14:26:49'),
('ASDF', 'ASDF', 'comment post', 91, '2023-03-08 14:27:11'),
('alexander', 'this is pretty cool', 'comment post', 92, '2023-03-08 14:27:58'),
('alexander', 'this is pretty cool', 'comment post', 93, '2023-03-08 14:28:34'),
('afase', 'asefasefasdffase', 'comment post', 94, '2023-03-08 14:29:45'),
('afase', 'asefasefasdffase', 'comment post', 95, '2023-03-08 14:30:06'),
('afase', 'asefasefasdffase', 'comment post', 96, '2023-03-08 14:30:36'),
('afase', 'asefasefasdffase', 'comment post', 97, '2023-03-08 14:33:41'),
('afase', 'asefasefasdffase', 'comment post', 98, '2023-03-08 14:34:01'),
('afase', 'asefasefasdffase', 'comment post', 99, '2023-03-08 14:34:57'),
('afase', 'asefasefasdffase', 'comment post', 100, '2023-03-08 14:35:07'),
('alexander', 'this is really cool', 'comment post', 101, '2023-03-08 14:35:30'),
('alexander', 'this is really cool', 'comment post', 102, '2023-03-08 14:36:11'),
('alexander', 'this is really cool', 'comment post', 103, '2023-03-08 14:36:19'),
('alexander', 'this is really cool', 'comment post', 104, '2023-03-08 14:37:05'),
('test', 'test this out', 'comment post', 105, '2023-03-08 14:37:26'),
('a', 'a', 'comment post', 106, '2023-03-08 14:50:57'),
('a', 'a', 'comment post', 107, '2023-03-08 14:51:25'),
('alex', 'this is pretty cool\r\n', 'comment post', 108, '2023-03-08 14:51:33'),
('alexander', 'alexander', 'comment post', 109, '2023-03-08 14:52:03'),
('alexander', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 110, '2023-03-08 14:54:34'),
('alexander', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 111, '2023-03-08 14:55:44'),
('alex', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 112, '2023-03-08 14:56:38'),
('alex', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 113, '2023-03-08 14:57:37'),
('adf', 'adsf', 'comment post', 114, '2023-03-08 14:58:14'),
('adf', 'adsf', 'comment post', 115, '2023-03-08 14:58:48'),
('adf', 'adsf', 'comment post', 116, '2023-03-08 14:59:03'),
('adf', 'adsf', 'comment post', 117, '2023-03-08 14:59:17'),
('adf', 'adsf', 'comment post', 118, '2023-03-08 15:00:09'),
('test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 119, '2023-03-08 15:00:27'),
('test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 120, '2023-03-08 15:01:32'),
('test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 121, '2023-03-08 15:02:30'),
('alex', 'this is pretty cool', 'comment post', 122, '2023-03-08 15:02:49'),
('alex', 'this is pretty cool', 'comment post', 123, '2023-03-08 15:02:58'),
('alex', 'this is pretty cool', 'comment post', 124, '2023-03-08 15:04:15'),
('alex', 'this is pretty cool', 'comment post', 125, '2023-03-08 15:04:22'),
('a', 'a', 'comment post', 126, '2023-03-08 15:04:35'),
('aes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'comment post', 127, '2023-03-08 15:04:41'),
('alexander', 'This is pretty cool!', 'comment post', 128, '2023-03-08 15:05:32'),
('alexander', 'This is pretty cool!', 'comment post', 129, '2023-03-08 15:06:50'),
('alex ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 130, '2023-03-08 15:07:07'),
('alex', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 131, '2023-03-08 15:08:05'),
('alex', 'this is pretty cool', 'comment post', 132, '2023-03-08 15:08:11'),
('alex', 'alsdfjaslrjasef ioasjefaskdlfj asefas fasef', 'comment post', 133, '2023-03-08 15:08:23'),
('alex', 'alsdfjaslrjasef ioasjefaskdlfj asefas fasef', 'comment post', 134, '2023-03-08 15:09:09'),
('alex', 'this is pretty cool', 'comment post', 135, '2023-03-08 15:09:19'),
('alex', 'this is pretty cool', 'comment post', 136, '2023-03-08 15:09:42'),
('alex', 'this is pretty cool', 'comment post', 137, '2023-03-08 15:10:10'),
('alex', 'this is pretty cool\r\n', 'comment post', 138, '2023-03-08 15:10:24'),
('alex', 'this is pretty cool\r\n', 'comment post', 139, '2023-03-08 15:10:38'),
('alex', 'this is pretty cool\r\n', 'comment post', 140, '2023-03-08 15:10:51'),
('alex', 'this is pretty cool\r\n', 'comment post', 141, '2023-03-08 15:11:08'),
('alex', 'this is pretty cool\r\n', 'comment post', 142, '2023-03-08 15:11:50'),
('alex', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 143, '2023-03-08 15:11:59'),
('alex', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 144, '2023-03-08 15:13:06'),
('alex', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 145, '2023-03-08 15:14:29'),
('Alexander', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 146, '2023-03-08 15:15:52'),
('Alexander', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n', 'comment post', 147, '2023-03-08 15:16:25'),
('alex', 'a', 'comment post', 148, '2023-03-08 15:16:39'),
('a', 'a', 'comment post', 149, '2023-03-08 15:16:46'),
('Alexander', 'Test', 'comment post', 150, '2023-03-08 15:24:39');

-- --------------------------------------------------------

--
-- Table structure for table `logindb`
--

CREATE TABLE `logindb` (
  `username` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `userID` int NOT NULL,
  `password` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `doB` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logindb`
--

INSERT INTO `logindb` (`username`, `userID`, `password`, `doB`, `email`) VALUES
('admin', 1, 'admin', '1/1/1900', 'admin@teaspot.net');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`email`) VALUES
('a'),
('ad'),
('add'),
('addition'),
('admin@d'),
('admin@mail.com'),
('alex@alex.com'),
('asdfsert'),
('d'),
('df'),
('dferew'),
('here'),
('qwe'),
('r'),
('s'),
('signup'),
('urf'),
('y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commentdb`
--
ALTER TABLE `commentdb`
  ADD PRIMARY KEY (`commentID`);

--
-- Indexes for table `logger`
--
ALTER TABLE `logger`
  ADD PRIMARY KEY (`logID`);

--
-- Indexes for table `logindb`
--
ALTER TABLE `logindb`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commentdb`
--
ALTER TABLE `commentdb`
  MODIFY `commentID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT for table `logger`
--
ALTER TABLE `logger`
  MODIFY `logID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `logindb`
--
ALTER TABLE `logindb`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
