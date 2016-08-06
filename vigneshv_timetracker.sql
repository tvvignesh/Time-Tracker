-- phpMyAdmin SQL Dump
-- version 3.4.11.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 13, 2013 at 12:35 PM
-- Server version: 5.5.23
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `vigneshv_timetracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `contevtdb`
--

CREATE TABLE IF NOT EXISTS `contevtdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial number',
  `ceid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'continuous event id',
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user name creating the event',
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'theme id',
  `ecreatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time of creation of the event',
  `gpid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'group id - unique for continuous events',
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='database for continuous event' AUTO_INCREMENT=83 ;

--
-- Dumping data for table `contevtdb`
--

INSERT INTO `contevtdb` (`sno`, `ceid`, `uname`, `thmid`, `ecreatetime`, `gpid`) VALUES
(82, '9876765fbd', 'barathjag', 'aaff2b729c', '2013-02-19 02:28:32', ''),
(81, '9876765fbd', 'barathjag', 'aaff2b729c', '2013-02-19 02:28:16', ''),
(77, 'b7e5344c55', 'vignesh', 'fee2d9e5d6', '2013-02-04 18:28:03', ''),
(78, 'b7e5344c55', 'barathjag', 'fee2d9e5d6', '2013-02-11 00:14:31', ''),
(79, 'd8fd2b', 'barathjag', 'a24eb90da8', '2013-02-11 00:25:44', ''),
(80, 'd8fd2b', 'barathjag', 'a24eb90da8', '2013-02-11 00:26:12', '');

-- --------------------------------------------------------

--
-- Table structure for table `evtdb`
--

CREATE TABLE IF NOT EXISTS `evtdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `eid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'event id',
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'theme id',
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user name creating the event',
  `evname` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'name of the event',
  `ecreatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'event created time',
  `sessionid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'session id - unique every time logging starts',
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='TABLE CONTAINING ALL EVENTS' AUTO_INCREMENT=715 ;

--
-- Dumping data for table `evtdb`
--

INSERT INTO `evtdb` (`sno`, `eid`, `thmid`, `uname`, `evname`, `ecreatetime`, `sessionid`) VALUES
(616, 'b7e5344c55', 'fee2d9e5d6', 'vignesh', 'sleep', '2013-02-09 17:22:00', '5f2ZnL01TfiIlTq5Gu8QFmV7H'),
(617, 'f3980d5', 'fee2d9e5d6', 'vignesh', 'eat', '2013-02-09 17:22:00', '5f2ZnL01TfiIlTq5Gu8QFmV7H'),
(618, 'f915fc378c', 'fee2d9e5d6', 'vignesh', 'watch tv', '2013-02-09 17:22:00', '5f2ZnL01TfiIlTq5Gu8QFmV7H'),
(619, '96e99430c2', 'fee2d9e5d6', 'vignesh', 'play', '2013-02-09 17:22:00', '5f2ZnL01TfiIlTq5Gu8QFmV7H'),
(620, 'af6214', 'fee2d9e5d6', 'vignesh', 'wash', '2013-02-09 17:22:00', '5f2ZnL01TfiIlTq5Gu8QFmV7H'),
(621, '9be641a408', 'fee2d9e5d6', 'vignesh', 'scold', '2013-02-09 17:22:00', '5f2ZnL01TfiIlTq5Gu8QFmV7H'),
(714, 'f1aa6717b1', '', '', '', '2013-03-03 19:30:05', '51f02841'),
(713, '606994d', 'aaff2b729c', 'barathjag', 'vocalization ', '2013-02-19 02:43:48', 'tMDQEzFKuJoyy2eRgi17qw_lh'),
(712, '22702bdbc', 'aaff2b729c', 'barathjag', 'move with restraint ', '2013-02-19 02:43:48', 'tMDQEzFKuJoyy2eRgi17qw_lh'),
(711, '3b57bcfe00', 'aaff2b729c', 'barathjag', 'Move without restrainr', '2013-02-19 02:43:48', 'tMDQEzFKuJoyy2eRgi17qw_lh'),
(710, 'ed42c969bc', 'aaff2b729c', 'barathjag', 'propofol bolus', '2013-02-19 02:43:48', 'tMDQEzFKuJoyy2eRgi17qw_lh'),
(709, '9876765fbd', 'aaff2b729c', 'barathjag', 'propofol infusion ', '2013-02-19 02:43:48', 'tMDQEzFKuJoyy2eRgi17qw_lh'),
(708, 'a274318f22', 'aaff2b729c', 'barathjag', 'midaz bolus', '2013-02-19 02:43:48', 'tMDQEzFKuJoyy2eRgi17qw_lh'),
(707, 'a274318f22', 'aaff2b729c', 'barathjag', 'midaz bolus', '2013-02-19 02:27:54', 'ae089c66ca'),
(706, '9876765fbd', 'aaff2b729c', 'barathjag', 'propofol infusion ', '2013-02-19 02:27:37', 'ae089c66ca'),
(705, 'ed42c969bc', 'aaff2b729c', 'barathjag', 'propofol bolus', '2013-02-19 02:27:20', 'ae089c66ca'),
(702, '3b57bcfe00', 'aaff2b729c', 'barathjag', 'Move without restrainr', '2013-02-19 02:26:28', 'ae089c66ca'),
(703, '22702bdbc', 'aaff2b729c', 'barathjag', 'move with restraint ', '2013-02-19 02:26:47', 'ae089c66ca'),
(704, '606994d', 'aaff2b729c', 'barathjag', 'vocalization ', '2013-02-19 02:26:59', 'ae089c66ca'),
(701, '9be641a408', 'fee2d9e5d6', 'vignesh', 'scold', '2013-02-18 17:29:55', 'Ih109QTIGF6Pibk_XmWKpTOud'),
(700, 'af6214', 'fee2d9e5d6', 'vignesh', 'wash', '2013-02-18 17:29:55', 'Ih109QTIGF6Pibk_XmWKpTOud'),
(698, 'f915fc378c', 'fee2d9e5d6', 'vignesh', 'watch tv', '2013-02-18 17:29:55', 'Ih109QTIGF6Pibk_XmWKpTOud'),
(699, '96e99430c2', 'fee2d9e5d6', 'vignesh', 'play', '2013-02-18 17:29:55', 'Ih109QTIGF6Pibk_XmWKpTOud'),
(697, 'f3980d5', 'fee2d9e5d6', 'vignesh', 'eat', '2013-02-18 17:29:55', 'Ih109QTIGF6Pibk_XmWKpTOud'),
(696, 'b7e5344c55', 'fee2d9e5d6', 'vignesh', 'sleep', '2013-02-18 17:29:55', 'Ih109QTIGF6Pibk_XmWKpTOud');

-- --------------------------------------------------------

--
-- Table structure for table `gptable`
--

CREATE TABLE IF NOT EXISTS `gptable` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `eid1` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'event id 1',
  `eid2` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'event id 2',
  `gid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'group id',
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user name',
  `etype` int(11) NOT NULL COMMENT '1-event 2-intervention',
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'theme id',
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='GROUP TABLE CONTAINING ALL SIMULTANEOUS EVENTS & INTERVENTIONS' AUTO_INCREMENT=20 ;

