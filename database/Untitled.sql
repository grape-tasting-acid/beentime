-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: beentime
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `event_tb`
--

DROP TABLE IF EXISTS `event_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_tb` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `detail` varchar(45) NOT NULL,
  `time` varchar(1000) NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_tb`
--

LOCK TABLES `event_tb` WRITE;
/*!40000 ALTER TABLE `event_tb` DISABLE KEYS */;
INSERT INTO `event_tb` VALUES (1,'ㅎㅇㅎㅇ','ㅋㅋ','5월 6일 / 2:30 PM'),(2,'하이루','','5월 7일 / 2:30 PM, 5월 8일 / 2:00 PM'),(3,'test','test2','5월 26일 / 12:30 PM'),(4,'Test12345','','5월 6일 / 12:30 PM'),(5,'Ddp','','5월 6일 / 2:00 PM'),(6,'test 17:50','','5월 6일 / 12:30 PM'),(7,'test 17:52','test','5월 7일 / 12:30 PM'),(8,'ㅋㅋㅋ','ㅋㅋㅋㅋ','5월 10일 / 2:00 PM'),(9,'test 17:56','','5월 6일 / 12:30 PM');
/*!40000 ALTER TABLE `event_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participation_tb`
--

DROP TABLE IF EXISTS `participation_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participation_tb` (
  `participation_id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `checked` varchar(1000) NOT NULL,
  `memo` varchar(200) DEFAULT NULL,
  `time` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`participation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participation_tb`
--

LOCK TABLES `participation_tb` WRITE;
/*!40000 ALTER TABLE `participation_tb` DISABLE KEYS */;
INSERT INTO `participation_tb` VALUES (1,1,'zzzz','yes_0','','5월 6일 / 2:30 PM'),(2,1,'zzzzz','yes_0','','5월 6일 / 2:30 PM'),(3,2,'지영','yes_0, question_1','','5월 7일 / 2:30 PM, 5월 8일 / 2:00 PM'),(4,2,'ㅋㅋㅋ','yes_0, yes_1','','5월 7일 / 2:30 PM, 5월 8일 / 2:00 PM'),(5,0,'이진원','','없어요',''),(6,9,'test1','yes_0','','5월 6일 / 12:30 PM');
/*!40000 ALTER TABLE `participation_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'beentime'
--

--
-- Dumping routines for database 'beentime'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-06 18:59:26
