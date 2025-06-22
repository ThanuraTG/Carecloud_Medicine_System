CREATE DATABASE  IF NOT EXISTS `carecloudehr` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `carecloudehr`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: carecloudehr
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `audit_log`
--

DROP TABLE IF EXISTS `audit_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audit_log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `action` varchar(255) DEFAULT NULL,
  `details` varchar(1000) DEFAULT NULL,
  `timestamp` datetime(6) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_log`
--

LOCK TABLES `audit_log` WRITE;
/*!40000 ALTER TABLE `audit_log` DISABLE KEYS */;
INSERT INTO `audit_log` VALUES (1,'CREATE_USER','Created user: testtest','2024-11-24 16:36:05.747529','ADMIN','SYSTEM'),(2,'CREATE_USER','Created user: testtest','2024-11-24 16:39:18.706148','ADMIN','SYSTEM'),(3,'LOGIN','User logged in successfully','2024-11-24 19:55:34.368894','USER','adminuser'),(4,'FAILED_LOGIN','Failed login attempt','2024-11-24 19:55:58.392113','USER','adminuser'),(5,'LOGIN','User logged in successfully','2024-11-24 20:03:50.144981','USER','adminuser'),(6,'CREATE_USER','Created user: testtest','2024-11-24 20:04:09.114574','ADMIN','ADMIN'),(7,'UPDATE_USER','Updated user with ID: 47','2024-11-24 20:04:26.432409','ADMIN','ADMIN'),(8,'DELETE_USER','Deleted user with ID: 47','2024-11-24 20:04:41.559084','ADMIN','ADMIN'),(9,'GET_ALL_USERS','Get all user\'s details','2024-11-24 20:04:51.472591','ADMIN','ADMIN'),(10,'LOGIN','User logged in successfully','2024-11-24 20:16:57.118184','USER','adminuser'),(11,'LOGIN','User logged in successfully','2024-11-24 20:18:55.111827','USER','testdoctor321'),(12,'LOGIN','User logged in successfully','2024-11-27 15:14:43.970411','USER','adminuser'),(13,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:14:44.276453','ADMIN','ADMIN'),(14,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:14:44.386719','ADMIN','ADMIN'),(15,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:14:52.487832','ADMIN','ADMIN'),(16,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:14:52.594668','ADMIN','ADMIN'),(17,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:16:56.280577','ADMIN','ADMIN'),(18,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:17:01.204899','ADMIN','ADMIN'),(19,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:17:01.297142','ADMIN','ADMIN'),(20,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:18:48.420597','ADMIN','ADMIN'),(21,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:18:48.479558','ADMIN','ADMIN'),(22,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:18:49.884113','ADMIN','ADMIN'),(23,'GET_ALL_USERS','Get all user\'s details','2024-11-27 15:18:49.951332','ADMIN','ADMIN'),(24,'LOGIN','User logged in successfully','2024-12-05 16:25:18.960761','USER','testdoctor321'),(25,'FAILED_LOGIN','Failed login attempt','2024-12-05 16:25:32.824582','USER','adminuser'),(26,'LOGIN','User logged in successfully','2024-12-05 16:25:43.045008','USER','adminuser'),(27,'LOGIN','User logged in successfully','2024-12-05 16:28:58.721844','USER','adminuser'),(28,'LOGIN','User logged in successfully','2024-12-05 16:30:34.318671','USER','adminuser'),(29,'GET_USER_BY_NAME','Get user with username: testdoctor321','2024-12-05 16:30:44.179131','ADMIN','ADMIN'),(30,'LOGIN','User logged in successfully','2024-12-05 16:37:24.260500','USER','adminuser'),(31,'GET_USER_BY_NAME','Get user with username: testdoctor321','2024-12-05 16:37:34.763317','ADMIN','ADMIN'),(32,'LOGIN','User logged in successfully','2024-12-05 16:39:05.427971','USER','adminuser'),(33,'GET_USER_BY_NAME','Get user with username: testdoctor321','2024-12-05 16:39:17.722495','ADMIN','ADMIN'),(34,'LOGIN','User logged in successfully','2024-12-05 16:41:41.303548','USER','adminuser'),(35,'GET_USER_BY_NAME','Get user with username: testdoctor321','2024-12-05 16:41:55.463364','ADMIN','ADMIN'),(36,'LOGIN','User logged in successfully','2024-12-05 17:36:19.779554','USER','adminuser'),(37,'LOGIN','User logged in successfully','2024-12-05 17:42:48.604351','USER','adminuser'),(38,'LOGIN','User logged in successfully','2024-12-05 17:50:40.799627','USER','adminuser'),(39,'LOGIN','User logged in successfully','2024-12-06 16:45:43.851681','USER','adminuser'),(40,'LOGIN','User logged in successfully','2024-12-06 17:32:12.114880','USER','adminuser'),(41,'LOGIN','User logged in successfully','2024-12-06 17:35:58.505447','USER','adminuser'),(42,'LOGIN','User logged in successfully','2024-12-07 12:08:28.720166','USER','adminuser'),(43,'LOGIN','User logged in successfully','2024-12-07 12:20:16.564724','USER','adminuser'),(44,'LOGIN','User logged in successfully','2024-12-08 01:28:17.945371','USER','adminuser');
/*!40000 ALTER TABLE `audit_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_record`
--

DROP TABLE IF EXISTS `medical_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_record` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `diagnosis` varchar(255) DEFAULT NULL,
  `symptoms` varchar(255) DEFAULT NULL,
  `treatment_plan` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `visit_date` datetime(6) DEFAULT NULL,
  `patient_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKc0owwx1i1r9xf3h4uxw89rd1l` (`patient_id`),
  CONSTRAINT `FKc0owwx1i1r9xf3h4uxw89rd1l` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_record`
--

LOCK TABLES `medical_record` WRITE;
/*!40000 ALTER TABLE `medical_record` DISABLE KEYS */;
INSERT INTO `medical_record` VALUES (2,'2024-12-07 12:26:09.051513','Viral infection','Fever, body ache','Medication and rest','2024-12-07 12:28:16.372053','2024-12-07 10:00:00.000000',6);
/*!40000 ALTER TABLE `medical_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `contact_number` varchar(255) NOT NULL,
  `created_at` date DEFAULT NULL,
  `medical_history` varchar(500) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `guardian_contact_number` varchar(255) DEFAULT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `guardian_relationship` varchar(255) DEFAULT NULL,
  `requires_guardian` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKg4jcwhyb9c8d5y2bqa45aau4m` (`contact_number`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,123456,'123456789','2024-12-05',NULL,'testtest',NULL,NULL,NULL,NULL),(4,20,'1234567890','2024-12-06','None','Uvindu',NULL,NULL,NULL,_binary '\0'),(5,20,'2225555444','2024-12-06','None','Tom',NULL,NULL,NULL,_binary '\0'),(6,23,'0767176347','2024-12-07','None','Uvindu',NULL,NULL,NULL,_binary '\0');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `dosage` int DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `frequency` varchar(255) DEFAULT NULL,
  `medicine_name` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `patient_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh52eitcdgeocsfdky93edn4br` (`patient_id`),
  CONSTRAINT `FKh52eitcdgeocsfdky93edn4br` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription`
--

LOCK TABLES `prescription` WRITE;
/*!40000 ALTER TABLE `prescription` DISABLE KEYS */;
INSERT INTO `prescription` VALUES (1,'2024-12-08 01:33:48.705926',200,'7 days','3 times a day','Ibuprofen','Take with water','2024-12-08 01:35:00.707595',4),(2,'2024-12-08 01:38:06.538251',500,'5 days','2 times a day','Paracetamol','Take after meals','2024-12-08 01:38:06.538251',4);
/*!40000 ALTER TABLE `prescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role_type` enum('ADMIN','DOCTOR','MANAGER','STAFF','USER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6kpjgt1lwdofsckw70uo9eo0` (`role_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(3,'DOCTOR'),(2,'STAFF');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `active` bit(1) NOT NULL,
  `role_id` bigint DEFAULT NULL,
  `role` bigint DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp56c1712k691lhsyewcssf40f` (`role_id`),
  KEY `FK4c6vlshk8x83ifeoggi3exg3k` (`role`),
  CONSTRAINT `FK4c6vlshk8x83ifeoggi3exg3k` FOREIGN KEY (`role`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKp56c1712k691lhsyewcssf40f` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,NULL,'$2a$10$Ds9rBO2tfEiVctDUVkl6O.OWUqcR927Xvp1k6rvXIQgKG9CVE7DVS','updatedUser',_binary '',3,NULL,NULL,NULL,NULL),(7,NULL,'$2a$10$uO.z0320EI1/9bdQkNF.2.AwaOWVsANbhENq9OBEjtzUcLYFh5nUS','doctoruser',_binary '',3,NULL,NULL,NULL,NULL),(8,NULL,'$2a$10$1Vm.gPGQgL90WwzQugiN3.ffhl6PoM05KmPiq0F4D7oDgLpq5OmDG','doctoruser1',_binary '',3,NULL,NULL,NULL,NULL),(9,NULL,'$2a$10$7yowRbk/ktVrnYUGhXKz/Ok4C4odKLAIOFS3..Cj/aUIn5sNXQ/1i','updatedUser',_binary '',3,NULL,NULL,NULL,NULL),(10,NULL,'$2a$10$DLG1eF742UdpX8R7hMct3OVDRW22gwUSp3OfaJ2GUH.m5hw6EzYm6','updatedUser',_binary '',3,NULL,NULL,NULL,NULL),(11,NULL,'$2a$10$hashedPassword','newuser',_binary '',1,NULL,NULL,NULL,NULL),(12,NULL,'$2a$10$hashedPassword','newuser',_binary '',1,NULL,NULL,NULL,NULL),(13,NULL,'admin_password','admin',_binary '',1,NULL,NULL,NULL,NULL),(14,NULL,'staff_password','staff',_binary '',2,NULL,NULL,NULL,NULL),(15,NULL,'$2a$10$0zlEQhdgUcnWWl06qPuKIeD0S6EmJQyyzAhTguYY4Pi3OmO95EfxW','test',_binary '',3,NULL,NULL,NULL,NULL),(16,NULL,'$2a$10$QfLw2MONcziJhoFsG1kMReyxjXnFcYWFVCWDUfhNVOCSguwBVw0y2','test',_binary '',2,NULL,NULL,NULL,NULL),(19,NULL,'$2a$10$JJT60lAWsPmaGp4w7LKlLeHFTddPPeV2Mp6829eVd9XNK83ECnXsG','testadmin',_binary '',1,NULL,NULL,NULL,NULL),(20,NULL,'$2a$10$vIsHMg7auGjWP73BGebYquVhSu4QubOPnDwNuBCH6cxY0wrCMqRHG','teststaff',_binary '',2,NULL,NULL,NULL,NULL),(21,NULL,'$2a$10$gd9fZh2MGGJZTniOEcXlpORI9Bddae2A6hS0MyMFa3cDJKjUzMqnW','testdoctor',_binary '',3,NULL,NULL,NULL,NULL),(22,NULL,'$2a$10$155Gd2zvg173iP7THiyuY.YY2pQlCGCr0fgNap6EbicekVwtO0eZq','admin1',_binary '',1,NULL,NULL,NULL,NULL),(23,NULL,'$2a$10$Y6NM24sU/7i70vGbgxsm.uF4cMl/YMTyjzZakfir4PxrO3waiSNSC','admin1',_binary '',1,NULL,NULL,NULL,NULL),(30,'admin@example.com','$2a$10$tQqF55HpOl9EA9Q0nA/.AulvgsqGkLXKo/mp.r.D.3efeWXMNAuki','adminuser',_binary '',1,NULL,'admin','admin','1234567890'),(33,'johnsmith@example.com','$2a$10$fUf5ZS1n9wVlNlep5w16UOqoupIDr9oBuT/AH.bNhFxnpZRsFPMJG','updatetest',_binary '',2,NULL,'John','Smith','0987654321'),(35,'adminexample.com','$2a$10$OQXTOFN2XvFJf8S8pOoaYO/w.O4isY0U.CYqaJYTGjQV.O70ZJbfW','test',_binary '',2,NULL,'admin','admin','1234567890'),(41,'johnsmith@example.com','$2a$10$FFw0YzAB2yWWOB1n2ekgK.WbNN.HQ2jRmcYuzNMJwpy9YEWNUFzka','doctor1',_binary '',3,NULL,'test','doctor','0987654321'),(42,'johnsmith@example.com','$2a$10$V2eC3lvfq1wGmQ2OMg9c4OXloJ/Ui0C5qitim93SupUg2uxc/Dm3W','testupdate',_binary '',2,NULL,'test','staff','0987654321'),(43,'johnsmith@example.com','$2a$10$P7wp5hSh5evOom5xA8bfuuaM0PIy8F6TWZ6.MQM96h3bkojghVc3C','testdoctor321',_binary '',3,NULL,'test','doctor','0987654321'),(45,'testdoctor.com','$2a$10$d4UdzkmmkhUZS68jJ3no2uNNSzpN.P8JEBMt75O0Zrimc3oLkSe0.','testtest',_binary '',2,NULL,'test','doctor','1234567890'),(46,'testdoctor.com','$2a$10$ueEgLr1CBTFcZvaLT5pyAOWMzErG7PNq2U5V62yemEY/22G8wQKSm','testtest',_binary '',2,NULL,'test','doctor','1234567890');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-08 14:49:26