--
-- Dumping data for table `gptable`
--

INSERT INTO `gptable` (`sno`, `eid1`, `eid2`, `gid`, `uname`, `etype`, `thmid`) VALUES
(9, 'f915fc378c', 'af6214', '1aa6f084ff', 'vignesh', 2, 'fee2d9e5d6'),
(10, '2ec58fd7a8', 'a0c87945', 'b20fe0da64', 'barathjag', 1, 'a24eb90da8'),
(8, 'f3980d5', '9be641a408', '74c09997f9', 'vignesh', 1, 'fee2d9e5d6'),
(11, '2ec58fd7a8', 'e9ffe360ff', '6231469a1e', 'barathjag', 1, 'a24eb90da8'),
(12, '2ec58fd7a8', 'a0c87945', '434413b531', 'barathjag', 1, 'a24eb90da8'),
(13, '2ec58fd7a8', 'e9ffe360ff', '3ab1e6739e', 'barathjag', 1, 'a24eb90da8'),
(14, 'e406ff', 'd8fd2b', 'fd394ee61b', 'barathjag', 2, 'a24eb90da8'),
(15, 'd8fd2b', 'e406ff', '0cb3a0d5ea', 'barathjag', 2, 'a24eb90da8'),
(16, '3b57bcfe00', '606994d', 'bc91c5', 'barathjag', 1, 'aaff2b729c'),
(17, '22702bdbc', '606994d', 'ec4d904007', 'barathjag', 1, 'aaff2b729c'),
(18, 'a274318f22', '9876765fbd', '83597cd977', 'barathjag', 2, 'aaff2b729c'),
(19, 'ed42c969bc', '9876765fbd', 'be675deeb9', 'barathjag', 2, 'aaff2b729c');

-- --------------------------------------------------------

