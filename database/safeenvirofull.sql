-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 02, 2022 at 11:35 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safeenvirofull`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(6, 'admin', 'admin@admin.com', '2021-10-15 00:34:46', '$2y$10$ObTqfu6eYjG4hykmyoyZhu7/gxnxlnXtUcfxGCtT2OOzAYX2as3iW', '2ABwMSNqc5YfgctFPyDDigocqFLLgdLe5VJ2MbZMULjiWXliX7vPEPs89MR3', '2021-10-15 00:34:46', '2021-10-15 00:34:46'),
(7, 'admin1', 'admin1@admin.com', '2021-10-15 00:34:46', '$2y$10$Qy0jreotcyp4zqpCi.CBfuFCyOPgnvrrWcnFhQkcXXVialW72ipkq', '9do8lOcT1x', '2021-10-15 00:34:46', '2021-10-15 00:34:46');

-- --------------------------------------------------------

--
-- Table structure for table `collectiondata`
--

CREATE TABLE `collectiondata` (
  `collectionid` int(100) NOT NULL,
  `collectionpoint` text NOT NULL,
  `collectedby` text NOT NULL,
  `wastetype` text NOT NULL,
  `collectingequipment` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `dateandtime` text NOT NULL,
  `tippingpoint` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `collectionform`
--

CREATE TABLE `collectionform` (
  `collectionid` int(100) NOT NULL,
  `collectionpoint` text NOT NULL,
  `collectedby` text NOT NULL,
  `wastetype` text NOT NULL,
  `collectingequipment` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `dateandtime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `complains`
--

CREATE TABLE `complains` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tracking_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postal_code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remarks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `complains`
--

