DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username CHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);

-- ---
-- Table 'Rooms'
-- 
-- ---

-- DROP TABLE IF EXISTS `Rooms`;
    
-- CREATE TABLE `Rooms` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `roomName` CHAR(20) NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS messages;
    
CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

-- ---
-- Table 'Friends'
-- 
-- ---

-- DROP TABLE IF EXISTS `Friends`;
    
-- CREATE TABLE `Friends` (
--   `id_Users` INTEGER NULL DEFAULT NULL
-- );

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `Messages` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
-- ALTER TABLE `Messages` ADD FOREIGN KEY (id_Rooms) REFERENCES `Rooms` (`id`);
-- ALTER TABLE `Friends` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`userName`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`roomName`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`id`,`Message`,`id_Users`,`id_Rooms`) VALUES
-- ('','','','');
-- INSERT INTO `Friends` (`id_Users`) VALUES
-- ('');
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