--
-- Table structure for table `interventiondb`
--

CREATE TABLE IF NOT EXISTS `interventiondb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `ieid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `gpid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=65 ;

--
-- Dumping data for table `interventiondb`
--

INSERT INTO `interventiondb` (`sno`, `ieid`, `gpid`, `uname`, `thmid`) VALUES
(64, 'ed42c969bc', '2459b2363c', 'barathjag', 'aaff2b729c'),
(63, '9876765fbd', '2459b2363c', 'barathjag', 'aaff2b729c'),
(62, 'a274318f22', '2459b2363c', 'barathjag', 'aaff2b729c'),
(61, 'af6214', 'e4a20a141d', 'vignesh', 'fee2d9e5d6'),
(60, '8ff50f600a', '6043f0de49', 'barathjag', 'a24eb90da8'),
(59, 'd8fd2b', '6043f0de49', 'barathjag', 'a24eb90da8'),
(58, 'e406ff', '6043f0de49', 'barathjag', 'a24eb90da8'),
(57, 'af6214', 'e4a20a141d', 'barathjag', 'fee2d9e5d6'),
(54, 'f915fc378c', 'e4a20a141d', 'vignesh', 'fee2d9e5d6'),
(55, 'af6214', 'e4a20a141d', 'vignesh', 'fee2d9e5d6'),
(56, 'f915fc378c', 'e4a20a141d', 'barathjag', 'fee2d9e5d6');

-- --------------------------------------------------------

--
-- Table structure for table `pressdb`
--

CREATE TABLE IF NOT EXISTS `pressdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `eid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `gpid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `sid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `presstime` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  KEY `sno` (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='TABLE RECORDING ALL EVENT PRESSES UPLOADED AFTER LOGGING' AUTO_INCREMENT=1538 ;

--
-- Dumping data for table `pressdb`
--

INSERT INTO `pressdb` (`sno`, `eid`, `gpid`, `thmid`, `sid`, `uname`, `presstime`, `status`) VALUES
(1482, 'b7e5344c55', '', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:05 GMT+0530 (IST)', '1'),
(1483, 'f3980d5', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:08 GMT+0530 (IST)', '1'),
(1484, 'f3980d5', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:12 GMT+0530 (IST)', '2'),
(1485, '9be641a408', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:13 GMT+0530 (IST)', '1'),
(1486, '9be641a408', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:18 GMT+0530 (IST)', '2'),
(1487, 'af6214', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:19 GMT+0530 (IST)', '1'),
(1488, 'af6214', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:22 GMT+0530 (IST)', '2'),
(1489, 'af6214', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:23 GMT+0530 (IST)', '1'),
(1490, 'af6214', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:24 GMT+0530 (IST)', '2'),
(1491, 'f915fc378c', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:25 GMT+0530 (IST)', '1'),
(1492, 'f915fc378c', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:27 GMT+0530 (IST)', '2'),
(1493, '96e99430c2', '', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:28 GMT+0530 (IST)', '1'),
(1494, '96e99430c2', '', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:29 GMT+0530 (IST)', '2'),
(1495, '96e99430c2', '', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:30 GMT+0530 (IST)', '1'),
(1496, '96e99430c2', '', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:31 GMT+0530 (IST)', '2'),
(1497, 'b7e5344c55', '', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:32 GMT+0530 (IST)', '1'),
(1498, '9be641a408', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:33 GMT+0530 (IST)', '1'),
(1499, '9be641a408', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:36 GMT+0530 (IST)', '2'),
(1500, 'f3980d5', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:37 GMT+0530 (IST)', '1'),
(1501, 'f3980d5', '74c09997f9 ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:37 GMT+0530 (IST)', '2'),
(1502, 'f915fc378c', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:40 GMT+0530 (IST)', '1'),
(1503, 'f915fc378c', '1aa6f084ff ', 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:45 GMT+0530 (IST)', '2'),
(1504, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:00:39 GMT+0530 (IST)', '1'),
(1505, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:00:39 GMT+0530 (IST)', '2'),
(1506, '22702bdbc', 'ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:03 GMT+0530 (IST)', '1'),
(1507, '22702bdbc', 'ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:05 GMT+0530 (IST)', '2'),
(1508, '3b57bcfe00', 'bc91c5 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:05 GMT+0530 (IST)', '1'),
(1509, '3b57bcfe00', 'bc91c5 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:08 GMT+0530 (IST)', '2'),
(1510, '9876765fbd', '', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:09 GMT+0530 (IST)', '1'),
(1511, 'ed42c969bc', 'be675deeb9 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:11 GMT+0530 (IST)', '1'),
(1512, 'ed42c969bc', 'be675deeb9 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:12 GMT+0530 (IST)', '2'),
(1513, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:12 GMT+0530 (IST)', '1'),
(1514, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:13 GMT+0530 (IST)', '2'),
(1515, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:13 GMT+0530 (IST)', '1'),
(1516, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:13 GMT+0530 (IST)', '2'),
(1517, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:18 GMT+0530 (IST)', '1'),
(1518, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:19 GMT+0530 (IST)', '2'),
(1519, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:20 GMT+0530 (IST)', '1'),
(1520, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:21 GMT+0530 (IST)', '2'),
(1521, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:23 GMT+0530 (IST)', '1'),
(1522, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:24 GMT+0530 (IST)', '2'),
(1523, 'ed42c969bc', 'be675deeb9 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:25 GMT+0530 (IST)', '1'),
(1524, 'ed42c969bc', 'be675deeb9 ', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:26 GMT+0530 (IST)', '2'),
(1525, '9876765fbd', '', 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:26 GMT+0530 (IST)', '1'),
(1526, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:03 GMT+0530 (IST)', '1'),
(1527, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:05 GMT+0530 (IST)', '2'),
(1528, '9876765fbd', '', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:19 GMT+0530 (IST)', '1'),
(1529, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:21 GMT+0530 (IST)', '1'),
(1530, '606994d', 'bc91c5 ec4d904007 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:22 GMT+0530 (IST)', '2'),
(1531, '3b57bcfe00', 'bc91c5 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:27 GMT+0530 (IST)', '1'),
(1532, '3b57bcfe00', 'bc91c5 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:30 GMT+0530 (IST)', '2'),
(1533, '9876765fbd', '', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:33 GMT+0530 (IST)', '1'),
(1534, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:34 GMT+0530 (IST)', '1'),
(1535, 'a274318f22', '83597cd977 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:34 GMT+0530 (IST)', '2'),
(1536, 'ed42c969bc', 'be675deeb9 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:36 GMT+0530 (IST)', '1'),
(1537, 'ed42c969bc', 'be675deeb9 ', 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:36 GMT+0530 (IST)', '2');

-- --------------------------------------------------------

--
-- Table structure for table `simulevtdb`
--

CREATE TABLE IF NOT EXISTS `simulevtdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `gpid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'group id',
  `seid1` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'event id 1',
  `seid2` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'event id 2',
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user name creating the event',
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'theme id',
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='TABLE CONTAINING ALL SIMULTANEOUS EVENTS' AUTO_INCREMENT=150 ;

--
-- Dumping data for table `simulevtdb`
--

INSERT INTO `simulevtdb` (`sno`, `gpid`, `seid1`, `seid2`, `uname`, `thmid`) VALUES
(149, '872bcc0f51', '22702bdbc', '606994d', 'barathjag', 'aaff2b729c'),
(148, '666369bc07', '3b57bcfe00', '606994d', 'barathjag', 'aaff2b729c'),
(147, 'd6c24543ec', '2ec58fd7a8', 'e9ffe360ff', 'barathjag', 'a24eb90da8'),
(146, '37b8586', '2ec58fd7a8', 'a0c87945', 'barathjag', 'a24eb90da8'),
(145, 'adbdda2e1a', '2ec58fd7a8', 'e9ffe360ff', 'barathjag', 'a24eb90da8'),
(144, 'b9fabf144a', '2ec58fd7a8', 'a0c87945', 'barathjag', 'a24eb90da8'),
(143, '0a32c8b0', 'f3980d5', '9be641a408', 'barathjag', 'fee2d9e5d6'),
(142, '0a32c8b0', 'f3980d5', '9be641a408', 'vignesh', 'fee2d9e5d6');

-- --------------------------------------------------------

--
-- Table structure for table `simulintdb`
--

CREATE TABLE IF NOT EXISTS `simulintdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `gpid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `seid1` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `seid2` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='TABLE OF SIMULTANEOUS INTERVENTIONS' AUTO_INCREMENT=73 ;

--
-- Dumping data for table `simulintdb`
--

INSERT INTO `simulintdb` (`sno`, `gpid`, `seid1`, `seid2`, `uname`, `thmid`) VALUES
(72, '21756f1474', 'ed42c969bc', '9876765fbd', 'barathjag', 'aaff2b729c'),
(71, 'e084b9d58e', 'a274318f22', '9876765fbd', 'barathjag', 'aaff2b729c'),
(70, '6282de', 'd8fd2b', 'e406ff', 'barathjag', 'a24eb90da8'),
(69, '313250630c', 'e406ff', 'd8fd2b', 'barathjag', 'a24eb90da8'),
(68, '52b9c6f2e4', 'f915fc378c', 'af6214', 'barathjag', 'fee2d9e5d6'),
(67, '52b9c6f2e4', 'f915fc378c', 'af6214', 'vignesh', 'fee2d9e5d6');

-- --------------------------------------------------------

--
-- Table structure for table `startstopdb`
--

CREATE TABLE IF NOT EXISTS `startstopdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `thmid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `sid` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `uname` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `presstime` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='TABLE HAVING START AND STOP TIMES OF EVENT LOGGING' AUTO_INCREMENT=151 ;

--
-- Dumping data for table `startstopdb`
--

INSERT INTO `startstopdb` (`sno`, `thmid`, `sid`, `uname`, `presstime`, `status`) VALUES
(145, 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:02 GMT+0530 (IST)', '1'),
(146, 'fee2d9e5d6', 'Ih109QTIGF6Pibk_XmWKpTOud', 'vignesh', 'Mon Feb 18 2013 23:00:46 GMT+0530 (IST)', '2'),
(147, 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:01 GMT+0530 (IST)', '1'),
(148, 'aaff2b729c', 'ae089c66ca', 'barathjag', 'Tue Feb 19 2013 08:01:30 GMT+0530 (IST)', '2'),
(149, 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:13 GMT+0530 (IST)', '1'),
(150, 'aaff2b729c', 'tMDQEzFKuJoyy2eRgi17qw_lh', 'barathjag', 'Tue Feb 19 2013 08:14:38 GMT+0530 (IST)', '2');

-- --------------------------------------------------------

--
-- Table structure for table `themedb`
--

CREATE TABLE IF NOT EXISTS `themedb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial number',
  `themeid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'theme id',
  `themename` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT 'name of the theme',
  `did` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT 'unique id of the device creating the theme',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time of theme creation',
  `dname` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT 'device name (platform) in use',
  `uname` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user name',
  `presetthm` int(11) NOT NULL DEFAULT '0' COMMENT '1-preset else no',
  `publicthm` int(11) NOT NULL COMMENT '1-private 2-public',
  PRIMARY KEY (`sno`),
  UNIQUE KEY `themeid` (`themeid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='theme database' AUTO_INCREMENT=103 ;