INSERT INTO `complains` (`id`, `tracking_id`, `postal_code`, `address`, `email`, `phone`, `remarks`, `status`, `created_at`, `updated_at`) VALUES
(2, 'RW005', 'AB1', 'Aberdeen AB10, UK', 'pratheeplove1@gmail.com', '56656', NULL, 'completed', '2021-05-15 23:10:38', '2021-05-15 23:12:02'),
(3, 'RW006', 'BA20', 'Somerset, UK', 'sarujan95@gmail.com', '342567890', 'hi', 'pending', '2021-05-15 23:14:24', '2021-05-15 23:14:24'),
(4, 'RW007', 'B1', 'Baskerville House, Cambridge St, Birmingham B1 2ND, UK', 'gayathri@adage.lk', '86979854756', NULL, 'completed', '2021-05-16 16:53:36', '2021-05-19 12:51:05'),
(5, 'RW008', 'B29', 'Birmingham B29, UK', 'admin@safeenviro.co.uk', '7588615537', 'Demo', 'completed', '2021-05-16 22:49:21', '2021-05-19 12:51:48'),
(6, 'RW009', 'AB1', '2 Morningside Pl, Aberdeen AB10 7NG, UK', 'gayathri@adage.lk', '86799-78786', 'sudgfhpihdf', 'completed', '2021-05-20 09:25:48', '2021-05-20 09:26:51'),
(7, 'RW010', 'AB1', 'Scotland, UK', 'sarujan95@gmail.com', '234567980-', 'hi', 'completed', '2021-06-02 23:24:24', '2021-06-02 23:27:21'),
(8, 'RW011', 'AB15', 'Scotland, UK', 'SARUJAN12@GMAIL.COM', 'F134567890', 'TESTING', 'completed', '2021-06-25 09:41:53', '2021-06-25 09:45:56'),
(9, 'RW012', 'B1', '2 Centenary Square, Birmingham B1 2ND, UK', 'gayathri@adage.lk', '787979898', NULL, 'pending', '2021-06-25 10:23:04', '2021-06-25 10:23:04'),
(10, 'RW013', 'AB1', '2 Morningside Pl, Aberdeen AB10 7NG, UK', 'sarujan95@gmail.com', '324567890', 'test', 'pending', '2021-06-25 13:01:59', '2021-06-25 13:01:59'),
(11, 'RW014', 'AB11', '29 S Esplanade W, Aberdeen AB11 9AA, UK', 'sarujan95@gmail.com', '345678', 'aaaa', 'pending', '2021-06-25 13:08:55', '2021-06-25 13:08:55'),
(12, 'RW015', 'AB12', 'Aberdeen AB12, UK', 'sarujan95@gmail.com', '2354678', 'sdafs', 'pending', '2021-06-25 13:10:31', '2021-06-25 13:10:31'),
(13, 'RW016', 'AB5', 'Huntly, UK', 'sarujan95@gmail.com', '234567890', 'test', 'pending', '2021-06-25 13:30:33', '2021-06-25 13:30:33'),
(14, 'RW017', 'AB2', 'Clifton Rd, Aberdeen AB24 4EN, UK', 'sarujan95@gmail.com', '12345678', 'www', 'pending', '2021-06-25 13:36:34', '2021-06-25 13:36:34'),
(15, 'RW018', 'AB24', '87 Bedford Rd, Aberdeen AB24 3LN, UK', 'sarujan95@gmail.com', '34567980-', 'aaaaa', 'pending', '2021-06-25 13:43:12', '2021-06-25 13:43:12'),
(16, 'RW019', 'AB1', '1 Morningside Pl, Aberdeen AB10 7NG, UK', 'TEST@GMAIL.COM', '0212221212', 'TEST', 'pending', '2021-06-28 13:21:04', '2021-06-28 13:21:04'),
(17, 'RW020', 'BR1', 'Greater London, UK', 'abc@email.com', '9876543211', 'test', 'pending', '2021-09-23 20:39:13', '2021-09-23 20:39:13'),
(18, 'RW021', 'AB1', 'Aberdeen City, UK', 'arshedahmed98@gmail.com', '0773595377', 'Hey', 'completed', '2021-10-08 06:18:20', '2021-10-08 06:18:20'),
(19, 'RW022', 'AB1', '2 Morningside Pl, Aberdeen AB10 7NG, UK', 'arshed.ahmed@co.uk', '0773595377', 'Hoore', 'completed', '2021-10-12 06:21:05', '2021-10-12 06:21:05'),
(20, 'RW023', 'AB1', 'Aberdeen AB10, UK', 'arshedahmed98@gmail.com', '5345356356', 'hey', 'completed', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(21, 'RW025', '71500', '4d, mosque road, Kiringadeniya', 'arshedahmed98@gmail.com', '777380795', 'Hi', 'completed', '2022-02-21 10:05:49', '2022-02-21 10:05:49'),
(22, 'RW026', '71500', '4d, mosque road, Kiringadeniya', 'arshedahmed98@gmail.com', '777380795', 'Hi', 'completed', '2022-02-21 10:08:08', '2022-02-21 10:08:08');

--
-- Triggers `complains`
--
DELIMITER $$
CREATE TRIGGER `complain_id_prefix` BEFORE INSERT ON `complains` FOR EACH ROW BEGIN
  INSERT INTO traking_seq VALUES (NULL);
  SET NEW.tracking_id = CONCAT('RW', LPAD(LAST_INSERT_ID(), 3, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `complain_images`
--

CREATE TABLE `complain_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `complain_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `complain_images`
--

INSERT INTO `complain_images` (`id`, `complain_id`, `image`, `created_at`, `updated_at`) VALUES
(29, 20, '../src/uploads/1645437171674-photo_2022-01-14 17.07.10.jpeg', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(30, 20, '../src/uploads/1645437279658-pexels-dave-colman-7930056.jpg', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(31, 20, '../src/uploads/1645437279690-photo_2022-01-14 17.07.10.jpeg', '2021-10-18 04:02:53', '2021-10-18 04:02:53'),
(32, 22, '1645438088473-pexels-anna-shvets-5027791.jpg', '2022-02-21 10:08:08', '2022-02-21 10:08:08');

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`id`, `type`, `email`, `created_at`, `updated_at`) VALUES
(1, 'council', 'gayathri@adage.lk', '2021-06-03 10:19:04', '2021-06-03 10:19:04'),
(2, 'company', 'te@gmail.com', '2021-06-03 10:19:04', '2021-06-03 10:19:04');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_04_16_075124_create_admin_table', 1),
(5, '2021_04_27_162317_create_complain_table', 1),
(6, '2021_04_27_162943_create_complain_image_table', 1),
(7, '2021_05_01_054155_add_email_and_remarks_column_to_complain_table', 1),
(8, '2021_05_03_114723_add_address_field_for_complain_table', 1),
(9, '2021_05_07_034627_add_phone_number_to_complain_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `postals`
--

CREATE TABLE `postals` (
  `Postcode` varchar(225) NOT NULL,
  `Latitude` varchar(225) DEFAULT NULL,
  `Longitude` varchar(225) DEFAULT NULL,
  `Easting` varchar(225) DEFAULT NULL,
  `Northing` varchar(225) DEFAULT NULL,
  `Grid Reference` varchar(225) DEFAULT NULL,
  `Town_area` varchar(225) DEFAULT NULL,
  `Region` varchar(225) DEFAULT NULL,
  `Postcodes` varchar(225) DEFAULT NULL,
  `Active postcodes` varchar(225) DEFAULT NULL,
  `Population` varchar(225) DEFAULT NULL,
  `Households` varchar(225) DEFAULT NULL,
  `Nearby districts` varchar(225) DEFAULT NULL,
  `email` varchar(225) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `postals`
--

INSERT INTO `postals` (`Postcode`, `Latitude`, `Longitude`, `Easting`, `Northing`, `Grid Reference`, `Town_area`, `Region`, `Postcodes`, `Active postcodes`, `Population`, `Households`, `Nearby districts`, `email`) VALUES
('AB1', '57.1269', '-2.13644', '391839', '804005', 'NJ918040', 'Aberdeen', 'Aberdeen', '2655', '0', '', '', 'AB10, AB9, AB15, AB25, AB2, AB12, AB16, AB11, AB99, AB24', ''),
('AB2', '57.1713', '-2.14152', '391541', '808948', 'NJ915089', 'Aberdeen', 'Aberdeen', '3070', '0', '', '', 'AB16, AB22, AB24, AB25, AB1, AB9, AB15, AB10, AB11, AB23', ''),
('AB3', '57.0876', '-2.59624', '363963', '799780', 'NO639997', 'Aberdeen', 'Aberdeen', '2168', '0', '', '', 'AB31, AB34, AB52, AB33, AB14, AB32, AB30, AB13, AB51, DD9', ''),
('AB4', '57.5343', '-2.12713', '392487', '849358', 'NJ924493', 'Fraserburgh, Peterhead, Macduff', 'Aberdeen', '2956', '0', '', '', 'AB41, AB43, AB42, AB53, AB22, AB23, AB2, AB24, AB25, AB21', ''),
('AB5', '57.4652', '-2.64764', '361248', '841843', 'NJ612418', 'Buckie, Huntly, Inverurie', 'Aberdeen', '3002', '0', '', '', 'AB54, AB52, AB45, AB53, AB33, AB44, AB55, AB51, AB3, AB56', ''),
('AB9', '57.1466', '-2.1142', '393189', '806196', 'NJ931061', 'Aberdeen', 'Aberdeen', '1066', '0', '', '', 'AB25, AB10, AB24, AB11, AB1, AB22, AB12, AB2, AB16, AB99', ''),
('AB10', '57.1349', '-2.11738', '392994', '804893', 'NJ929048', 'Aberdeen city centre, Bridge of Dee, Mannofield', 'Aberdeen', '896', '675', '21964', '11517', 'AB9, AB25, AB11, AB1, AB24, AB12, AB99, AB15, AB22, AB2', ''),
('AB11', '57.1371', '-2.09346', '394442', '805136', 'NJ944051', 'Aberdeen city centre, Torry', 'Aberdeen', '896', '641', '21237', '10926', 'AB10, AB99, AB9, AB25, AB24, AB12, AB1, AB23, AB15, AB22', ''),
('AB12', '57.1034', '-2.10994', '393439', '801386', 'NJ934013', 'Aberdeen, Altens, Ardoe, Banchory Devenick, Blairs, Bridge of Dee, Cove Bay, Maryculter, Nigg, Portlethen', 'Aberdeen', '1036', '798', '25414', '10688', 'AB99, AB10, AB9, AB11, AB1, AB25, AB24, AB15, AB22, AB2', ''),
('AB13', '57.1124', '-2.24341', '385357', '802409', 'NJ853024', 'Milltimber', 'Aberdeen', '109', '86', '2725', '947', 'AB14, AB15, AB32, AB1, AB16, AB21, AB12, AB10, AB99, AB2', ''),
('AB14', '57.1033', '-2.27271', '383578', '801402', 'NJ835014', 'Peterculter, Upper Anguston', 'Aberdeen', '166', '142', '4881', '2162', 'AB13, AB32, AB15, AB1, AB12, AB16, AB21, AB39, AB99, AB10', ''),
('AB15', '57.1386', '-2.16703', '389990', '805312', 'NJ899053', 'Aberdeen, Bieldside, Craigiebuckler, Cults, Hazlehead, Kingswells, Mannofield, Milltimber', 'Aberdeen', '1263', '1067', '35543', '15330', 'AB16, AB1, AB10, AB2, AB9, AB25, AB11, AB24, AB12, AB22', ''),
('AB16', '57.1595', '-2.15654', '390630', '807637', 'NJ906076', 'Aberdeen, Mastrick, Northfield, Middlefield, Cornhill', 'Aberdeen', '916', '771', '29238', '12874', 'AB2, AB15, AB25, AB24, AB1, AB9, AB22, AB10, AB11, AB21', ''),
('AB21', '57.208', '-2.20058', '387982', '813043', 'NJ879130', 'Aberdeen, Blackburn, Bucksburn, Dyce, Fintray, Kinellar, Newmachar, Whiterashes', 'Aberdeen', '932', '777', '22181', '9650', 'AB16, AB2, AB22, AB15, AB23, AB24, AB13, AB25, AB1, AB9', ''),
('AB22', '57.1865', '-2.11968', '392865', '810638', 'NJ928106', 'Aberdeen, Bridge of Don, Danestone, Grandholm, Persley', 'Aberdeen', '376', '311', '16311', '6978', 'AB24, AB2, AB25, AB9, AB23, AB10, AB16, AB11, AB1, AB12', ''),
('AB23', '57.2083', '-2.08983', '394672', '813062', 'NJ946130', 'Aberdeen, Balmedie, Belhelvie, Bridge of Don, Potterton, Whitecairns', 'Aberdeen', '412', '316', '11143', '4517', 'AB22, AB24, AB11, AB25, AB9, AB2, AB10, AB99, AB21, AB16', ''),
('AB24', '57.1634', '-2.10825', '393552', '808065', 'NJ935080', 'Aberdeen, Old Aberdeen, Woodside, Tillydrone, Seaton, Bedford', 'Aberdeen', '971', '808', '36343', '16935', 'AB25, AB9, AB22, AB10, AB11, AB2, AB16, AB12, AB23, AB1', ''),
('AB25', '57.1535', '-2.11427', '393186', '806964', 'NJ931069', 'Aberdeen city centre, Kittybrewster, Foresterhill, Rosemount, George Street', 'Aberdeen', '630', '481', '18407', '9634', 'AB9, AB24, AB10, AB11, AB22, AB2, AB16, AB1, AB12, AB99', ''),
('AB30', '56.8457', '-2.47705', '370999', '772795', 'NO709727', 'Laurencekirk', 'Aberdeenshire', '358', '314', '7229', '2935', 'DD10, AB31, DD9, AB3, AB39, DD11, AB14, AB32, AB13, AB51', ''),
('AB31', '57.0669', '-2.5048', '369488', '797431', 'NO694974', 'Banchory', 'Aberdeenshire', '1056', '646', '15319', '6096', 'AB3, AB30, AB14, AB32, AB13, AB51, AB34, AB52, AB39, AB33', ''),
('AB32', '57.1545', '-2.31474', '381058', '807113', 'NJ810071', 'Westhill', 'Aberdeenshire', '430', '363', '12902', '5011', 'AB14, AB13, AB16, AB15, AB21, AB2, AB25, AB1, AB9, AB24', ''),
('AB33', '57.2261', '-2.73701', '355598', '815281', 'NJ555152', 'Alford', 'Aberdeenshire', '310', '271', '5273', '2180', 'AB34, AB52, AB54, AB3, AB5, AB36, AB31, AB51, AB32, AB55', ''),
('AB34', '57.0927', '-2.80984', '351025', '800481', 'NJ510004', 'Aboyne', 'Aberdeenshire', '298', '271', '5387', '2309', 'AB33, AB3, AB31, AB36, AB35, AB54, AB52, DD9, AB5, AB14', ''),
('AB35', '57.0389', '-3.14443', '330650', '794783', 'NO306947', 'Ballater', 'Aberdeenshire', '201', '166', '2624', '1217', 'AB36, AB34, PH12, PH11, AB37, AB38, IV33, IV34, AB33, AB3', ''),
('AB36', '57.1963', '-3.07261', '335283', '812233', 'NJ352122', 'Strathdon', 'Aberdeenshire', '55', '47', '515', '242', 'AB35, AB33, AB34, AB37, AB55, AB38, IV33, IV32, IV34, IV35', ''),
('AB37', '57.3309', '-3.35309', '318633', '827516', 'NJ186275', 'Ballindalloch', 'Moray', '95', '87', '1534', '678', 'IV35, IV34, PH26, AB38, IV33, IV30, PH25, AB36, IV31, PH24', ''),
('AB38', '57.4855', '-3.22723', '326521', '844582', 'NJ265445', 'Aberlour', 'Moray', '183', '163', '4660', '2009', 'IV33, IV34, IV35, IV32, IV30, AB37, IV31, AB55, AB36, AB54', ''),
('AB39', '56.9781', '-2.217', '386908', '787453', 'NO869874', 'Stonehaven, Newtonhill', 'Aberdeenshire', '600', '529', '17645', '7238', 'AB13, AB14, AB15, AB1, AB12, AB16, AB21, AB99, AB10, AB2', ''),
('AB41', '57.3718', '-2.11673', '393079', '831266', 'NJ930312', 'Ellon', 'Aberdeenshire', '1182', '817', '20837', '8517', 'AB4, AB22, AB23, AB24, AB25, AB2, AB9, AB10, AB21, AB16', ''),
('AB42', '57.5016', '-1.88814', '406803', '845715', 'NK068457', 'Hatton, St. Fergus', 'Aberdeenshire', '2398', '1228', '33730', '14367', 'AB4, AB43, AB41, AB23, AB22, AB53, AB24, AB11, AB25, AB9', ''),
('AB43', '57.6578', '-2.04486', '397422', '863100', 'NJ974631', 'Crimond', 'Aberdeenshire', '1446', '761', '23998', '10103', 'AB4, AB42, AB41, AB44, AB53, AB23, AB45, AB22, AB24, AB11', ''),
('AB44', '57.6682', '-2.49318', '370678', '864365', 'NJ706643', 'Macduff', 'Aberdeenshire', '156', '145', '4009', '1794', 'AB45, AB53, AB5, AB56, AB52, AB43, AB54, AB51, AB4, AB31', ''),
('AB45', '57.6522', '-2.5672', '366247', '862618', 'NJ662626', 'Banff', 'Aberdeenshire', '687', '618', '11130', '4900', 'AB44, AB5, AB53, AB52, AB56, AB54, AB51, AB43, AB55, AB4', ''),
('AB51', '57.2879', '-2.40485', '375695', '821992', 'NJ756219', 'Inverurie', 'Aberdeenshire', '1736', '1178', '34643', '14152', 'AB32, AB53, AB52, AB21, AB14, AB31, AB13, AB41, AB16, AB2', ''),
('AB52', '57.3423', '-2.60243', '363839', '828136', 'NJ638281', 'Insch', 'Aberdeenshire', '261', '249', '4758', '1952', 'AB5, AB33, AB51, AB3, AB54, AB45, AB31, AB53, AB44, AB34', ''),
('AB53', '57.5344', '-2.40724', '375715', '849435', 'NJ757494', 'Turriff', 'Aberdeenshire', '1075', '685', '12613', '5325', 'AB44, AB51, AB45, AB4, AB5, AB52, AB54, AB41, AB32, AB43', ''),
('AB54', '57.4657', '-2.75597', '354750', '841965', 'NJ547419', 'Aberchirder, Cabrach, Cairnie, Forgue, Gartly, Glass, Kennethmont, Lumsden, Rhynie, Rothiemay', 'Aberdeenshire', '1052', '656', '11367', '5003', 'AB5, AB33, AB52, AB55, AB56, AB45, AB53, AB34, AB44, AB38', ''),
('AB55', '57.5324', '-2.97561', '341681', '849558', 'NJ416495', 'Keith', 'Moray', '747', '425', '9307', '4097', 'AB56, IV33, IV32, AB54, AB38, IV34, AB5, AB36, IV35, IV30', ''),
('AB56', '57.6735', '-2.91925', '345269', '865219', 'NJ452652', 'Buckie', 'Moray', '1015', '640', '14825', '6515', 'AB55, IV32, AB54, AB45, IV31, IV30, AB44, IV33, AB5, AB38', ''),
('AB99', '57.1113', '-2.09399', '394406', '802264', 'NJ944022', 'Non-geographic', 'Aberdeen', '7', '3', '', '', 'AB12, AB11, AB10, AB9, AB1, AB25, AB24, AB15, AB22, AB23', ''),
('AL1', '51.7487', '-0.319472', '516110', '206892', 'TL161068', 'St Albans', 'St Albans', '2017', '1210', '36291', '15082', 'AL2, AL4, WD7, AL3, AL5, AL10, AL9, WD6, WD25, WD2', ''),
('AL2', '51.7223', '-0.331044', '515379', '203938', 'TL153039', 'St Albans, Bricket Wood, Colney Street, Frogmore, London Colney, Napsbury, Park Street, Potters Crouch, Chiswell Green', 'St Albans', '978', '723', '23335', '9380', 'AL1, WD7, AL4, AL3, WD25, WD2, WD5, WD23, AL5, WD6', ''),
('AL3', '51.7754', '-0.366611', '512790', '209787', 'TL127097', 'St Albans, Childwickbury, Flamstead, Gorhambury, Markyate, Porters Wood, Redbourn, Sandridge', 'St Albans', '1301', '950', '28025', '11197', 'AL5, AL1, AL4, AL2, HP2, WD25, WD2, WD5, WD23, HP1', ''),
('AL4', '51.7713', '-0.295997', '517672', '209443', 'TL176094', 'St Albans, Colney Heath, London Colney, Jersey Farm, Marshalswick, Oaklands, Sandridge, Smallford, Tyttenhanger, Wheathampstead', 'St Albans', '1055', '780', '27221', '10792', 'AL1, AL3, AL10, AL2, AL5, WD7, AL8, AL9, AL7, WD6', ''),
('AL5', '51.8146', '-0.351508', '513733', '214170', 'TL137141', 'Harpenden', 'St Albans', '1546', '1062', '30486', '11672', 'AL3, AL1, AL4, AL2, LU2, LU1, AL8, HP2, AL6, WD7', ''),
('AL6', '51.8299', '-0.199453', '524172', '216119', 'TL241161', 'Welwyn, Ayot St Peter, Ayot St Lawrence, Digswell, Rabley Heath, Tewin', 'Welwyn Hatfield', '656', '507', '11181', '4502', 'AL8, AL7, SG3, SG1, AL9, SG2, AL10, SG14, EN6, AL4', ''),
('AL7', '51.7986', '-0.189338', '524956', '212656', 'TL249126', 'Welwyn Garden City', 'Welwyn Hatfield', '1428', '910', '33974', '14170', 'AL8, AL6, AL9, SG3, AL10, SG14, EN6, SG2, SG1, SG13', ''),
('AL8', '51.8034', '-0.210325', '523495', '213154', 'TL234131', 'Welwyn Garden City, Lemsford', 'Welwyn Hatfield', '599', '425', '13366', '5648', 'AL7, AL6, AL10, AL9, SG3, AL4, SG1, SG14, SG2, EN6', ''),
('AL9', '51.7469', '-0.201704', '524245', '206885', 'TL242068', 'Hatfield, Brookmans Park, Essendon, North Mymms', 'Welwyn Hatfield', '613', '429', '10641', '4342', 'AL10, AL7, AL8, EN6, AL6, EN5, AL4, AL1, SG3, EN4', ''),
('AL10', '51.761', '-0.231253', '522167', '208404', 'TL221084', 'Hatfield', 'Welwyn Hatfield', '1164', '788', '35391', '12424', 'AL9, AL8, AL4, AL7, AL1, AL6, EN6, AL2, SG3, WD6', ''),
('B1', '52.4796', '-1.90778', '406360', '286856', 'SP063868', 'Birmingham City Centre, Ladywood', 'Birmingham ', '713', '300', '8514', '4526', 'B3, B2, B4, B5, B19, B18, B15, B16, B99, B6', ''),
('B2', '52.4863', '-1.89732', '407070', '287603', 'SP070876', 'Birmingham City Centre, Ladywood', 'Birmingham ', '860', '404', '655', '473', 'B4, B3, B99, B5, B1, B19, B6, B18, B7, B12', ''),
('B3', '52.4823', '-1.90289', '406692', '287157', 'SP066871', 'Birmingham City Centre, Ladywood', 'Birmingham ', '703', '210', '2226', '1406', 'B1, B2, B4, B5, B19, B99, B18, B15, B6, B16', ''),
('B4', '52.4838', '-1.89373', '407314', '287325', 'SP073873', 'Birmingham City Centre, Ladywood', 'Birmingham ', '466', '196', '4337', '465', 'B2, B3, B99, B5, B1, B19, B6, B7, B12, B18', ''),
('B5', '52.4722', '-1.89683', '407105', '286034', 'SP071860', 'Digbeth, Highgate, Lee Bank', 'Birmingham', '880', '382', '12156', '5139', 'B2, B4, B3, B1, B12, B99, B15, B19, B16, B6', ''),
('B6', '52.5025', '-1.88685', '407778', '289405', 'SP077894', 'Aston', 'Birmingham', '872', '425', '19507', '5886', 'B99, B7, B19, B4, B2, B3, B5, B20, B44, B1', ''),
('B7', '52.4938', '-1.87436', '408627', '288439', 'SP086884', 'Nechells', 'Birmingham', '436', '270', '8554', '3444', 'B6, B99, B4, B2, B19, B8, B9, B3, B12, B5', ''),
('B8', '52.49', '-1.84277', '410773', '288021', 'SP107880', 'Washwood Heath, Ward End, Saltley', 'Birmingham', '777', '578', '42278', '11987', 'B9, B10, B7, B24, B25, B23, B11, B6, B4, B99', ''),
('B9', '52.4781', '-1.85283', '410093', '286696', 'SP100866', 'Bordesley Green', 'Birmingham', '775', '418', '24915', '7548', 'B10, B8, B11, B7, B25, B4, B12, B5, B23, B2', ''),
('B10', '52.4701', '-1.85329', '410063', '285806', 'SP100858', 'Small Heath', 'Birmingham', '456', '315', '26004', '7108', 'B9, B11, B8, B25, B12, B7, B5, B28, B27, B4', ''),
('B11', '52.4554', '-1.85984', '409621', '284170', 'SP096841', 'Sparkhill, Tyseley', 'Birmingham', '1029', '611', '44391', '12602', 'B10, B12, B9, B25, B13, B28, B27, B8, B7, B5', ''),
('B12', '52.4609', '-1.88254', '408078', '284779', 'SP080847', 'Balsall Heath, Sparkbrook, Highgate', 'Birmingham', '748', '458', '20548', '6649', 'B5, B13, B11, B4, B10, B2, B7, B3, B1, B6', ''),
('B13', '52.4351', '-1.88261', '408078', '281909', 'SP080819', 'Moseley, Billesley', 'Birmingham', '1094', '670', '37672', '15392', 'B14, B12, B11, B28, B47, B5, B30, B4, B10, B29', ''),
('B14', '52.4188', '-1.89026', '407560', '280095', 'SP075800', 'Kings Heath, Yardley Wood, Brandwood, Druids Heath, Warstock', 'Birmingham', '1033', '778', '43099', '18063', 'B13, B47, B30, B22, B12, B28, B5, B38, B11, B4', ''),
('B15', '52.468', '-1.92346', '405297', '285565', 'SP052855', 'Edgbaston, Lee Bank', 'Birmingham', '838', '472', '17872', '6220', 'B16, B18, B1, B5, B3, B2, B4, B19, B17, B12', ''),
('B16', '52.4755', '-1.93228', '404697', '286398', 'SP046863', 'Edgbaston, Ladywood', 'Birmingham', '1147', '497', '23619', '10305', 'B15, B18, B1, B21, B3, B5, B17, B2, B4, B19', ''),
('B17', '52.4615', '-1.96293', '402616', '284839', 'SP026848', 'Harborne', 'Birmingham', '797', '554', '25625', '10999', 'B66, B67, B29, B32, B16, B15, B68, B31, B21, B18', ''),
('B18', '52.4915', '-1.92251', '405358', '288179', 'SP053881', 'Winson Green, Hockley', 'Birmingham', '901', '440', '16739', '6389', 'B19, B15, B20, B16, B1, B21, B3, B2, B99, B4', ''),
('B19', '52.4963', '-1.90616', '406468', '288714', 'SP064887', 'Lozells, Newtown, Birchfield', 'Birmingham', '681', '448', '20204', '6606', 'B99, B3, B1, B2, B18, B4, B6, B20, B5, B7', ''),
('B20', '52.5134', '-1.91884', '405605', '290615', 'SP056906', 'Birchfield, Handsworth Wood Perry Barr', 'Birmingham', '751', '530', '34752', '11191', 'B18, B21, B19, B42, B99, B6, B43, B1, B3, B2', ''),
('B21', '52.5051', '-1.93634', '404418', '289691', 'SP044896', 'Handsworth', 'Birmingham', '778', '433', '29626', '9638', 'B20, B18, B16, B19, B66, B15, B43, B99, B6, B1', ''),
('B22', '52.4117', '-1.92883', '404938', '279302', 'SP049793', 'Kings Norton', 'Birmingham', '10', '0', '', '', 'B30, B38, B29, B14, B31, B15, B16, B13, B47, B48', ''),
('B23', '52.5276', '-1.8517', '410158', '292202', 'SP101922', 'Erdington, Short Heath', 'Birmingham', '1234', '825', '42858', '18745', 'B24, B73, B8, B9, B44, B72, B7, B10, B42, B74', ''),
('B24', '52.5196', '-1.82887', '411709', '291316', 'SP117913', 'Erdington, Tyburn', 'Birmingham', '761', '574', '28280', '11680', 'B23, B72, B35, B8, B73, B25, B36, B76, B9, B34', ''),
('B25', '52.4616', '-1.82607', '411915', '284864', 'SP119848', 'Yardley', 'Birmingham', '499', '270', '15861', '5983', 'B27, B26, B10, B11, B9, B8, B28, B33, B12, B90', ''),
('B26', '52.4607', '-1.79279', '414176', '284770', 'SP141847', 'Sheldon, Yardley', 'Birmingham', '743', '570', '32458', '13394', 'B33, B25, B92, B27, B34, B36, B91, B35, B37, B10', ''),
('B27', '52.4458', '-1.82377', '412075', '283107', 'SP120831', 'Acocks Green', 'Birmingham', '543', '433', '25331', '10206', 'B25, B28, B11, B26, B90, B10, B92, B9, B8, B13', ''),
('B28', '52.4278', '-1.84317', '410761', '281102', 'SP107811', 'Hall Green', 'Birmingham', '833', '589', '30345', '10982', 'B27, B90, B11, B13, B25, B10, B14, B9, B8, B12', ''),
('B29', '52.4377', '-1.94561', '403795', '282193', 'SP037821', 'Selly Oak, Bournbrook, Selly Park, Weoley Castle, California', 'Birmingham', '1093', '791', '42615', '15306', 'B30, B17, B22, B38, B16, B15, B31, B32, B13, B14', ''),
('B30', '52.4212', '-1.9281', '404987', '280359', 'SP049803', 'Bournville, Cotteridge, Stirchley', 'Birmingham', '881', '608', '29541', '12757', 'B22, B38, B29, B14, B15, B31, B16, B13, B17, B18', ''),
('B31', '52.4092', '-1.97311', '401926', '279022', 'SP019790', 'Northfield', 'Birmingham', '1457', '1136', '53794', '22747', 'B22, B38, B45, B29, B30, B17, B32, B48, B67, B66', ''),
('B32', '52.4509', '-1.9945', '400471', '283660', 'SP004836', 'Woodgate, Bartley Green, Quinton, California', 'Birmingham', '1093', '764', '38357', '16209', 'B68, B17, B62, B67, B29, B31, B66, B63, B45, B70', ''),
('B33', '52.4808', '-1.78795', '414498', '287007', 'SP144870', 'Kitts Green, Stechford', 'Birmingham', '920', '694', '34483', '13699', 'B34, B26, B36, B35, B37, B25, B92, B8, B76, B9', ''),
('B34', '52.4957', '-1.78168', '414919', '288666', 'SP149886', 'Shard End, Buckland End', 'Birmingham', '384', '326', '18941', '8112', 'B36, B33, B35, B26, B37, B76, B8, B92, B24, B25', ''),
('B35', '52.5172', '-1.78999', '414348', '291056', 'SP143910', 'Castle Vale', 'Birmingham', '436', '284', '9931', '4223', 'B36, B76, B34, B33, B24, B26, B72, B23, B8, B75', ''),
('B36', '52.5045', '-1.77998', '415032', '289645', 'SP150896', 'Castle Bromwich, Smith\'s Wood', 'Solihull', '716', '576', '35132', '13822', 'B34, B35, B33, B76, B26, B24, B37, B92, B8, B46', ''),
('B37', '52.4784', '-1.74181', '417633', '286750', 'SP176867', 'Chelmsley Wood, Marston Green, Kingshurst, Fordbridge', 'Solihull', '919', '733', '35875', '15370', 'B40, B33, B34, B36, B26, B46, B92, B35, B93, B25', ''),
('B38', '52.4011', '-1.93396', '404590', '278123', 'SP045781', 'Kings Norton', 'Birmingham', '587', '475', '21061', '8859', 'B22, B30, B31, B29, B14, B48, B47, B16, B15, B13', ''),
('B40', '52.4588', '-1.72499', '418784', '284574', 'SP187845', 'National Exhibition Centre, Birmingham International Airport, Bickenhill', 'Solihull', '26', '13', '9', '2', 'B37, B26, B92, B46, B33, B93, B34, B91, B36, B25', ''),
('B42', '52.5347', '-1.90466', '406564', '292986', 'SP065929', 'Perry Barr, Great Barr, Hamstead', 'Birmingham', '739', '407', '24262', '9307', 'B44, B20, B43, B19, B99, B6, B3, B2, B1, B23', ''),
('B43', '52.5476', '-1.92824', '404963', '294419', 'SP049944', 'Great Barr, Hamstead, Pheasey', 'Birmingham', '669', '548', '28796', '11795', 'B42, B20, B44, B21, WS5, B18, WS9, B19, B71, B16', ''),
('B44', '52.545', '-1.88566', '407851', '294133', 'SP078941', 'Perry Barr, Kingstanding, Great Barr', 'Birmingham', '795', '635', '37447', '15044', 'B42, B6, B43, B23, B99, B73, B7, B20, B74, B19', ''),
('B45', '52.3885', '-2.00842', '399524', '276719', 'SO995767', 'Rednal, Rubery', 'Birmingham', '916', '702', '30273', '12810', 'B31, B32, B38, B48, B68, B62, B22, B61, B60, B29', ''),
('B46', '52.5071', '-1.69764', '420619', '289954', 'SP206899', 'Water Orton, Coleshill', 'North Warwickshire', '663', '482', '12188', '5194', 'B37, B40, B36, B34, B35, B33, B78, B76, B77, B26', ''),
('B47', '52.3887', '-1.88118', '408183', '276748', 'SP081767', 'Hollywood, Wythall', 'Bromsgrove Worcestershire', '293', '242', '9560', '4132', 'B14, B13, B38, B90, B22, B12, B28, B30, B11, B5', ''),
('B48', '52.3569', '-1.95169', '403387', '273205', 'SP033732', 'Alvechurch', 'Bromsgrove Worcestershire', '244', '208', '5685', '2309', 'B97, B38, B31, B22, B29, B30, B45, B98, B47, B96', ''),
('B49', '52.2172', '-1.86741', '409155', '257673', 'SP091576', 'Alcester', 'Stratford-on-Avon', '508', '373', '10097', '4440', 'B50, B80, B96, B98, B95, B97, WR12, CV37, WR11, B47', ''),
('B50', '52.1696', '-1.85664', '409902', '252380', 'SP099523', 'Alcester', 'Stratford-on-Avon', '226', '206', '5517', '2235', 'B49, WR12, WR11, B80, CV37, B96, GL55, B98, B95, B97', ''),
('B60', '52.3235', '-2.0498', '396703', '269490', 'SO967694', 'Bromsgrove', 'Bromsgrove', '1169', '852', '27178', '11377', 'B61, B45, B97, B48, WR7, B63, B62, B98, B96, B31', ''),
('B61', '52.3441', '-2.06747', '395501', '271782', 'SO955717', 'Bromsgrove', 'Bromsgrove', '855', '725', '24316', '10046', 'B60, B45, B63, B48, B64, B62, DY9, WR7, B97, B31', ''),
('B62', '52.46', '-2.03725', '397566', '284673', 'SO975846', 'Halesowen', 'Dudley', '919', '580', '24112', '10054', 'B65, B63, B64, B32, B69, B68, B17, DY2, B67, DY4', ''),
('B63', '52.453', '-2.06737', '395519', '283896', 'SO955838', 'Halesowen', 'Dudley', '1018', '782', '36590', '15599', 'B64, B62, B65, DY2, DY9, B32, DY5, DY1, B69, DY4', ''),
('B64', '52.4724', '-2.0691', '395403', '286054', 'SO954860', 'Cradley Heath', 'Sandwell', '631', '473', '16616', '6986', 'B63, B65, DY2, B62, DY5, DY1, B69, DY4, B68, DY9', ''),
('B65', '52.4828', '-2.04344', '397147', '287209', 'SO971872', 'Rowley Regis', 'Sandwell', '641', '513', '23581', '9730', 'B62, B64, B69, B68, B63, DY2, DY4, B67, B70, B32', ''),
('B66', '52.4936', '-1.96587', '402414', '288410', 'SP024884', 'Smethwick, Bearwood', 'Sandwell', '950', '568', '21491', '7363', 'B67, B17, B21, B18, B68, B16, B19, B70, B71, B20', ''),
('B67', '52.4877', '-1.97729', '401639', '287754', 'SP016877', 'Smethwick, Bearwood', 'Sandwell', '752', '523', '29853', '11466', 'B66, B68, B17, B32, B16, B70, B21, B18, B71, B69', ''),
('B68', '52.4801', '-2.00184', '399972', '286908', 'SO999869', 'Oldbury', 'Sandwell', '690', '583', '30924', '12394', 'B67, B32, B70, B65, B69, B66, B62, B17, B71, B16', ''),
('B69', '52.5028', '-2.02542', '398372', '289433', 'SO983894', 'Oldbury', 'Sandwell', '1079', '713', '29011', '11505', 'B65, B70, B68, B62, DY4, WS10, DY2, B67, B71, B66', ''),
('B70', '52.5198', '-2.00269', '399915', '291324', 'SO999913', 'West Bromwich', 'Sandwell', '1368', '834', '27772', '10542', 'B71, B69, B68, B67, WS10, B66, DY4, WS2, B32, B65', ''),
('B71', '52.5348', '-1.9901', '400769', '292993', 'SP007929', 'West Bromwich', 'Sandwell', '790', '678', '30934', '12543', 'B70, WS1, WS10, B67, WS5, B66, WS2, B68, DY4, B69', ''),
('B72', '52.5545', '-1.82362', '412056', '295199', 'SP120951', 'Sutton Coldfield town centre, Maney, Wylde Green', 'Birmingham', '374', '237', '9660', '3951', 'B73, B75, B24, B76, B23, B74, B35, B44, B8, B36', ''),
('B73', '52.5593', '-1.83766', '411103', '295730', 'SP111957', 'Boldmere, New Oscott, Wylde Green', 'Birmingham', '1023', '554', '23071', '9628', 'B72, B74, B75, B23, B24, B44, B76, B8, B35, B42', ''),
('B74', '52.5823', '-1.85727', '409768', '298286', 'SP097982', 'Four Oaks, Mere Green, Little Aston, Streetly', 'Birmingham', '972', '762', '32012', '13302', 'B73, B75, B23, B72, B44, WS9, B24, B42, B76, B7', ''),
('B75', '52.5778', '-1.81121', '412890', '297793', 'SP128977', 'Sutton Trinity, Falcon Lodge, Rectory', 'Birmingham', '836', '645', '26863', '11019', 'B72, B73, B74, B76, B24, B35, B23, WS14, B36, B44', ''),
('B76', '52.5447', '-1.78989', '414346', '294115', 'SP143941', 'Walmley', 'Birmingham', '1072', '523', '21509', '9175', 'B35, B72, B36, B75, B34, B73, B24, B33, B23, B26', ''),
('B77', '52.6203', '-1.67166', '422326', '302554', 'SK223025', 'Tamworth', 'Tamworth', '1425', '985', '57219', '22836', 'B78, B79, B46, CV9, B75, WS14, B76, DE13, B37, B40', ''),
('B78', '52.6068', '-1.67506', '422102', '301051', 'SK221010', 'Tamworth', 'Tamworth', '720', '616', '24227', '9885', 'B77, B79, B46, CV9, B75, B76, B37, B40, B72, WS14', ''),
('B79', '52.6481', '-1.68238', '421586', '305643', 'SK215056', 'Tamworth', 'Tamworth', '850', '669', '22302', '9745', 'B77, B78, WS14, B46, DE13, WS13, CV9, B75, DE14, DE12', ''),
('B80', '52.2791', '-1.8973', '407104', '264555', 'SP071645', 'Studley', 'Stratford-on-Avon', '253', '209', '7055', '2994', 'B98, B97, B96, B49, B95, B47, B48, B14, B50, B38', ''),
('B90', '52.4012', '-1.82609', '411929', '278146', 'SP119781', 'Shirley, Wythall, Majors Green, Dickens Heath', 'Solihull', '1483', '1058', '45652', '18910', 'B28, B27, B91, B25, B47, B14, B94, B92, B11, B13', ''),
('B91', '52.414', '-1.78071', '415013', '279578', 'SP150795', 'Olton, Solihull', 'Solihull', '1409', '848', '33280', '13518', 'B92, B90, B26, B93, B94, B33, B27, B28, B34, B36', ''),
('B92', '52.4353', '-1.77417', '415450', '281948', 'SP154819', 'Olton, Solihull', 'Solihull', '905', '722', '36119', '15211', 'B91, B26, B33, B27, B34, B40, B36, B37, B28, B25', ''),
('B93', '52.3831', '-1.74212', '417650', '276149', 'SP176761', 'Knowle, Dorridge', 'Solihull', '855', '532', '19505', '7944', 'B91, B94, B92, B40, B37, B90, B26, B95, B33, B27', ''),
('B94', '52.353', '-1.79098', '414334', '272791', 'SP143727', 'Olton, Solihull', 'Solihull', '421', '336', '7298', '2979', 'B91, B95, B93, B90, B92, B26, B27, B47, B28, B33', ''),
('B95', '52.2871', '-1.78053', '415068', '265463', 'SP150654', 'Henley-in-Arden', 'Stratford-on-Avon', '412', '325', '6000', '2771', 'B94, B80, B91, B93, B98, B92, B49, B90, CV37, B97', ''),
('B96', '52.2549', '-1.95953', '402860', '261859', 'SP028618', 'Redditch', 'Redditch', '236', '211', '4968', '2181', 'B97, B80, B98, B48, B49, B60, WR7, B31, B38, B45', ''),
('B97', '52.3033', '-1.94966', '403530', '267243', 'SP035672', 'Redditch', 'Redditch', '1267', '803', '33402', '13653', 'B98, B48, B96, B80, B38, B60, B31, B22, B29, B30', ''),
('B98', '52.3037', '-1.91602', '405823', '267290', 'SP058672', 'Redditch', 'Redditch', '1128', '814', '49783', '20137', 'B97, B80, B48, B96, B38, B47, B22, B30, B49, B14', ''),
('B99', '52.4959', '-1.89425', '407277', '288671', 'SP072886', 'Non-geographic', 'Birmingham', '59', '52', '', '', 'B19, B4, B2, B6, B7, B3, B5, B1, B18, B20', ''),
('BA1', '51.3888', '-2.3602', '375033', '165590', 'ST750655', 'Bath', 'Bath and North East Somerset', '2557', '1566', '40612', '18710', 'BA2, BA15, BS31, BS30, BA11, SN13, BA3, BS15, BS37, BS17', ''),
('BA2', '51.362', '-2.37619', '373905', '162615', 'ST739626', 'Bath', 'Bath and North East Somerset', '2693', '2165', '73927', '29525', 'BA1, BA15, BA3, BS31, BA11, BS30, BS39, BS15, BS18, BA14', ''),
('BA3', '51.2856', '-2.44929', '368763', '154147', 'ST687541', 'Radstock, Midsomer Norton, Holcombe, Coleford', 'Bath and North East Somerset', '1945', '1254', '34598', '13970', 'BS39, BA2, BS31, BA11, BA10, BS30, BA1, BA4, BS15, BS18', ''),
('BA4', '51.1746', '-2.53332', '362813', '141842', 'ST628418', 'Shepton Mallet', 'Mendip', '998', '829', '17781', '7448', 'BA7, BA10, BS39, BA5, BA3, BA6, BA9, BS18, DT9, BA16', ''),
('BA5', '51.2116', '-2.65493', '354349', '146025', 'ST543460', 'Wells', 'Mendip', '990', '773', '17731', '7901', 'BA6, BA4, BA16, BS40, BS28, BS27, TA11, BS41, BS18, BS39', ''),
('BA6', '51.1431', '-2.70942', '350469', '138443', 'ST504384', 'Glastonbury', 'Mendip', '758', '551', '12840', '5634', 'BA16, TA11, BA5, BS28, BS27, TA15, BA4, TA7, BS40, TA10', ''),
('BA7', '51.0894', '-2.51854', '363780', '132360', 'ST637323', 'Castle Cary', 'South Somerset', '230', '190', '3655', '1663', 'BA10, BA4, BA9, DT9, BA8, TA11, BA22, BA6, BS39, BA21', ''),
('BA8', '51', '-2.41073', '371275', '122370', 'ST712223', 'Templecombe', 'South Somerset', '231', '207', '4165', '1793', 'BA9, DT10, BA10, SP8, DT9, BA7, SP7, BA22, BA21, DT2', ''),
('BA9', '51.0577', '-2.41013', '371353', '128786', 'ST713287', 'Wincanton', 'South Somerset', '464', '372', '7201', '3173', 'BA8, BA10, BA7, SP8, DT10, DT9, BA4, BA11, BA3, SP7', ''),
('BA10', '51.1124', '-2.44731', '368784', '134884', 'ST687348', 'Bruton', 'South Somerset', '199', '177', '3843', '1414', 'BA9, BA7, BA4, BA8, BA3, SP8, DT9, BA11, DT10, BA6', ''),
('BA11', '51.2376', '-2.32633', '377315', '148763', 'ST773487', 'Frome', 'Mendip', '1438', '1142', '32633', '13874', 'BA13, BA3, BA2, BA15, BA1, BA12, BA14, SP8, BA10, BA9', ''),
('BA12', '51.1743', '-2.18749', '386989', '141690', 'ST869416', 'Warminster', 'Wiltshire', '1367', '1120', '28544', '12460', 'BA13, BA14, SP7, BA11, SP8, SN12, BA15, SP3, SN13, SN14', ''),
('BA13', '51.2631', '-2.18465', '387213', '151565', 'ST872515', 'Westbury', 'Wiltshire', '775', '617', '20306', '8488', 'BA14, BA12, SN12, BA15, BA11, SN13, SN14, SP7, SN10, BA3', ''),
('BA14', '51.319', '-2.20285', '385960', '157785', 'ST859577', 'Trowbridge', 'Wiltshire', '1753', '1346', '48041', '20026', 'BA13, BA15, SN13, SN12, SN14, BA12, BA11, BA2, BA1, SN10', ''),
('BA15', '51.3484', '-2.2622', '381836', '161068', 'ST818610', 'Bradford-on-Avon', 'Wiltshire', '647', '475', '12995', '5820', 'BA14, BA2, SN13, BA1, SN12, BA13, BA11, SN14, GL9, BA12', ''),
('BA16', '51.1266', '-2.74321', '348087', '136631', 'ST480366', 'Street', 'Mendip', '436', '373', '13011', '5259', 'BA6, TA11, BS28, BA5, BS27, TA10, TA7, TA12, TA14, TA15', ''),
('BA20', '50.939', '-2.64273', '354936', '115703', 'ST549157', 'Yeovil', 'South Somerset', '790', '498', '11240', '4935', 'BA21, BA22, TA15, TA14, DT9, TA12, TA13, TA16, TA11, TA18', ''),
('BA21', '50.9511', '-2.63382', '355574', '117043', 'ST555170', 'Yeovil', 'South Somerset', '894', '768', '33314', '14210', 'BA22, BA20, TA15, TA14, DT9, TA12, TA13, TA11, TA16, TA18', ''),
('BA22', '50.9686', '-2.63737', '355341', '118991', 'ST553189', 'Yeovil', 'South Somerset', '879', '774', '18102', '7227', 'BA21, BA20, TA15, TA14, TA12, DT9, TA11, TA13, TA16, TA18', ''),
('BB0', '53.7534', '-2.46423', '369487', '428659', 'SD694286', 'Blackburn', 'Blackburn', '1', '0', '', '', 'BB1, BB2, BB3, BB5, BB6, BL7, BL1, BB7, BL3, BL11', ''),
('BB1', '53.7552', '-2.46576', '369388', '428860', 'SD693288', 'Blackburn, Bank Hey, Belthorn, Blackamoor, Clayton-le-Dale, Guide, Knuzden, Mellor, Ramsgreave, Rishton, Salesbury, Shadsworth, Sunnybower, Whitebirk, Wilpshire', 'Blackburn with Darwen', '1907', '1287', '66805', '24188', 'BB0, BB2, BB3, BB5, BB6, BL7, BL1, BB7, PR0, BL3', ''),
('BB2', '53.7419', '-2.49801', '367251', '427395', 'SD672273', 'Blackburn, Beardwood, Balderstone, Cherry Tree, Feniscowles, Mellor, Mellor Brook, Mill Hill, Pleasington, Witton, Holly Tree and Griffin', 'Blackburn with Darwen', '2062', '1360', '59842', '24112', 'BB0, BB1, BB3, BB5, BB6, BL7, BL6, PR6, PR0, BL5', ''),
('BB3', '53.6977', '-2.46621', '369316', '422463', 'SD693224', 'Darwen, Bank Fold, Eccleshill, Hoddlesden, Lower Darwen, Pickup Bank, Tockholes', 'Blackburn with Darwen', '1173', '882', '34200', '14813', 'BB0, BB1, BB2, BL7, BL1, BB5, BB6, BL3, BL11, BL2', ''),
('BB4', '53.7034', '-2.29114', '380877', '423035', 'SD808230', 'Acre, Bent Gate, Haslingden, Helmshore, Rawtenstall', 'Rossendale', '1794', '1322', '41140', '17390', 'BL0, OL13, BB12, BL9, BB11, BB5, BL8, M45, BB10, BB3', ''),
('BB5', '53.7545', '-2.37227', '375551', '428746', 'SD755287', 'Accrington, Altham, Baxenden, Church, Clayton-le-Moors, Huncoat, Oswaldtwistle, Rising Bridge', 'Hyndburn', '2074', '1537', '61420', '25822', 'BB6, BB0, BB1, BB12, BB4, BB7, BB2, BB3, BB11, BL0', ''),
('BB6', '53.8039', '-2.41563', '372725', '434258', 'SD727342', 'Dinckley, Great Harwood, Langho', 'Hyndburn', '700', '362', '14602', '6252', 'BB5, BB7, BB1, BB0, BB12, BB2, BB3, BL7, BB11, BB10', ''),
('BB7', '53.8718', '-2.38919', '374507', '441802', 'SD745418', 'Clitheroe, Barrow, Chatburn, Dunsop Bridge, Gisburn, Hurst Green, Pendleton, Sabden, Slaidburn, Waddington, Whalley, Whitewell, Wiswell', 'Ribble Valley', '1419', '1161', '31641', '13509', 'BB6, BB5, BB12, BB1, BB0, BB9, BB11, BB8, BB2, BB10', ''),
('BB8', '53.8792', '-2.16811', '389046', '442569', 'SD890425', 'Colne, Foulridge, Laneshaw Bridge, Trawden, Winewall, Wycoller', 'Pendle', '1515', '771', '23032', '10295', 'BB18, BB94, BB9, BB10, BB11, BB12, OL13, BD23, BB7, OL14', ''),
('BB9', '53.837', '-2.21584', '385894', '437882', 'SD858378', 'Nelson, Barrowford, Blacko, Brierfield, Higherford, Roughlee', 'Pendle', '1829', '1364', '44588', '17604', 'BB10, BB11, BB8, BB12, BB18, OL13, BB94, BB7, BB4, BB6', ''),
('BB10', '53.7994', '-2.22161', '385501', '433700', 'SD855336', 'Burnley, Cliviger, Reedley, Worsthorne', 'Burnley', '1129', '874', '37183', '15694', 'BB9, BB11, BB12, OL13, BB8, BB18, BB4, BB5, BB94, BB6', ''),
('BB11', '53.7848', '-2.25078', '383574', '432082', 'SD835320', 'Burnley', 'Burnley', '1422', '824', '22428', '9909', 'BB10, BB12, BB9, BB4, OL13, BB5, BB8, BB6, BL0, BB18', ''),
('BB12', '53.802', '-2.28895', '381067', '434005', 'SD810340', 'Burnley, Barley, Fence, Higham, Padiham, Read, Simonstone, Wheatley Lane', 'Burnley', '1205', '958', '34620', '14926', 'BB11, BB10, BB4, BB9, BB6, BB5, BB7, BL0, OL13, BB8', ''),
('BB18', '53.9151', '-2.17255', '388764', '446564', 'SD887465', 'Barnoldswick, Earby, Kelbrook, Salterforth, Sough', 'Pendle', '665', '565', '17063', '7501', 'BB94, BB8, BB9, BB10, BD23, BB11, BB12, BD20, OL13, BB7', ''),
('BB94', '53.9155', '-2.14015', '390892', '446604', 'SD908466', 'Non-geographic, Earby ', 'Pendle', '21', '1', '', '', 'BB18, BB8, BB9, BD23, BB10, BD20, OL14, BB11, BD22, BB12', ''),
('BD1', '53.7973', '-1.75432', '416280', '433471', 'SE162334', 'Bradford city centre, Little Germany', 'Bradford ', '1569', '502', '3790', '1855', 'BD99, BD5, BD3, BD8, BD98, BD2, BD7, BD9, BD4, BD18', ''),
('BD2', '53.8142', '-1.73621', '417466', '435356', 'SE174353', 'Eccleshill, Fagley', 'Bradford', '849', '702', '29799', '11728', 'BD3, BD10, BD98, BD1, BD99, BD4, BD9, BD18, BD5, BD8', ''),
('BD3', '53.7979', '-1.72996', '417885', '433544', 'SE178335', 'Barkerend, Bradford Moor, Thornbury', 'Bradford', '897', '579', '33336', '9623', 'BD2, BD1, BD4, BD99, BD10, BD5, BD8, BD98, LS28, BD7', ''),
('BD4', '53.7768', '-1.72164', '418442', '431198', 'SE184311', 'Bierley, Bowling, East Bierley, Laisterdyke, Tong, Tong Street, Tyersal', 'Bradford', '1278', '951', '31147', '12600', 'BD3, BD5, BD2, BD1, BD99, BD19, BD10, BD7, BD11, BD12', ''),
('BD5', '53.7793', '-1.75835', '416022', '431468', 'SE160314', 'Bankfoot, Little Horton, West Bowling', 'Bradford', '1030', '642', '32021', '10706', 'BD99, BD1, BD7, BD12, BD4, BD6, BD8, BD98, BD3, BD2', ''),
('BD6', '53.7649', '-1.78478', '414285', '429860', 'SE142298', 'Buttershaw, Wibsey', 'Bradford', '903', '729', '29771', '12154', 'BD7, BD12, BD8, BD5, BD9, BD14, BD99, BD1, HD6, BD98', ''),
('BD7', '53.7842', '-1.78102', '414526', '432008', 'SE145320', 'Great Horton, Lidget Green', 'Bradford', '906', '617', '35214', '10861', 'BD8, BD6, BD5, BD99, BD9, BD14, BD1, BD98, BD18, BD12', ''),
('BD8', '53.8014', '-1.78062', '414547', '433922', 'SE145339', 'Girlington, Manningham, Lower Grange', 'Bradford', '929', '625', '31893', '9700', 'BD9, BD7, BD99, BD1, BD98, BD18, BD6, BD97, BD5, BD3', ''),
('BD9', '53.8115', '-1.78813', '414049', '435044', 'SE140350', 'Frizinghall, Heaton', 'Bradford', '714', '531', '28532', '7953', 'BD8, BD97, BD98, BD18, BD7, BD99, BD1, BD6, BD15, BD17', ''),
('BD10', '53.8309', '-1.72628', '418113', '437216', 'SE181372', 'Apperley Bridge, Eccleshill, Greengates, Idle, Thackley', 'Bradford', '895', '698', '25694', '10790', 'BD2, BD3, BD18, BD98, LS20, BD17, BD4, BD1, BD99, LS19', ''),
('BD11', '53.7499', '-1.67918', '421254', '428217', 'SE212282', 'Birkenshaw, Drighlington', 'Kirklees', '351', '285', '10971', '4713', 'WF16, BD19, WF15, LS28, BD4, WF17, LS27, WF14, BD12, WF13', ''),
('BD12', '53.7479', '-1.76245', '415763', '427973', 'SE157279', 'Low Moor, Oakenshaw, Wyke', 'Bradford', '740', '607', '16821', '7362', 'BD5, BD6, BD99, BD7, BD1, HD6, BD19, BD4, BD8, BD98', ''),
('BD13', '53.7876', '-1.85603', '409583', '432374', 'SE095323', 'Cullingworth, Denholme, Queensbury, Thornton', 'Bradford', '1130', '931', '24817', '10525', 'BD15, BD14, HX3, HX1, BD7, BD16, BD8, BD9, BD6, HX2', ''),
('BD14', '53.7833', '-1.81754', '412120', '431901', 'SE121319', 'Clayton', 'Bradford', '272', '233', '8860', '3388', 'BD7, BD15, BD13, BD6, BD8, BD9, BD5, BD97, BD99, BD1', ''),
('BD15', '53.808', '-1.83512', '410955', '434646', 'SE109346', 'Allerton, Norr, Wilsden', 'Bradford', '568', '437', '15713', '6272', 'BD13, BD14, BD16, BD9, BD97, BD8, BD7, BD98, BD18, BD99', ''),
('BD16', '53.8475', '-1.83221', '411137', '439042', 'SE111390', 'Bingley, Cottingley, Eldwick, Harden', 'Bingley', '1168', '825', '25630', '11391', 'BD15, BD97, BD17, BD18, BD14, BD9, BD13, BD21, BD98, BD8', ''),
('BD17', '53.845', '-1.76907', '415292', '438775', 'SE152387', 'Baildon, Shipley', 'Bradford', '831', '616', '17992', '8174', 'BD18, BD98, BD97, BD9, BD8, BD10, BD99, BD1, BD2, BD16', ''),
('BD18', '53.8301', '-1.77641', '414814', '437116', 'SE148371', 'Saltaire, Shipley', 'Bradford', '1039', '731', '27292', '11419', 'BD17, BD97, BD98, BD9, BD8, BD7, BD10, BD99, BD1, BD2', ''),
('BD19', '53.7266', '-1.71437', '418943', '425615', 'SE189256', 'Cleckheaton, Gomersal, Scholes', 'Kirklees', '964', '699', '22059', '9648', 'WF15, BD4, BD11, WF16, BD12, WF14, WF17, BD3, HD6, BD5', ''),
('BD20', '53.8958', '-1.94663', '403605', '444404', 'SE036444', 'Cononley, Cross Hills, Glusburn, Kildwick, Silsden, Steeton, Sutton-in-Craven', 'Bradford', '1585', '1339', '35800', '15059', 'BD22, BD21, BD16, LS29, BD23, BD13, BD15, HX2, BB94, HX7', ''),
('BD21', '53.8646', '-1.90837', '406124', '440935', 'SE061409', 'Hainworth, Keighley', 'Bradford', '1368', '951', '26636', '9811', 'BD22, BD20, BD16, BD13, BD15, HX2, BD97, LS29, BD17, BD18', ''),
('BD22', '53.8469', '-1.95235', '403233', '438963', 'SE032389', 'Cowling, Haworth, Oakworth, Oxenhope', 'Bradford', '1246', '1062', '29891', '12660', 'BD20, BD21, BD16, BD13, BD15, HX2, HX7, BD97, HX6, BD17', ''),
('BD23', '53.9887', '-2.05235', '396665', '454740', 'SD966547', 'Carleton-in-Craven, Embsay, Gargrave, Grassington, Hebden, Hellifield, Kettlewell, Kirkby Malham, Skipton, Threshfield', 'Craven', '1783', '1392', '29515', '13216', 'BB94, BB18, BD20, BB8, BD22, BD21, HX7, BB9, LS29, BD24', ''),
('BD24', '54.0771', '-2.28154', '381676', '464611', 'SD816646', 'Giggleswick, Horton in Ribblesdale, Settle', 'Craven', '396', '334', '5180', '2344', 'BB18, BB12, BB94, BB9, BB8, BB7, BD23, BB11, BB10, BB4', ''),
('BD97', '53.8265', '-1.79673', '413478', '436711', 'SE134367', 'Bingley', 'Bradford', '4', '4', '', '', 'BD9, BD18, BD98, BD8, BD17, BD16, BD15, BD7, BD14, BD99', ''),
('BD98', '53.817', '-1.76544', '415541', '435661', 'SE155356', 'Shipley', 'Bradford', '18', '16', '', '', 'BD18, BD9, BD99, BD8, BD1, BD17, BD2, BD97, BD5, BD7', ''),
('BD99', '53.7946', '-1.75879', '415987', '433170', 'SE159331', 'Bradford', 'Bradford', '19', '6', '', '', 'BD1, BD5, BD8, BD98, BD3, BD7, BD2, BD9, BD12, BD18', ''),
('BF1', '', '', '', '', '', 'British Forces', 'British Forces', '48', '48', '', '', '', ''),
('BH1', '50.7253', '-1.86307', '409762', '91751', 'SZ097917', 'Bournemouth town centre, Springbourne, East Cliff, Boscombe', 'Bournemouth ', '1498', '627', '19992', '10265', 'BH2, BH8, BH5, BH3, BH9, BH7, BH4, BH6, BH10, BH13', ''),
('BH2', '50.7219', '-1.88129', '408476', '91370', 'SZ084913', 'Bournemouth Central, West Cliff', 'Bournemouth', '506', '273', '8431', '4799', 'BH3, BH4, BH1, BH9, BH8, BH5, BH13, BH10, BH12, BH7', ''),
('BH3', '50.7355', '-1.88024', '408548', '92883', 'SZ085928', 'Talbot Woods, Winton', 'Bournemouth', '196', '130', '5635', '2275', 'BH2, BH9, BH1, BH8, BH4, BH10, BH12, BH7, BH5, BH13', ''),
('BH4', '50.7217', '-1.90054', '407117', '91346', 'SZ071913', 'Westbourne, Branksome Woods', 'Bournemouth', '496', '240', '9565', '5216', 'BH2, BH13, BH3, BH12, BH1, BH10, BH14, BH9, BH11, BH8', ''),
('BH5', '50.7258', '-1.83707', '411597', '91810', 'SZ115918', 'Boscombe, Pokesdown', 'Bournemouth', '366', '250', '10816', '5457', 'BH7, BH1, BH6, BH8, BH2, BH3, BH9, BH4, BH10, BH13', ''),
('BH6', '50.7277', '-1.8092', '413563', '92026', 'SZ135920', 'Southbourne, Tuckton, Wick', 'Bournemouth', '707', '525', '22725', '10270', 'BH5, BH7, BH1, BH8, BH23, BH2, BH3, BH9, BH4, BH10', ''),
('BH7', '50.7346', '-1.83415', '411801', '92789', 'SZ118927', 'Littledown, Iford', 'Bournemouth', '473', '294', '11495', '4819', 'BH5, BH8, BH6, BH1, BH3, BH9, BH2, BH4, BH10, BH23', ''),
('BH8', '50.7397', '-1.85398', '410400', '93353', 'SZ104933', 'Malmesbury Park, Charminster, Queens Park, Strouden Park, Townsend', 'Bournemouth', '907', '651', '28262', '12043', 'BH1, BH7, BH3, BH5, BH9, BH2, BH6, BH10, BH4, BH12', ''),
('BH9', '50.7498', '-1.87482', '408928', '94474', 'SZ089944', 'Winton, Moordown, Throop, Muscliff', 'Bournemouth', '884', '669', '30964', '11873', 'BH3, BH10, BH8, BH2, BH1, BH4, BH7, BH11, BH5, BH12', ''),
('BH10', '50.7591', '-1.89326', '407625', '95506', 'SZ076955', 'Kinson, Northbourne, Redhill, Ensbury Park, Wallisdown', 'Bournemouth', '593', '512', '20068', '8606', 'BH9, BH11, BH3, BH4, BH2, BH22, BH12, BH8, BH1, BH13', ''),
('BH11', '50.7609', '-1.9202', '405725', '95703', 'SZ057957', 'Kinson, Bear Cross, West Howe, Wallisdown', 'Bournemouth', '714', '500', '19783', '8497', 'BH12, BH10, BH13, BH9, BH4, BH14, BH3, BH17, BH18, BH22', ''),
('BH12', '50.738', '-1.92482', '405401', '93157', 'SZ054931', 'Branksome, Alderney, Upper Parkstone, Newtown', 'Poole', '1138', '755', '34966', '14631', 'BH11, BH13, BH14, BH4, BH3, BH10, BH17, BH2, BH9, BH8', ''),
('BH13', '50.7105', '-1.91827', '405867', '90099', 'SZ058900', 'Canford Cliffs, Sandbanks, Branksome Park', 'Poole', '413', '293', '8246', '4206', 'BH4, BH12, BH14, BH2, BH11, BH3, BH1, BH10, BH15, BH9', ''),
('BH14', '50.7223', '-1.94557', '403939', '91410', 'SZ039914', 'Lower Parkstone, Lilliput, Penn Hill', 'Poole', '930', '604', '23785', '10741', 'BH12, BH13, BH15, BH4, BH17, BH11, BH2, BH3, BH18, BH1', ''),
('BH15', '50.7208', '-1.9849', '401162', '91241', 'SZ011912', 'Poole town centre, Hamworthy, Oakdale', 'Poole', '1345', '844', '33212', '14579', 'BH17, BH14, BH18, BH16, BH13, BH12, BH4, BH2, BH11, BH21', ''),
('BH16', '50.7383', '-2.04437', '396965', '93188', 'SY969931', 'Upton, Turlin Moor, Lytchett Minster, Lytchett Matravers', 'Poole', '480', '403', '15430', '6391', 'BH18, BH15, BH17, BH14, BH12, BH11, BH20, BH13, BH21, BH4', ''),
('BH17', '50.7458', '-1.97326', '401983', '94022', 'SZ019940', 'Canford Heath, Creekmoor', 'Poole', '715', '437', '22518', '9336', 'BH18, BH15, BH14, BH12, BH11, BH16, BH21, BH13, BH10, BH4', ''),
('BH18', '50.757', '-1.99152', '400694', '95267', 'SZ006952', 'Broadstone', 'Poole', '413', '299', '11861', '4903', 'BH17, BH15, BH16, BH11, BH14, BH12, BH21, BH10, BH13, BH9', ''),
('BH19', '50.6114', '-1.96997', '402221', '79076', 'SZ022790', 'Swanage', 'Purbeck', '650', '549', '11316', '5275', 'BH15, BH14, BH17, BH13, BH18, BH12, BH4, BH2, BH11, BH16', ''),
('BH20', '50.6875', '-2.1446', '389881', '87548', 'SY898875', 'Wareham', 'Purbeck', '939', '718', '20134', '8566', 'BH16, BH15, DT11, BH18, BH17, BH14, BH13, BH19, BH12, BH4', ''),
('BH21', '50.8182', '-1.9646', '402590', '102073', 'SU025020', 'Wimborne', 'East Dorset', '2145', '1431', '40648', '16866', 'BH17, BH22, BH18, BH11, BH14, BH15, BH12, BH10, BH31, BH13', ''),
('BH22', '50.8061', '-1.88911', '407910', '100733', 'SU079007', 'West Moors', 'East Dorset', '957', '702', '26791', '12221', 'BH10, BH9, BH11, BH3, BH21, BH31, BH2, BH4, BH8, BH12', ''),
('BH23', '50.7454', '-1.75855', '417132', '94005', 'SZ171940', 'Christchurch', 'Christchurch', '2175', '1578', '52852', '23549', 'BH6, BH7, BH5, BH8, BH25, BH9, BH1, BH24, BH3, BH2', ''),
('BH24', '50.846', '-1.78779', '415037', '105185', 'SU150051', 'Ringwood', 'New Forest', '1170', '815', '23496', '10097', 'SP6, BH31, BH23, BH6, BH22, BH7, BH5, BH8, BH9, BH10', ''),
('BH25', '50.7523', '-1.65861', '424180', '94800', 'SZ241947', 'New Milton', 'New Forest', '1080', '801', '25809', '11946', 'SO41, BH23, SO42, BH6, PO39, BH7, BH5, PO40, BH8, SO43', ''),
('BH31', '50.8749', '-1.86922', '409298', '108386', 'SU092083', 'Verwood', 'East Dorset', '417', '287', '13310', '5480', 'BH22, BH24, SP6, BH9, BH10, BH8, BH3, BH21, BH1, BH11', ''),
('BL0', '53.6434', '-2.31619', '379194', '416367', 'SD791163', 'Bury, Ramsbottom, Edenfield, Shuttleworth', 'Bury', '661', '557', '17204', '7480', 'BL8, BL9, BB4, M26, BL7, M45, BL2, M25, OL10, M27', ''),
('BL1', '53.5889', '-2.44062', '370930', '410348', 'SD709103', 'Bolton, Smithills, Halliwell, Heaton', 'Bolton', '2871', '1858', '63209', '26997', 'BL3, BL11, BL2, BL7, BL78, BL4, M38, BL6, M29, BL5', ''),
('BL2', '53.5877', '-2.39787', '373760', '410197', 'SD737101', 'Bolton, Ainsworth, Bradley Fold, Bradshaw, Breightmet, Harwood, Tonge Fold, Tonge Moor', 'Bolton', '1448', '1142', '46068', '20113', 'BL78, BL11, BL1, BL4, BL3, BL7, M28, M38, BL8, M26', ''),
('BL3', '53.5661', '-2.43198', '371487', '407807', 'SD714078', 'Bolton, Little Lever', 'Bolton', '1797', '1361', '63944', '25000', 'BL11, BL78, BL1, BL4, M38, BL2, BL7, M28, M29, BL5', ''),
('BL4', '53.5474', '-2.4035', '373361', '405716', 'SD733057', 'Bolton, Farnworth, Kearsley', 'Bolton', '1053', '835', '33688', '14377', 'BL78, M38, M28, BL2, BL11, BL3, BL1, M26, M29, BL7', ''),
('BL5', '53.5517', '-2.51719', '365832', '406243', 'SD658062', 'Bolton, Over Hulton, Westhoughton', 'Bolton', '808', '670', '27064', '11499', 'M46, WN7, BL6, WN2, M29, BL3, BL11, WN1, BL1, BL4', ''),
('BL6', '53.5911', '-2.54015', '364344', '410637', 'SD643106', 'Bolton, Blackrod, Horwich, Lostock, Rivington', 'Bolton', '1381', '1008', '29345', '12649', 'BL5, WN2, BL1, M46, WN7, WN1, BL3, BL11, BL2, M29', ''),
('BL7', '53.6282', '-2.42304', '372120', '414713', 'SD721147', 'Bolton, Belmont, Bromley Cross, Chapeltown, Edgworth, Egerton, Turton', 'Bolton', '613', '506', '15290', '6519', 'BL1, BL11, BL2, BL3, BL78, BL4, M38, BB3, BL0, BL8', ''),
('BL8', '53.6018', '-2.32357', '378685', '411741', 'SD786117', 'Bury, Brandlesholme, Greenmount, Affetside, Hawkshaw, Holcombe, Ramsbottom, Tottington, Walshaw', 'Bury', '1516', '1020', '36175', '15036', 'BL9, BL0, M26, BL2, M45, M27, M25, OL10, BL78, BL7', ''),
('BL9', '53.592', '-2.28887', '380977', '410641', 'SD809106', 'Bury, Heap, Heap Bridge, Nangreaves, Summerseat, Unsworth, Walmersley', 'Bury', '1765', '1307', '47942', '20309', 'BL8, M45, M25, OL10, M26, BL0, M6, BL2, BB4, M7', ''),
('BL11', '53.5723', '-2.42538', '371928', '408494', 'SD719084', 'Bolton', 'Bolton', '31', '24', '', '', 'BL3, BL78, BL1, BL2, BL4, M38, BL7, M28, M26, M29', ''),
('BL78', '53.5615', '-2.40861', '373032', '407287', 'SD730072', 'Bolton', 'Bolton', '14', '10', '', '', 'BL4, BL11, BL3, BL2, M38, M28, BL1, M26, BL7, M29', ''),
('BN1', '50.8372', '-0.140106', '531060', '105834', 'TQ310058', 'Brighton, Coldean, Falmer, Hollingbury, Patcham, Preston, Stanmer, Withdean', 'Brighton and Hove', '2845', '1580', '84133', '36311', 'BN88, BN50, BN52, BN3, BN2, BN41, BN42, BN45, BN6, BN51', ''),
('BN2', '50.8245', '-0.107987', '533357', '104479', 'TQ333044', 'Brighton, Bevendean, Brighton Marina, Kemptown, Moulsecoomb, Ovingdean, Rottingdean, Saltdean, Woodingdean', 'Brighton and Hove', '2860', '1583', '93174', '40795', 'BN50, BN88, BN1, BN51, BN52, BN3, BN41, BN42, BN10, BN45', ''),
('BN3', '50.8345', '-0.175375', '528584', '105471', 'TQ285054', 'Hove, Hangleton, West Blatchington', 'Brighton and Hove', '2540', '1431', '79624', '37784', 'BN52, BN1, BN88, BN50, BN41, BN42, BN45, BN2, BN43, BN4', ''),
('BN4', '50.8493', '-0.256373', '522842', '106979', 'TQ228069', 'Shoreham by Sea', 'Brighton and Hove', '1409', '0', '', '', 'BN43, BN42, BN41, BN5, BN15, BN3, BN95, BN52, BN44, BN45', ''),
('BN5', '50.9242', '-0.268067', '521823', '115288', 'TQ218152', 'Henfield, Blackstone, Edburton, Fulking, Small Dole, Wineham, Woodmancote', 'Horsham', '447', '296', '7123', '3067', 'BN44, BN4, BN43, BN6, BN45, BN42, BN41, BN15, BN95, RH15', ''),
('BN6', '50.9296', '-0.153011', '529894', '116085', 'TQ298160', 'Hassocks, Albourne, Clayton, Ditchling, Goddards Green, Hurstpierpoint, Keymer, Newtimber, Sayers Common, Streat, Westmeston', 'Lewes', '801', '580', '17588', '7355', 'RH15, BN45, BN1, BN52, BN88, BN50, BN3, BN5, RH17, RH16', ''),
('BN7', '50.8783', '0.00295685', '541009', '110667', 'TQ410106', 'Lewes, Cooksbridge, East Chiltington, Iford, Kingston, Offham, Plumpton, Plumpton Green, Rodmell, Southease, Swanborough, Telscombe', 'Lewes', '1178', '753', '21125', '8930', 'BN8, BN10, BN9, BN51, BN2, BN1, BN88, BN50, TN22, BN45', ''),
('BN9', '50.7953', '0.0269008', '542946', '101484', 'TQ429014', 'Newhaven, Piddinghoe, South Heighton, Tarring Neville', 'Lewes', '1069', '410', '13423', '5796', 'BN10, BN51, BN25, BN7, BN8, BN2, BN50, BN88, BN1, BN26', ''),
('BN10', '50.7956', '0.00192003', '541185', '101469', 'TQ411014', 'Peacehaven, Telscombe Cliffs', 'Lewes', '678', '517', '18568', '8098', 'BN9, BN51, BN7, BN25, BN2, BN8, BN50, BN88, BN1, BN52', ''),
('BN11', '50.8137', '-0.375466', '514545', '102830', 'TQ145028', 'Worthing', 'Worthing', '1808', '1069', '32770', '16155', 'BN14, BN99, BN13, BN12, BN95, BN15, BN16, BN43, BN44, BN4', ''),
('BN12', '50.8142', '-0.426896', '510921', '102807', 'TQ109028', 'Worthing, Ferring, Goring-by-Sea', 'Worthing', '903', '681', '20417', '9392', 'BN13, BN11, BN14, BN16, BN99, BN95, BN17, BN15, RH20, BN43', ''),
('BN13', '50.8303', '-0.406442', '512323', '104628', 'TQ123046', 'Worthing, Clapham, Durrington, High Salvington, Patching, Tarring', 'Worthing', '965', '759', '27568', '11863', 'BN14, BN12, BN11, BN99, BN15, BN95, BN16, BN43, BN17, BN44', ''),
('BN14', '50.8308', '-0.379929', '514189', '104724', 'TQ141047', 'Worthing, Broadwater, Findon, Northend, Tarring', 'Worthing', '1024', '751', '31007', '13038', 'BN11, BN13, BN99, BN15, BN95, BN12, BN43, BN44, BN16, BN4', ''),
('BN15', '50.83', '-0.325128', '518050', '104721', 'TQ180047', 'Lancing, Coombes, Sompting', 'Worthing', '881', '712', '27300', '12186', 'BN95, BN99, BN14, BN43, BN11, BN44, BN13, BN4, BN42, BN12', ''),
('BN16', '50.8155', '-0.498074', '505904', '102847', 'TQ059028', 'Angmering, East Preston, Kingston Gorse, Rustington', 'Arun', '1325', '977', '28131', '13097', 'BN17, BN12, BN13, BN18, BN11, BN14, RH20, BN99, PO22, BN95', ''),
('BN17', '50.8153', '-0.537118', '503154', '102770', 'TQ031027', 'Littlehampton, Climping, Lyminster, Wick', 'Arun', '924', '744', '28542', '12514', 'BN16, BN18, BN12, PO22, BN13, BN11, BN14, PO21, RH20, BN99', ''),
('BN18', '50.8485', '-0.578486', '500169', '106404', 'TQ001064', 'Arundel, Amberley, Binsted, Burpham, Crossbush, Fontwell, Ford, Houghton, Madehurst, Poling, Slindon, Slindon Common, South Stoke, Tortington, Walberton, Warningcamp, Wepham, Yapton', 'Arun', '673', '488', '13232', '5566', 'BN17, BN16, PO22, PO21, BN12, BN13, GU28, RH20, PO19, BN14', ''),
('BN20', '50.774', '0.254859', '559083', '99581', 'TV590995', 'Eastbourne, Beachy Head, East Dean, Friston, Old Town, Ratton, Wannock, Willingdon', 'Eastbourne', '928', '726', '21401', '9657', 'BN21, BN22, BN26, BN23, BN27, BN24, BN25, TN21, BN9, TN20', '');
INSERT INTO `postals` (`Postcode`, `Latitude`, `Longitude`, `Easting`, `Northing`, `Grid Reference`, `Town_area`, `Region`, `Postcodes`, `Active postcodes`, `Population`, `Households`, `Nearby districts`, `email`) VALUES
('BN21', '50.7721', '0.274658', '560485', '99412', 'TV604994', 'Eastbourne, Old Town', 'Eastbourne', '1595', '956', '24790', '12412', 'BN20, BN22, BN23, BN24, BN26, BN27, BN25, TN21, TN39, BN9', ''),
('BN22', '50.7879', '0.283455', '561051', '101188', 'TQ610011', 'Eastbourne, Hampden Park, Willingdon', 'Eastbourne', '1044', '818', '32826', '14067', 'BN21, BN23, BN20, BN24, BN26, BN27, BN25, TN21, TN39, TN40', ''),
('BN23', '50.7985', '0.312726', '563077', '102431', 'TQ630024', 'Eastbourne, Friday Street, Langney, Sovereign Harbour', 'Eastbourne', '849', '682', '28243', '12500', 'BN24, BN22, BN21, BN20, BN26, BN27, TN39, TN40, TN21, BN25', ''),
('BN24', '50.8156', '0.325519', '563919', '104361', 'TQ639043', 'Pevensey, Beachlands, Hankham, Normans Bay, Pevensey Bay, Stone Cross, Westham', 'Wealden', '529', '350', '9155', '4011', 'BN23, BN22, BN21, BN26, BN20, BN27, TN39, TN40, TN21, TN33', ''),
('BN25', '50.7759', '0.107292', '548673', '99486', 'TV486994', 'Seaford, Bishopstone, Cuckmere Haven, Exceat, Norton, Rookery Hill, Westdean', 'Wealden', '1140', '873', '23670', '10840', 'BN9, BN10, BN20, BN26, BN21, BN22, BN8, BN51, BN7, TN22', ''),
('BN26', '50.8214', '0.22513', '556828', '104788', 'TQ568047', 'Polegate, Alciston, Alfriston, Arlington, Berwick, Caneheath, Filching, Folkington, Jevington, Litlington, Lullington, Milton Street, Sayerland, Selmeston, Summerhill, Wilmington', 'Wealden', '647', '518', '11452', '5435', 'BN20, BN27, BN22, BN21, BN24, BN23, BN25, TN21, BN9, TN20', ''),
('BN41', '50.8391', '-0.215272', '525762', '105914', 'TQ257059', 'Fishersgate, Portslade', 'Brighton and Hove', '612', '381', '20832', '8538', 'BN42, BN3, BN4, BN52, BN43, BN1, BN45, BN88, BN50, BN15', ''),
('BN42', '50.8367', '-0.232048', '524587', '105619', 'TQ245056', 'Southwick', 'Adur', '292', '218', '10201', '4312', 'BN41, BN4, BN43, BN3, BN52, BN1, BN15, BN45, BN88, BN50', ''),
('BN43', '50.8354', '-0.268242', '522042', '105414', 'TQ220054', 'Shoreham-by-Sea', 'Adur', '776', '525', '22438', '9957', 'BN4, BN42, BN41, BN15, BN95, BN5, BN3, BN99, BN52, BN44', ''),
('BN44', '50.8927', '-0.318646', '518348', '111704', 'TQ183117', 'Steyning, Ashurst, Botolphs, Bramber, Upper Beeding, Wiston', 'Horsham', '358', '266', '10188', '4440', 'BN15, BN95, BN5, BN99, BN4, BN43, BN14, BN11, BN45, BN42', ''),
('BN45', '50.8884', '-0.183338', '527876', '111451', 'TQ278114', 'Poynings, Pyecombe, Saddlescombe', 'Mid Sussex', '56', '41', '580', '233', 'BN3, BN52, BN6, BN41, BN1, BN42, BN88, BN50, BN4, RH15', ''),
('BN50', '50.826', '-0.14077', '531044', '104587', 'TQ310045', 'Brighton', 'Brighton and Hove', '672', '94', '', '', 'BN88, BN1, BN2, BN52, BN3, BN41, BN42, BN51, BN45, BN6', ''),
('BN51', '50.8048', '-0.0586676', '536888', '102378', 'TQ368023', 'Non-geographic, Rottingdean', 'Brighton and Hove', '101', '17', '', '', 'BN2, BN10, BN9, BN50, BN88, BN1, BN7, BN52, BN3, BN41', ''),
('BN52', '50.8339', '-0.168061', '529101', '105417', 'TQ291054', 'Hove', 'Brighton and Hove', '400', '69', '', '', 'BN3, BN1, BN88, BN50, BN41, BN42, BN2, BN45, BN43, BN4', ''),
('BN88', '50.827', '-0.140775', '531041', '104698', 'TQ310046', 'Brighton', 'Brighton and Hove', '37', '8', '', '', 'BN50, BN1, BN52, BN2, BN3, BN41, BN42, BN45, BN51, BN6', ''),
('BN91', '', '', '', '', '', 'Non-geographic', 'Brighton', '1', '1', '', '', '', ''),
('BN95', '50.8232', '-0.330024', '517723', '103957', 'TQ177039', 'Non-geographic', 'Brighton', '1', '1', '', '', 'BN15, BN99, BN11, BN14, BN43, BN44, BN13, BN4, BN12, BN42', ''),
('BN99', '50.8221', '-0.352713', '516127', '103799', 'TQ161037', 'Worthing, Lancing', 'Worthing', '466', '401', '', '', 'BN95, BN11, BN14, BN15, BN13, BN12, BN43, BN44, BN4, BN42', ''),
('BR1', '51.4107', '0.0194284', '540542', '169899', 'TQ405698', 'Bromley, Bickley, Downham', 'Bromley', '2078', '1266', '55962', '23215', 'BR2, BR7, SE12, BR3, SE3, BR4, SE6, SE9, SE13, SE20', ''),
('BR2', '51.3904', '0.0216427', '540758', '167646', 'TQ407676', 'Bickley, Hayes, Bromley Common, Shortlands', 'Bromley', '1404', '1003', '44958', '19024', 'BR1, BR4, BR7, SE12, BR3, BR5, SE3, SE6, SE9, BR6', ''),
('BR3', '51.4034', '-0.0317991', '537002', '168990', 'TQ370689', 'Beckenham, Eden Park, Elmers End, Park Langley, Shortlands', 'Bromley', '2110', '1145', '47411', '21134', 'SE20, SE26, SE6, BR4, SE25, SE23, BR1, SE4, BR2, SE19', ''),
('BR4', '51.3756', '-0.00989972', '538609', '165940', 'TQ386659', 'West Wickham', 'Bromley', '592', '373', '19367', '7390', 'BR2, BR3, BR1, SE6, CR0, SE13, SE20, CR9, SE25, SE26', ''),
('BR5', '51.3892', '0.102526', '546389', '167670', 'TQ463676', 'Orpington, St Mary Cray, Petts Wood', 'Bromley', '1309', '933', '46011', '18938', 'BR6, DA14, DA15, BR7, BR8, DA16, BR2, DA5, DA6, BR1', ''),
('BR6', '51.3675', '0.0925523', '545764', '165238', 'TQ457652', 'Orpington, Farnborough, Downe, Pratt\'s Bottom, Chelsfield, Well Hill', 'Bromley', '1680', '1138', '46073', '18987', 'BR5, DA14, BR7, DA15, BR2, BR4, BR8, DA16, TN16, BR1', ''),
('BR7', '51.4118', '0.059167', '543302', '170098', 'TQ433700', 'Chislehurst, Elmstead', 'Bromley', '730', '470', '17322', '7079', 'SE9, BR1, BR2, DA14, BR5, SE12, DA15, BR6, SE18, SE3', ''),
('BR8', '51.3976', '0.174825', '551392', '168751', 'TQ513687', 'Swanley', 'Sevenoaks', '684', '487', '22053', '9187', 'DA4, DA5, BR5, DA8, DA1, DA14, DA2, DA6, DA7, BR6', ''),
('BR98', '', '', '', '', '', 'Non-geographic', 'Bromley', '5', '0', '', '', '', ''),
('BS0', '51.3439', '-2.95702', '333439', '160969', 'ST334609', 'Non-geographic', 'Bristol', '1', '0', '', '', 'BS23, BS24, BS22, BS29, TA9, TA8, BS25, BS26, BS49, BS21', ''),
('BS1', '51.4539', '-2.59204', '358959', '172935', 'ST589729', 'Bristol city centre, Redcliffe', 'Bristol', '1758', '794', '11544', '5383', 'BS98, BS2, BS99, BS6, BS77, BS3, BS8, BS7, BS4, BS5', ''),
('BS2', '51.459', '-2.58115', '359720', '173496', 'ST597734', 'Kingsdown, St Pauls, St Phillips, St Agnes', 'Bristol', '928', '633', '15730', '7221', 'BS98, BS99, BS1, BS7, BS6, BS5, BS8, BS4, BS77, BS3', ''),
('BS3', '51.4386', '-2.60346', '358151', '171239', 'ST581712', 'Bedminster, Southville, Bower Ashton, Totterdown, Windmill Hill', 'Bristol', '1246', '960', '36447', '16629', 'BS77, BS1, BS13, BS8, BS6, BS98, BS4, BS2, BS99, BS14', ''),
('BS4', '51.4363', '-2.56403', '360890', '170962', 'ST608709', 'Brislington, Knowle, Knowle West, St Annes, Totterdown', 'Bristol', '1364', '1084', '47993', '20186', 'BS14, BS99, BS5, BS2, BS77, BS3, BS98, BS1, BS7, BS6', ''),
('BS5', '51.4622', '-2.55283', '361690', '173836', 'ST616738', 'Easton, St George, Whitehall', 'Bristol', '1543', '1301', '52461', '22814', 'BS99, BS2, BS98, BS4, BS1, BS7, BS6, BS14, BS16, BS15', ''),
('BS6', '51.4701', '-2.59833', '358537', '174740', 'ST585747', 'Redland, Montpelier, Westbury Park', 'Bristol', '1044', '786', '33615', '14015', 'BS1, BS98, BS2, BS7, BS8, BS77, BS99, BS3, BS9, BS80', ''),
('BS7', '51.4867', '-2.5816', '359713', '176576', 'ST597765', 'Bishopston, Horfield, Filton', 'Bristol', '812', '771', '40530', '16158', 'BS2, BS98, BS6, BS99, BS1, BS9, BS80, BS10, BS34, BS5', ''),
('BS8', '51.4575', '-2.61943', '357059', '173351', 'ST570733', 'Clifton, Hotwells', 'Bristol', '1221', '837', '26345', '11786', 'BS1, BS6, BS3, BS77, BS98, BS9, BS2, BS99, BS80, BS13', ''),
('BS9', '51.4884', '-2.62532', '356679', '176791', 'ST566767', 'Coombe Dingle, Sneyd Park, Stoke Bishop, Westbury on Trym, Henleaze, Bristol', 'Bristol', '1213', '897', '31160', '12489', 'BS80, BS10, BS8, BS6, BS7, BS11, BS1, BS98, BS3, BS77', ''),
('BS10', '51.5056', '-2.61173', '357639', '178696', 'ST576786', 'Brentry, Henbury, Southmead', 'Bristol', '879', '724', '27876', '11847', 'BS80, BS9, BS6, BS7, BS8, BS34, BS1, BS98, BS11, BS3', ''),
('BS11', '51.4987', '-2.6785', '352998', '177969', 'ST529779', 'Avonmouth, Shirehampton', 'Bristol', '764', '563', '17430', '7458', 'BS9, BS80, BS10, BS20, BS41, BS8, BS6, BS7, BS1, BS98', ''),
('BS12', '51.5555', '-2.55897', '361343', '184216', 'ST613842', 'Thornbury, Almondsbury', 'Bristol', '1946', '0', '', '', 'BS32, BS34, BS35, BS7, BS5, BS36, BS10, BS80, BS99, BS16', ''),
('BS13', '51.4121', '-2.61181', '357546', '168297', 'ST575682', 'Bedminster Down, Bishopsworth, Hartcliffe, Withywood', 'Bristol', '809', '754', '29574', '12543', 'BS3, BS77, BS14, BS8, BS41, BS1, BS6, BS4, BS18, BS98', ''),
('BS14', '51.4131', '-2.56321', '360927', '168381', 'ST609683', 'Hengrove, Stockwood, Whitchurch, Withywood', 'Bristol', '733', '706', '28656', '12051', 'BS4, BS13, BS99, BS5, BS2, BS77, BS3, BS18, BS98, BS1', ''),
('BS15', '51.4548', '-2.49619', '365620', '172985', 'ST656729', 'Hanham, Kingswood', 'Bristol', '2531', '1150', '47398', '20137', 'BS30, BS16, BS31, BS5, BS36, BS99, BS4, BS2, BS98, BS1', ''),
('BS16', '51.4856', '-2.51249', '364511', '176418', 'ST645764', 'Downend, Fishponds, Frenchay', 'Bristol', '2528', '2000', '75733', '30689', 'BS15, BS5, BS36, BS7, BS30, BS99, BS34, BS31, BS2, BS98', ''),
('BS17', '51.5289', '-2.44225', '369417', '181202', 'ST694812', 'Chipping Sodbury', 'Bristol', '1655', '0', '', '', 'BS37, BS36, BS16, BS30, BS15, BS34, BS32, BS12, GL12, BS31', ''),
('BS18', '51.3675', '-2.58386', '359451', '163321', 'ST594633', 'Bristol', 'Bristol', '2155', '0', '', '', 'BS14, BS13, BS4, BS77, BS39, BS3, BS98, BS2, BS1, BS99', ''),
('BS19', '51.4075', '-2.76987', '346549', '167889', 'ST465678', 'Nailsea, Backwell', 'Bristol', '1153', '0', '', '', 'BS48, BS49, BS20, BS21, BS41, BS40, BS27, BS25, BS13, BS29', ''),
('BS20', '51.4806', '-2.75703', '347526', '176009', 'ST475760', 'Portishead', 'North Somerset', '1466', '856', '30042', '13100', 'BS48, BS19, BS11, NP26, BS21, BS9, BS49, BS41, BS8, NP6', ''),
('BS21', '51.4362', '-2.85136', '340918', '171144', 'ST409711', 'Clevedon', 'North Somerset', '936', '699', '23308', '10225', 'BS49, BS19, BS48, BS29, BS20, BS25, BS22, BS26, BS24, BS0', ''),
('BS22', '51.3606', '-2.92825', '335467', '162801', 'ST354628', 'Kewstoke, Weston-super-Mare, Worle', 'North Somerset', '1524', '946', '37701', '16397', 'BS24, BS0, BS23, BS29, BS49, BS25, BS21, BS26, TA9, TA8', ''),
('BS23', '51.3435', '-2.96949', '332570', '160936', 'ST325609', 'Uphill, Weston-super-Mare', 'North Somerset', '1533', '1027', '34073', '16277', 'BS0, BS24, BS22, BS29, TA8, TA9, BS25, BS26, BS49, BS21', ''),
('BS24', '51.3314', '-2.92486', '335662', '159551', 'ST356595', 'Bleadon, Hutton, Locking, Lympsham, Puxton, Weston-super-Mare, Wick St. Lawrence', 'North Somerset', '872', '645', '19035', '7844', 'BS22, BS0, BS29, BS23, BS25, BS26, TA9, TA8, BS49, BS21', ''),
('BS25', '51.3208', '-2.82656', '342497', '158290', 'ST424582', 'Churchill, Winscombe, Sandford, Shipham', 'Somerset', '326', '274', '6388', '2674', 'BS29, BS26, BS49, BS27, BS28, BS24, BS21, BS22, BS19, BS0', ''),
('BS26', '51.2805', '-2.85056', '340772', '153827', 'ST407538', 'Axbridge, Compton Bishop, Loxton', 'Somerset', '287', '225', '4934', '1997', 'BS25, BS29, BS27, BS28, BS24, BS49, BS21, BS22, TA9, BS0', ''),
('BS27', '51.2724', '-2.77232', '346220', '152866', 'ST462528', 'Cheddar, Draycott', 'Somerset', '349', '283', '6996', '2940', 'BS26, BS28, BS25, BS19, BS40, BS49, BS29, BA16, BS48, BA5', ''),
('BS28', '51.2274', '-2.81526', '343169', '147895', 'ST431478', 'Wedmore', 'Somerset', '230', '193', '3339', '1336', 'BS27, BS26, BS25, TA9, BS49, BS29, BA16, BA5, BA6, TA8', ''),
('BS29', '51.3303', '-2.87379', '339218', '159385', 'ST392593', 'Banwell', 'Somerset', '133', '107', '2588', '1143', 'BS24, BS25, BS26, BS22, BS0, BS23, BS49, BS21, BS27, BS28', ''),
('BS30', '51.4464', '-2.47544', '367055', '172041', 'ST670720', 'Bitton, Cadbury Heath, Warmley, Wick', 'South Gloucestershire', '902', '749', '30093', '12440', 'BS15, BS31, BS16, BS36, BS5, BS4, BS99, BS17, BS2, BS14', ''),
('BS31', '51.4096', '-2.49346', '365776', '167957', 'ST657679', 'Chewton Keynsham, Keynsham, Saltford', 'Bath and North East Somerset', '829', '678', '19955', '8590', 'BS15, BS30, BS14, BS16, BS4, BS5, BS13, BS39, BS36, BS99', ''),
('BS32', '51.5415', '-2.56111', '361183', '182660', 'ST611826', 'Almondsbury, Bradley Stoke', 'South Gloucestershire', '696', '429', '24543', '9937', 'BS12, BS34, BS35, BS7, BS10, BS5, BS36, BS80, BS99, BS2', ''),
('BS34', '51.5253', '-2.56788', '360699', '180862', 'ST606808', 'Filton, Little Stoke, Patchway, Stoke Gifford', 'South Gloucestershire', '1188', '856', '29908', '12622', 'BS32, BS12, BS7, BS10, BS80, BS99, BS5, BS2, BS36, BS98', ''),
('BS35', '51.5974', '-2.54804', '362136', '188870', 'ST621888', 'Alveston, Rudgeway, Thornbury', 'South Gloucestershire', '965', '777', '21918', '9196', 'BS12, BS32, BS34, BS36, GL15, BS5, BS7, BS16, BS10, BS80', ''),
('BS36', '51.5262', '-2.48791', '366248', '180922', 'ST662809', 'Frampton Cotterell, Winterbourne', 'South Gloucestershire', '576', '498', '15654', '6310', 'BS17, BS16, BS15, BS34, BS37, BS32, BS30, BS12, BS31, BS5', ''),
('BS37', '51.5403', '-2.4183', '371086', '182460', 'ST710824', 'Chipping Sodbury, Yate', 'South Gloucestershire', '1221', '962', '38080', '15451', 'BS17, BS36, GL12, BS32, GL9, BS16, BS30, BS12, BS15, BS34', ''),
('BS38', '', '', '', '', '', 'Non-geographic', 'Bristol', '5', '0', '', '', '', ''),
('BS39', '51.3281', '-2.53291', '362966', '158912', 'ST629589', 'Clutton, Temple Cloud', 'Bath and North East Somerset', '722', '622', '15391', '6108', 'BS18, BS14, BS31, BA3, BS4, BA4, BS5, BS13, BS15, BS99', ''),
('BS40', '51.3469', '-2.69379', '351776', '161097', 'ST517610', 'Chew Valley, Chew Magna, Chew Stoke, Wrington', 'Bath and North East Somerset', '852', '720', '12549', '5179', 'BS41, BS18, BS48, BS19, BS13, BS27, BS49, BS25, BS11, BA5', ''),
('BS41', '51.4235', '-2.65443', '354594', '169591', 'ST545695', 'Long Ashton', 'North Somerset', '244', '195', '6120', '2499', 'BS13, BS3, BS77, BS8, BS1, BS9, BS48, BS11, BS14, BS6', ''),
('BS48', '51.4265', '-2.74969', '347974', '169988', 'ST479699', 'Backwell, Nailsea', 'North Somerset', '975', '751', '23193', '9749', 'BS19, BS20, BS41, BS49, BS21, BS40, BS11, BS13, BS3, BS77', ''),
('BS49', '51.3826', '-2.81628', '343290', '165155', 'ST432651', 'Congresbury, Yatton', 'North Somerset', '407', '334', '11776', '4777', 'BS19, BS25, BS21, BS29, BS48, BS22, BS26, BS27, BS28, BS20', ''),
('BS77', '51.4387', '-2.60153', '358286', '171250', 'ST582712', 'Bedminster', 'Bristol', '10', '0', '', '', 'BS3, BS1, BS6, BS8, BS13, BS98, BS4, BS2, BS99, BS14', ''),
('BS80', '51.5035', '-2.61308', '357543', '178463', 'ST575784', 'Bristol', 'Bristol', '19', '0', '', '', 'BS10, BS9, BS6, BS7, BS8, BS34, BS11, BS1, BS98, BS3', ''),
('BS98', '51.4594', '-2.58461', '359480', '173542', 'ST594735', 'Non-geographic', 'Bristol', '17', '1', '', '', 'BS2, BS99, BS1, BS6, BS7, BS5, BS8, BS77, BS3, BS4', ''),
('BS99', '51.4578', '-2.57537', '360121', '173359', 'ST601733', 'Non-geographic', 'Bristol', '1983', '92', '', '', 'BS2, BS98, BS1, BS5, BS4, BS7, BS6, BS8, BS77, BS3', ''),
('BT1', '54.5995', '-5.92844', '146362', '529797', 'NW463297', 'Belfast', 'Belfast', '1563', '555', '1756', '873', 'BT2, BT99, BT7, BT15, BT12, BT13, BT3, BT6, BT9, BT14', ''),
('BT2', '54.5934', '-5.93072', '146177', '529127', 'NW461291', 'Belfast', 'Belfast', '345', '112', '1015', '502', 'BT1, BT7, BT99, BT12, BT15, BT13, BT9, BT6, BT3, BT14', ''),
('BT3', '54.6184', '-5.90517', '147982', '531815', 'NW479318', 'Belfast', 'Belfast', '163', '87', '417', '223', 'BT15, BT99, BT1, BT6, BT2, BT4, BT7, BT14, BT5, BT37', ''),
('BT4', '54.6027', '-5.86816', '150274', '529937', 'NW502299', 'Belfast, Sydenham,Belmont, Stormont', 'Belfast', '928', '643', '25538', '11323', 'BT5, BT6, BT3, BT99, BT1, BT2, BT7, BT16, BT18, BT15', ''),
('BT5', '54.5886', '-5.87389', '149817', '528390', 'NW498283', 'Belfast, Castlereagh, Crossnacreevy, Gilnahirk, Knock', 'Belfast', '1239', '874', '38809', '17398', 'BT4, BT6, BT7, BT3, BT2, BT99, BT1, BT8, BT16, BT12', ''),
('BT6', '54.5808', '-5.89837', '148188', '527610', 'NW481276', 'Belfast, Cregagh, Knockbreda', 'Belfast', '743', '560', '30004', '13521', 'BT7, BT5, BT3, BT2, BT8, BT99, BT1, BT4, BT9, BT12', ''),
('BT7', '54.5832', '-5.92496', '146486', '527972', 'NW464279', 'Belfast, Ormeau', 'Belfast', '632', '390', '18948', '8273', 'BT2, BT1, BT99, BT6, BT9, BT12, BT15, BT8, BT3, BT13', ''),
('BT8', '54.5453', '-5.90822', '147332', '523698', 'NW473236', 'Belfast, Carryduff, Knockbreda, Newtownbreda', 'Belfast', '1111', '615', '28807', '11420', 'BT6, BT7, BT9, BT2, BT99, BT1, BT3, BT5, BT10, BT12', ''),
('BT9', '54.5722', '-5.95016', '144789', '526841', 'NW447268', 'Belfast, Malone, Lisburn Road, Taughmonagh, Stranmillis', 'Belfast', '848', '583', '28660', '11037', 'BT12, BT7, BT2, BT13, BT10, BT1, BT11, BT99, BT6, BT14', ''),
('BT10', '54.5598', '-5.9865', '142364', '525595', 'NW423255', 'Belfast, Finaghy', 'Belfast', '311', '216', '12575', '4834', 'BT11, BT17, BT9, BT12, BT13, BT7, BT14, BT27, BT2, BT8', ''),
('BT11', '54.5762', '-5.99814', '141715', '527461', 'NW417274', 'Belfast, Andersonstown', 'Belfast', '543', '464', '28034', '11097', 'BT10, BT17, BT9, BT12, BT13, BT7, BT14, BT2, BT1, BT27', ''),
('BT12', '54.5924', '-5.95628', '144521', '529109', 'NW445291', 'Belfast, Falls Road, Sandy Row, The Village', 'Belfast', '942', '630', '28801', '12294', 'BT13, BT9, BT2, BT14, BT1, BT7, BT99, BT15, BT11, BT10', ''),
('BT13', '54.6058', '-5.95848', '144463', '530607', 'NW444306', 'Belfast, Shankill Road, Woodvale, Ballygomartin, Springmartin, Glencairn, Highfield', 'Belfast', '791', '566', '23122', '10586', 'BT12, BT14, BT1, BT99, BT2, BT9, BT15, BT7, BT3, BT11', ''),
('BT14', '54.6211', '-5.9624', '144306', '532322', 'NW443323', 'Belfast, Ballysillan, Upper Ballysillan', 'Belfast', '785', '631', '31832', '13355', 'BT13, BT15, BT12, BT1, BT99, BT2, BT36, BT3, BT9, BT7', ''),
('BT15', '54.6219', '-5.93168', '146293', '532300', 'NW462322', 'Belfast', 'Belfast', '846', '613', '26914', '11794', 'BT1, BT99, BT2, BT3, BT14, BT13, BT7, BT12, BT9, BT6', ''),
('BT16', '54.5909', '-5.79813', '154723', '528378', 'NW547283', 'Dundonald', 'Belfast', '775', '396', '15513', '6547', 'BT18, BT5, BT4, BT23, BT6, BT7, BT3, BT2, BT99, BT1', ''),
('BT17', '54.5531', '-6.01954', '140186', '524972', 'NW401249', 'Belfast, Derriaghy, Dunmurry, Hannahstown', 'Belfast', '619', '562', '32351', '11936', 'BT10, BT11, BT27, BT9, BT28, BT12, BT13, BT8, BT7, BT14', ''),
('BT18', '54.6404', '-5.82387', '153361', '533972', 'NW533339', 'Holywood, Craigavad', 'North Down', '522', '391', '13516', '5552', 'BT16, BT4, BT5, BT3, BT38, BT37, BT15, BT6, BT99, BT1', ''),
('BT19', '54.6507', '-5.6579', '164125', '534547', 'NW641345', 'Bangor, Crawfordsburn, Groomsport, Helens Bay', 'North Down', '1407', '869', '36653', '15040', 'BT20, BT21, BT23, BT18, BT16, BT38, BT4, BT37, BT5, BT3', ''),
('BT20', '54.659', '-5.66558', '163678', '535496', 'NW636354', 'Bangor', 'North Down', '967', '716', '25521', '11361', 'BT19, BT23, BT21, BT18, BT16, BT38, BT4, BT37, BT5, BT3', ''),
('BT21', '54.6408', '-5.54688', '171228', '533078', 'NW712330', 'Donaghadee', 'Ards', '266', '229', '7814', '3323', 'BT19, BT20, BT22, BT23, BT18, BT16, BT38, BT4, BT5, BT3', ''),
('BT22', '54.5036', '-5.51505', '172518', '517718', 'NW725177', 'Newtownards, Ardkeen, Ballyhalbert, Ballywalter, Carrowdore, Cloughey, Greyabbey, Kircubbin, Millisle, Portaferry, Portavogie', 'North Down', '629', '579', '21416', '8422', 'BT21, BT23, BT19, BT20, BT30, BT16, BT8, BT24, BT5, BT18', ''),
('BT23', '54.5717', '-5.70775', '160447', '525931', 'NW604259', 'Newtownards, Ballygowan, Comber, Conlig, Killinchy, Moneyrea', 'Ards', '2082', '1452', '53059', '21403', 'BT16, BT19, BT20, BT5, BT18, BT4, BT6, BT8, BT7, BT21', ''),
('BT24', '54.4177', '-5.87177', '148907', '509380', 'NW489093', 'Ballynahinch, Drumaness, Saintfield', 'Down', '563', '500', '17373', '6546', 'BT8, BT5, BT4, BT6, BT33, BT7, BT26, BT9, BT3, BT2', ''),
('BT25', '54.3965', '-6.11571', '132951', '507921', 'NW329079', 'Dromore, Dromara, Finnis, Waringsford', 'Banbridge', '500', '433', '14953', '5564', 'BT26, BT28, BT32, BT27, BT67, BT17, BT24, BT31, BT66, BT63', ''),
('BT26', '54.4542', '-6.06398', '136678', '514141', 'NW366141', 'Hillsborough, Annahilt, Culcavy', 'Lisburn', '299', '262', '8800', '3405', 'BT28, BT27, BT25, BT17, BT10, BT11, BT24, BT9, BT67, BT12', ''),
('BT27', '54.509', '-6.02468', '139573', '520087', 'NW395200', 'Lisburn, Cargacreevy, Drumalig, Drumbo, Hilden, Hillhall, Lambeg', 'Lisburn', '694', '574', '21419', '8829', 'BT17, BT28, BT10, BT11, BT26, BT9, BT12, BT8, BT13, BT7', ''),
('BT28', '54.5219', '-6.08427', '135801', '521744', 'NW358217', 'Lisburn', 'County Antrim', '1241', '1061', '39970', '15220', 'BT27, BT26, BT17, BT10, BT11, BT25, BT9, BT12, BT8, BT13', ''),
('BT29', '54.6214', '-6.1975', '129140', '533238', 'NW291332', 'Belfast, Crumlin, Aldergrove, Dundrod, Glenavy, Nutts Corner', 'County Antrim', '396', '374', '13286', '4350', 'BT41, BT67, BT28, BT14, BT11, BT17, BT13, BT15, BT12, BT10', ''),
('BT30', '54.3335', '-5.70343', '159331', '499429', 'SB593994', 'Downpatrick, Ardglass, Ballyhornan, Ballykinler, Castleward, Clough, Crossgar, Kilclief, Killard, Killough, Killyleagh, Loughinisland, Seaforde, Strangford, Toye', 'Down', '1251', '1120', '33725', '12504', 'BT23, BT24, BT33, BT31, BT16, BT22, BT19, BT20, BT8, BT5', ''),
('BT31', '54.2766', '-5.96864', '141741', '494042', 'SB417940', 'Castlewellan, Ballyward', 'Down', '297', '288', '8643', '2973', 'BT33, BT24, BT25, BT26, BT27, BT10, BT9, BT30, BT17, BT12', ''),
('BT32', '54.3362', '-6.24733', '124008', '501725', 'NW240017', 'Banbridge, Annaclone, Ballinaskeagh, Ballyroney, Corbet, Katesbridge, Lenaderg, Loughbrickland, Seapatrick', 'Banbridge', '856', '736', '24365', '9331', 'BT67, BT25, BT66, BT63, BT65, BT34, BT64, BT62, BT26, BT29', ''),
('BT33', '54.2233', '-5.89074', '146483', '487833', 'SB464878', 'Newcastle, Bryansford, Dundrum', 'Down', '335', '306', '10683', '4351', 'BT31, BT24, BT30, BT8, BT34, BT6, BT5, BT7, BT25, BT4', ''),
('BT34', '54.1531', '-6.1818', '127058', '481114', 'SB270811', 'Newry, Annalong, Ballymartin, Cabra, Hilltown, Kilcoo, Kilkeel, Mayobridge, Poyntzpass, Rathfriland, Rostrevor, Warrenpoint', 'Newry and Mourne', '1645', '1490', '59652', '21038', 'BT32, BT35, BT25, BT31, BT33, BT26, BT67, BT66, BT63, BT28', ''),
('BT35', '54.1649', '-6.4395', '110325', '483453', 'SB103834', 'Jerrettspass, Bessbrook, Camlough, Crossmaglen, Belleek, Newtownhamilton', 'Newry and Mourne', '1453', '1283', '43341', '15305', 'BT34, BT62, BT63, BT64, BT60, BT65, BT32, BT61, BT66, BT67', ''),
('BT36', '54.6782', '-5.95969', '144839', '538661', 'NW448386', 'Newtownabbey, Mossley, Glengormley', 'Newtownabbey', '1718', '1063', '45090', '18038', 'BT37, BT14, BT13, BT15, BT12, BT1, BT99, BT2, BT3, BT9', ''),
('BT37', '54.6764', '-5.90829', '148140', '538275', 'NW481382', 'Newtownabbey', 'Newtownabbey', '679', '585', '26364', '10725', 'BT36, BT3, BT15, BT99, BT1, BT2, BT6, BT14, BT7, BT4', ''),
('BT38', '54.7287', '-5.8011', '155362', '543711', 'NW553437', 'Carrickfergus, Ballycarry, Greenisland, Kilroot, Whitehead', 'Carrickfergus', '1068', '915', '40250', '16650', 'BT18, BT40, BT16, BT37, BT4, BT20, BT36, BT5, BT3, BT19', ''),
('BT39', '54.7452', '-6.0182', '141496', '546325', 'NW414463', 'Ballyclare, Ballynure, Doagh, Parkgate, Straid, Templepatrick', 'Newtownabbey', '662', '616', '23369', '9052', 'BT36, BT37, BT14, BT11, BT17, BT13, BT15, BT12, BT10, BT38', ''),
('BT40', '54.8466', '-5.82295', '154672', '556898', 'NW546568', 'Larne, Ballygally, Gleno, Glynn, Islandmagee, Kilwaughter, Magheramorne, Millbrook', 'Larne', '902', '749', '25757', '10864', 'BT38, BT18, BT37, BT16, BT4, BT39, BT36, BT5, BT3, BT15', ''),
('BT41', '54.7313', '-6.25354', '126266', '545674', 'NW262456', 'Antrim, Dunadry, Muckamore, Randalstown, Toomebridge', 'Antrim', '1171', '1029', '40493', '15547', 'BT42, BT29, BT43, BT39, BT67, BT44, BT36, BT66, BT28, BT65', ''),
('BT42', '54.8548', '-6.27673', '125613', '559495', 'NW256594', 'Broughshane, Cullybackey, Galgorm, Kells', 'Ballymena', '1017', '869', '34376', '13495', 'BT43, BT44, BT41, BT29, BT39, BT54, BT67, BT46, BT53, BT66', ''),
('BT43', '54.8908', '-6.26567', '126566', '563454', 'NW265634', 'Cargan, Knockanully', 'Ballymena', '701', '566', '21797', '8514', 'BT42, BT44, BT41, BT54, BT29, BT39, BT53, BT67, BT46, BT40', ''),
('BT44', '54.9729', '-6.28417', '125940', '572654', 'NW259726', 'Portglenone, Carnlough, Glenarm, Clogh Mills, Rasharkin, Glenariff/Waterfoot, Cushendun, Cushendall, Dunloy, Loughguile, Glarryford', 'Ballymena', '735', '692', '24635', '8476', 'BT43, BT42, BT54, BT41, BT53, BT29, BT57, BT46, BT51, BT39', ''),
('BT45', '54.7597', '-6.63894', '101681', '550405', 'NW016504', 'Magherafelt, Ballyronan, Bellaghy, Castledawson, Desertmartin, Draperstown, Knockloughrim, Moneymore, Tobermore, Fallalea, Fallaghloon', 'Magherafelt', '1110', '1023', '34519', '11688', 'BT46, BT80, BT71, BT51, BT52, BT61, BT41, BT56, BT42, BT60', ''),
('BT46', '54.8656', '-6.66293', '100924', '562278', 'NW009622', 'Maghera, Lisnamuck, Swatragh, Upperlands', 'Magherafelt', '326', '314', '10577', '3464', 'BT45, BT51, BT52, BT80, BT56, BT55, BT71, BT42, BT53, BT43', ''),
('BT47', '54.9806', '-7.231', '65466', '577635', 'NV654776', 'Derry, Waterside, Claudy, Feeny, Dungiven, Eglinton, Park, New Buildings', 'Derry', '1787', '1298', '59747', '22594', 'BT48, BT49, BT82, BT79, BT78, BT76, BT51, BT77, BT81, BT46', ''),
('BT48', '55.0091', '-7.32723', '59558', '581268', 'NV595812', 'Derry, Cityside, Ballynagard, Coshquin, Rosemount, The Collon, Culmore', 'Derry', '1504', '1173', '59002', '21874', 'BT47, BT82, BT49, BT78, BT79, BT81, BT75, BT51, BT76, BT77', ''),
('BT49', '55.0475', '-6.95173', '83844', '583768', 'NV838837', 'Limavady, Ballykelly', 'Limavady', '543', '472', '22480', '8310', 'BT51, BT47, BT55, BT52, BT48, BT56, BT46, BT53, BT57, BT45', ''),
('BT51', '55.0612', '-6.68329', '101077', '584107', 'NW010841', 'Coleraine, Aghadowey, Articlave, Bellany, Blackhill, Castlerock, Castleroe, Garvagh, Kilrea, Macosquin, Ringsend', 'Coleraine', '881', '808', '25451', '9644', 'BT52, BT55, BT56, BT46, BT53, BT49, BT57, BT45, BT80, BT44', ''),
('BT52', '55.1335', '-6.65584', '103365', '592027', 'NW033920', 'Coleraine, Ballyvelton, Cloyfin', 'Coleraine', '607', '495', '17153', '6802', 'BT56, BT51, BT55, BT57, BT53, BT46, BT49, BT45, BT54, BT44', ''),
('BT53', '55.0851', '-6.47704', '114407', '585900', 'NW144858', 'Ballymoney, Dervock, Armoy, Ballybogy', 'Ballymoney', '827', '755', '24771', '9472', 'BT57, BT52, BT51, BT56, BT44, BT55, BT54, BT46, BT43, BT42', ''),
('BT54', '55.2047', '-6.25629', '129296', '598316', 'NW292983', 'Ballycastle, Ballintoy, Ballypatrick, Ballyvoy, Cape Castle, Glenshesk, Maghercashel, Maghernahar, Moyarget, Torr, Rathlin Island', 'Moyle', '281', '266', '7511', '2993', 'BT44, BT57, BT43, BT53, BT42, BT56, BT52, BT41, BT55, PA42', ''),
('BT55', '55.1797', '-6.70964', '100286', '597392', 'NW002973', 'Portstewart', 'Coleraine', '330', '309', '8052', '3341', 'BT56, BT52, BT51, BT57, BT53, BT46, BT49, BT54, BT45, BT80', ''),
('BT56', '55.1974', '-6.65064', '104171', '599108', 'NW041991', 'Portrush, Craigahullier, Urbalreagh', 'Coleraine', '267', '237', '6737', '2906', 'BT52, BT55, BT57, BT51, BT53, BT46, BT54, BT45, BT49, BT44', ''),
('BT57', '55.2033', '-6.51879', '112597', '599212', 'NW125992', 'Bushmills, Castlecatt, Dunseverick, Portballintrae', 'Moyle', '191', '180', '3796', '1619', 'BT56, BT53, BT52, BT55, BT54, BT51, BT44, BT46, PA47, BT45', ''),
('BT58', '', '', '', '', '', 'Non-geographic', 'Newtownabbey', '14', '0', '', '', '', ''),
('BT60', '54.2927', '-6.64772', '97680', '498533', 'SA976985', 'Killylea, Tynan, Belcoo, Middletown, Keady, Darkley, Markethill, Kingsmills', 'Armagh', '1038', '952', '30060', '10760', 'BT61, BT68, BT71, BT62, BT35, BT63, BT64, BT69, BT65, BT32', ''),
('BT61', '54.3668', '-6.62627', '99616', '506678', 'NV996066', 'Armagh, Collone, Hamiltonsbawn, Kilmore, Loughgall, Richhill', 'Armagh', '628', '475', '15558', '5725', 'BT60, BT62, BT68, BT71, BT63, BT64, BT65, BT69, BT66, BT35', ''),
('BT62', '54.4129', '-6.46476', '110425', '511125', 'NW104111', 'Craigavon, Portadown, Tandragee, Clare, Scotch Street', 'Craigavon', '902', '755', '30638', '12148', 'BT63, BT64, BT65, BT66, BT61, BT67, BT35, BT32, BT60, BT71', ''),
('BT63', '54.4081', '-6.39242', '115082', '510296', 'NW150102', 'Gilford, Laurencetown, Portadown, Scarva', 'Craigavon', '561', '493', '19309', '7522', 'BT64, BT65, BT62, BT66, BT67, BT32, BT61, BT25, BT35, BT60', ''),
('BT64', '54.4491', '-6.38909', '115582', '514840', 'NW155148', 'Craigavon, Knockmenagh, Mandeville', 'Craigavon', '144', '84', '2187', '807', 'BT65, BT63, BT66, BT62, BT67, BT32, BT61, BT25, BT26, BT35', ''),
('BT65', '54.4446', '-6.36589', '117054', '514246', 'NW170142', 'Craigavon, Drumgor, Legaghory, Tullygally, Brownlow.', 'Craigavon', '199', '110', '7805', '2896', 'BT64, BT66, BT63, BT62, BT67, BT32, BT25, BT26, BT61, BT29', ''),
('BT66', '54.4554', '-6.33344', '119231', '515317', 'NW192153', 'Derryadd, Derrytrasna, Dollingstown, Donaghcloney, Lurgan, Waringstown', 'Craigavon', '885', '765', '32132', '12431', 'BT65, BT64, BT67, BT63, BT62, BT32, BT26, BT25, BT29, BT28', ''),
('BT67', '54.4868', '-6.26861', '123642', '518551', 'NW236185', 'Aghagallon, Aghalee, Gawley\'s Gate, Lurgan, Magheralin, Moira', 'Craigavon', '539', '490', '23642', '8603', 'BT66, BT65, BT64, BT32, BT63, BT29, BT28, BT26, BT25, BT41', ''),
('BT68', '54.3644', '-6.84812', '85199', '507381', 'NV851073', 'Caledon, Minterburn', 'Dungannon and South Tyrone', '52', '50', '875', '343', 'BT69, BT70, BT61, BT60, BT71, BT77, BT80, BT76, BT62, BT75', ''),
('BT69', '54.42', '-6.94936', '79064', '514018', 'NV790140', 'Aughnacloy, Carnteel', 'Dungannon and South Tyrone', '99', '88', '2381', '824', 'BT68, BT70, BT77, BT76, BT71, BT61, BT75, BT60, BT80, BT79', ''),
('BT70', '54.5145', '-6.88107', '84220', '524211', 'NV842242', 'Dungannon, Ballygawley, Cappagh, Castlecaulfield, Donaghmore, Galbally, Garvaghy, Pomeroy, Rock, Seskilgreen', 'Dungannon and South Tyrone', '785', '670', '20645', '6874', 'BT69, BT71, BT68, BT80, BT77, BT61, BT76, BT79, BT60, BT45', '');

-- --------------------------------------------------------

--
-- Table structure for table `reviewedform`
--

CREATE TABLE `reviewedform` (
  `id` int(100) NOT NULL,
  `collectionpoint` text NOT NULL,
  `collectedby` text NOT NULL,
  `wastetype` text NOT NULL,
  `collectingequipment` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `dateandtime` text NOT NULL,
  `tippingpoint` text NOT NULL,
  `blockId` text NOT NULL,
  `transactionHash` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviewedform`
--

INSERT INTO `reviewedform` (`id`, `collectionpoint`, `collectedby`, `wastetype`, `collectingequipment`, `quantity`, `dateandtime`, `tippingpoint`, `blockId`, `transactionHash`) VALUES
(200, 'Mawnella', 'Atkin', 'Food', 'Bin', 52, '16/09/2021 06:24 PM (GMT+5:30) Sri Jayawardenepura', 'Puttalam', '11059896', '0x54aa87131dcc4b3c609df95c351df1ebdd617c84d6eeef45b82ae42370109d12'),
(201, 'Colombo', 'Kamal', 'Food', 'Bin', 11, '18/09/2021 07:21 PM (GMT+5:30) Sri Jayawardenepura', 'Colombo', '11065715', '0x0b4aaf441e343de998ffa3cc52eb988ba7595dcd8363e6f9d05d7676e4fbada7'),
(202, 'Puttalam', 'Kamal', 'Plastic', 'Truck', 23, '18/09/2021 07:21 PM (GMT+5:30) Sri Jayawardenepura', 'Colombo', '11065732', '0xee076ac604fe86d53862bfd04d630f07eb99520a600df0fa916253de344eb298'),
(203, 'Colombo', 'Kamal', 'Food', 'Truck', 0, '18/09/2021 07:21 PM (GMT+5:30) Sri Jayawardenepura', 'Puttalam', '11065732', '0xee076ac604fe86d53862bfd04d630f07eb99520a600df0fa916253de344eb298'),
(204, 'Colombo', 'Kamal', 'Food', 'Truck', 11, '18/09/2021 07:21 PM (GMT+5:30) Sri Jayawardenepura', 'colo', '11065750', '0x908fa998720a814a4bdee8046112443c3bf2f86c049c6388c3d0494da62698a9'),
(205, 'Kandy', 'Klaus', 'Food', 'Truck', 12, '13/09/2021 06:30 PM (GMT+5:30) Sri Jayawardenepura', 'col', '11066108', '0xe1780bc5c9a9d8f4c420821bb6fa668ed87e48838d24a88805a71d383d16c806');

-- --------------------------------------------------------

--
-- Table structure for table `token_redeemed`
--

CREATE TABLE `token_redeemed` (
  `email` text NOT NULL,
  `redeemed_tokens` float NOT NULL,
  `last_redeemed_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `token_redeemed`
--

INSERT INTO `token_redeemed` (`email`, `redeemed_tokens`, `last_redeemed_date`) VALUES
('ard@ard.com', 0.1, '2022-02-23 21:43:02.754'),
('arshedahmed98@gmail.com', 0.15, '2022-03-02 16:03:52.995');

-- --------------------------------------------------------

--
-- Table structure for table `traking_seq`
--

CREATE TABLE `traking_seq` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `traking_seq`
--

INSERT INTO `traking_seq` (`id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(25),
(26);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `TxHash` text NOT NULL,
  `Amount` text NOT NULL,
  `Status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `TxHash`, `Amount`, `Status`) VALUES
(1, '0xf02b4c5e5b2542001cd6325c7ccb092952f493cd461b497c93ee152012351f0d', '100', 'Success'),
(2, '0x529fa8b315a4873374d42f82147e4b39ad7593b8f4aaefa41f6c03b9b06d5183', '200', 'Failed');

-- --------------------------------------------------------

--
-- Table structure for table `tweets`
--

CREATE TABLE `tweets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tweet` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tweets`
--

INSERT INTO `tweets` (`id`, `tweet`, `created_at`, `updated_at`) VALUES
(16, '<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Recycling waste being contaminated by thousands of soiled nappies every day - Leicestershire Live - <a href=\"https://twitter.com/hashtag/recycling?src=hash&amp;ref_src=twsrc%5Etfw\">#recycling</a> <a href=\"https://twitter.com/hashtag/uk?src=hash&amp;ref_src=twsrc%5Etfw\">#uk</a> <a href=\"https://twitter.com/hashtag/Leicestershire?src=hash&amp;ref_src=twsrc%5Etfw\">#Leicestershire</a> Educate the public so we can trap quality recyclables before they get contaminated <a href=\"https://twitter.com/hashtag/SafeEnviro?src=hash&amp;ref_src=twsrc%5Etfw\">#SafeEnviro</a> <a href=\"https://t.co/l3yr0G7Crg\">https://t.co/l3yr0G7Crg</a></p>&mdash; SafeEnviro (@SafeenviroL) <a href=\"https://twitter.com/SafeenviroL/status/1404303753054982144?ref_src=twsrc%5Etfw\">June 14, 2021</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>', '2021-06-15 22:41:50', '2021-06-15 22:41:50'),
(17, '<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">MoS calls on readers, shops and restaurants to join its War on Food Waste campaign <a href=\"https://twitter.com/hashtag/foodwaste?src=hash&amp;ref_src=twsrc%5Etfw\">#foodwaste</a> <a href=\"https://twitter.com/hashtag/recycling?src=hash&amp;ref_src=twsrc%5Etfw\">#recycling</a> <a href=\"https://twitter.com/hashtag/SafeEnviro?src=hash&amp;ref_src=twsrc%5Etfw\">#SafeEnviro</a> <a href=\"https://t.co/E5qFJpi5fg\">https://t.co/E5qFJpi5fg</a></p>&mdash; SafeEnviro (@SafeenviroL) <a href=\"https://twitter.com/SafeenviroL/status/1404302761550827520?ref_src=twsrc%5Etfw\">June 14, 2021</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>', '2021-06-15 22:44:58', '2021-06-15 22:44:58'),
(18, '<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">NEWS | Pandemic ‘disruption’ reflected in England <a href=\"https://twitter.com/hashtag/recycling?src=hash&amp;ref_src=twsrc%5Etfw\">#recycling</a> figures <a href=\"https://t.co/0bJQsdvkUd\">https://t.co/0bJQsdvkUd</a> <a href=\"https://t.co/pWYNo0QMu6\">pic.twitter.com/pWYNo0QMu6</a></p>&mdash; CIWM (@CIWM) <a href=\"https://twitter.com/CIWM/status/1392770309351264256?ref_src=twsrc%5Etfw\">May 13, 2021</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>', '2021-06-15 22:45:22', '2021-06-15 22:45:22'),
(20, '<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">NEWS | Oddbox pledges to save 150,000 tonnes of food from going to waste by 2025 <a href=\"https://t.co/IiQ4CZgjJu\">https://t.co/IiQ4CZgjJu</a> <a href=\"https://twitter.com/hashtag/StopFoodWasteDay?src=hash&amp;ref_src=twsrc%5Etfw\">#StopFoodWasteDay</a> <a href=\"https://t.co/JhQIs144wi\">pic.twitter.com/JhQIs144wi</a></p>&mdash; CIWM (@CIWM) <a href=\"https://twitter.com/CIWM/status/1387395609448042496?ref_src=twsrc%5Etfw\">April 28, 2021</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>', '2021-06-15 22:46:56', '2021-06-15 22:46:56'),
(21, '<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Quick trip to <a href=\"https://twitter.com/hashtag/clothingbank?src=hash&amp;ref_src=twsrc%5Etfw\">#clothingbank</a> to drop off some clothes, hopefully they make it into a new home 🙏🏾<br><br>What are you doing with your day? <a href=\"https://twitter.com/hashtag/recycling?src=hash&amp;ref_src=twsrc%5Etfw\">#recycling</a> <a href=\"https://twitter.com/hashtag/safeEnviro?src=hash&amp;ref_src=twsrc%5Etfw\">#safeEnviro</a> <a href=\"https://twitter.com/hashtag/recycleyouroldclothes?src=hash&amp;ref_src=twsrc%5Etfw\">#recycleyouroldclothes</a> <a href=\"https://t.co/KulggHJUS3\">pic.twitter.com/KulggHJUS3</a></p>&mdash; SafeEnviro (@SafeenviroL) <a href=\"https://twitter.com/SafeenviroL/status/1386240684278091779?ref_src=twsrc%5Etfw\">April 25, 2021</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>', '2021-06-15 22:47:26', '2021-06-15 22:47:26');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` varchar(500) NOT NULL,
  `email` text NOT NULL DEFAULT '%@%',
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `type`) VALUES
(2, 'Collector', '$2b$10$0atgTpaDmV0QYod/nxei0umC4DcwyBsMQ2VY7/ZmGq2FL54TfvIoq', 'safeenviro@co.uk', 'Collector'),
(1, 'Safe Enviro', '$2b$10$Nqj7IpucYFJli8eHdAZJcuL8oivMVIbFF.NM5jr2NJKP.VSrMZMqK', 'admin@safeenviro.com', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'user1', 'user1@safeenviro.com', '2021-10-15 00:34:47', '$2y$10$41e150GAQbvt6NCH2vxvru1ty8fnZHxgOfmwOZ7YwJq3ksxrMOvuC', '1YfvSEuZXl', '2021-10-15 00:34:47', '2021-10-15 00:34:47'),
(3, 'user2', 'user2@safeenviro.com', '2021-10-15 00:34:47', '$2y$10$56rjpWAJ2ckIVvmtIQYtKOIDnTU9GS2d2ShHEDBle52R8iQt5DwrO', '0ve1zvOPjn', '2021-10-15 00:34:47', '2021-10-15 00:34:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `collectiondata`
--
ALTER TABLE `collectiondata`
  ADD PRIMARY KEY (`collectionid`);

--
-- Indexes for table `collectionform`
--
ALTER TABLE `collectionform`
  ADD PRIMARY KEY (`collectionid`);

--
-- Indexes for table `complains`
--
ALTER TABLE `complains`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complain_images`
--
ALTER TABLE `complain_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `postals`
--
ALTER TABLE `postals`
  ADD PRIMARY KEY (`Postcode`);

--
-- Indexes for table `reviewedform`
--
ALTER TABLE `reviewedform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token_redeemed`
--
ALTER TABLE `token_redeemed`
  ADD PRIMARY KEY (`email`(255));

--
-- Indexes for table `traking_seq`
--
ALTER TABLE `traking_seq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`(200));

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `collectiondata`
--
ALTER TABLE `collectiondata`
  MODIFY `collectionid` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `collectionform`
--
ALTER TABLE `collectionform`
  MODIFY `collectionid` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `complains`
--
ALTER TABLE `complains`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `complain_images`
--
ALTER TABLE `complain_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `traking_seq`
--
ALTER TABLE `traking_seq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