--
-- Dumping data for table `themedb`
--

INSERT INTO `themedb` (`sno`, `themeid`, `themename`, `did`, `createtime`, `dname`, `uname`, `presetthm`, `publicthm`) VALUES
(99, 'fee2d9e5d6', 'test', '9774d56d682e549c', '2013-02-04 18:26:15', 'Android', 'vignesh', 1, 2),
(101, 'a24eb90da8', 'OSUBRS', 'e79329aba7eaf4f7', '2013-02-11 00:15:37', 'Android', 'barathjag', 0, 2),
(102, 'aaff2b729c', 'OSUBRS2', 'e79329aba7eaf4f7', '2013-02-19 02:24:39', 'Android', 'barathjag', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `userdb`
--

CREATE TABLE IF NOT EXISTS `userdb` (
  `sno` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'serial no',
  `uname` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user name',
  `upass` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT 'password',
  `uid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user id',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time of account creation',
  `email` varchar(300) COLLATE utf8_unicode_ci NOT NULL COMMENT 'email address of the user',
  `aggaccept` int(11) NOT NULL COMMENT 'flag 1-accept 2-deny',
  `subscribe` int(11) NOT NULL COMMENT 'flag 1-yes 2-no',
  `loginid` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'random id having login random no.',
  PRIMARY KEY (`sno`),
  UNIQUE KEY `uid` (`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user details' AUTO_INCREMENT=4 ;

--
-- Dumping data for table `userdb`
--

INSERT INTO `userdb` (`sno`, `uname`, `upass`, `uid`, `createtime`, `email`, `aggaccept`, `subscribe`, `loginid`) VALUES
(1, 'vignesh', 'ta81e060e2616909f60e4f553e04ea447fead96e64', 'e433ad6ef4', '2013-01-04 20:03:19', 'a@a.com', 0, 0, 'bd0354e947'),
(3, 'barathjag', 'taad2109cdbc2c4a17f46eada299a8c9e7f6fb0188', 'edc3c5db35', '2013-01-18 16:12:19', 'barathjag@yahoo.com', 0, 0, 'ff619c19a4');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
