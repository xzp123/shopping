/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.40 : Database - shopping
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`shopping` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `shopping`;

/*Table structure for table `address` */

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` text,
  `phone` double DEFAULT NULL,
  `youbian` int(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `address` */

insert  into `address`(`id`,`name`,`address`,`phone`,`youbian`,`username`) values (13,'艾迪','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)',2147483647,362200,'qq'),(19,'鬼月','123',2147483647,35021,'1123');

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `admin` */

insert  into `admin`(`id`,`name`,`password`) values (4,'admin','21232f297a57a5a743894a0e4a801fc3');

/*Table structure for table `banner` */

DROP TABLE IF EXISTS `banner`;

CREATE TABLE `banner` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `banner_image` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `style_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `banner` */

insert  into `banner`(`id`,`banner_image`,`style`,`style_id`) values (1,'/upload/images/banner1.jpg','简美',7),(2,'/upload/images/banner2.jpg','中式',3),(3,'/upload/images/banner3.jpg','儿童',4),(4,'/upload/images/banner4.jpg','北欧',5),(5,'/upload/images/banner5.jpg','现代',1);

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `parent_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;

/*Data for the table `category` */

insert  into `category`(`id`,`category`,`parent_id`) values (1,'床',0),(2,'床垫',0),(3,'衣柜',0),(4,'沙发',0),(5,'茶几',0),(6,'电视柜',0),(7,'餐桌',0),(8,'餐椅',0),(9,'餐边柜',0),(10,'书桌',0),(11,'书柜',0),(12,'书椅',0),(13,'儿童床',0),(14,'儿童衣柜',0),(15,'儿童椅',0),(16,'办公桌',0),(17,'办公椅',0),(18,'办公沙发',0),(19,'户外桌',0),(20,'户外椅',0),(21,'吊篮',0),(22,'实木床',1),(23,'布艺床',1),(24,'真皮床',1),(25,'高箱床',1),(26,'美规床',1),(27,'床板床',1),(28,'榻榻米床',1),(29,'排骨架床',1),(30,'美国进口床垫',2),(31,'椰棕床垫',2),(32,'乳胶床垫',2),(33,'弹簧床垫',2),(34,'3D床垫',2),(35,'床头柜',3),(36,'拉门衣柜',3),(37,'趟门衣柜',3),(38,'四门衣柜',3),(39,'斗柜',3),(40,'实木沙发',4),(41,'布艺沙发',4),(42,'转角沙发',4),(43,'真皮沙发',4),(44,'功能沙发',4),(45,'沙发床',4),(46,'实木茶几',5),(47,'方茶几',5),(48,'玻璃茶几',5),(49,'大理石茶几',5),(50,'装饰柜',6),(51,'鞋柜',6),(52,'玄关柜',6),(53,'间厅柜',6),(54,'客厅酒柜',6),(55,'实木鞋柜',6),(56,'长餐桌',7),(57,'圆餐桌',7),(58,'折叠餐桌',7),(59,'大理石餐桌',7),(60,'实木餐桌',7),(61,'玻璃餐桌',7),(62,'扶手餐椅',8),(63,'田园餐椅',8),(64,'实木餐椅',8),(65,'简约餐椅',8),(66,'田园餐边柜',9),(67,'实木餐边柜',9),(68,'实木书桌',10),(69,'田园书桌',10),(70,'办公桌',10),(71,'电脑桌',10),(72,'学生书桌',10),(73,'三门书柜',11),(74,'四门书柜',11),(75,'转角书柜',11),(76,'书柜书架',11),(77,'书房转椅',12),(78,'电脑椅',12),(79,'办公转椅',12),(80,'田园书椅',12),(81,'实木儿童床',13),(82,'田园儿童床',13),(83,'上下床',13),(84,'高低床',13),(85,'双层床',13),(86,'儿童母子床',13),(87,'儿童多功能床',13),(88,'儿童床头柜',14),(89,'儿童书柜',14),(90,'多用柜',14),(91,'儿童书台',15),(92,'儿童电脑桌',15),(93,'学生桌',15),(94,'儿童转椅',15),(95,'办公桌',16),(96,'大班台',16),(97,'办公椅',17),(98,'会议椅',17),(99,'大班椅',17),(100,'办公桌椅',17),(101,'办公沙发',18),(102,'皮艺沙发',18),(103,'布艺沙发',18),(104,'户外桌',19),(105,'阳台家具',19),(106,'户外休闲家具',19),(107,'户外椅',20),(108,'休闲椅',20),(109,'藤桌椅',20),(110,'摇椅',20),(111,'吊椅',21);

/*Table structure for table `desc_images` */

DROP TABLE IF EXISTS `desc_images`;

CREATE TABLE `desc_images` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `desc_image` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

/*Data for the table `desc_images` */

insert  into `desc_images`(`id`,`desc_image`,`product_name`) values (1,'/upload/images/upload_84afef23ccc7c284e91b0c09d0d9c56c.jpg','蓝骑'),(2,'/upload/images/upload_6286360668c5d2e26345f66569dc1362.jpg','蓝骑'),(3,'/upload/images/upload_2072efbd408bf111e1aa7492e221473a.jpg','蓝骑'),(4,'/upload/images/upload_5448096802765e5128cd120bc264a8b2.jpg','蓝骑'),(5,'/upload/images/upload_9e3e4abafcf8fefd3fee7d026cf60637.jpg','蓝骑'),(10,'/upload/images/upload_c2273d310a49d1fde37753f55c406478.jpg','Clover克罗弗'),(11,'/upload/images/upload_8cff9f2da4eb8bd6dfb0931c75b3fbf9.jpg','Clover克罗弗'),(12,'/upload/images/upload_28f980fca5c01e8f2837bfe6175def81.jpg','Clover克罗弗'),(13,'/upload/images/upload_6ea4c85a2f0ebc2a15c92097a92e0d86.jpg','Clover克罗弗'),(14,'/upload/images/upload_93e4299e9bc62a5bf7cb942484225729.jpg','Clover克罗弗'),(15,'/upload/images/upload_1a8c192e4d24fb8cf48ebbe9bca80dc9.jpg','Clover克罗弗'),(16,'/upload/images/upload_bb59be5033ddc96a05d6b77086f4b309.jpg','Clover克罗弗'),(17,'/upload/images/upload_d1a5d2c7c0a0b3c625850d89b5ad42e4.jpg','Clover克罗弗'),(18,'/upload/images/upload_b6a381207287353008a8733301542cb5.jpg','Clover克罗弗'),(19,'/upload/images/upload_2f61d2d7f394dde051f899dd792e0074.jpg','Clover克罗弗'),(20,'/upload/images/upload_e6350aae75083e65f8e55486a0956a6a.jpg','Clover克罗弗'),(21,'/upload/images/upload_61f787beb1bcdcdc6c5217d683466ba4.jpg','卡富亚'),(22,'/upload/images/upload_a06c8bbb48b1db9a3f38e11e6b056d19.jpg','卡富亚'),(23,'/upload/images/upload_487c0aa8134bc3d6d9806bc2db6ee305.jpg','卡富亚'),(24,'/upload/images/upload_7c093edb7c9da5f58322074c82625686.jpg','卡富亚'),(25,'/upload/images/upload_b21015856ec387ac738c25555867e11f.jpg','卡富亚'),(26,'/upload/images/upload_c89d844728860c3821aa253dd5b03ce4.jpg','卡富亚'),(27,'/upload/images/upload_195911ce58320eeae28f3382f450da74.jpg','卡富亚'),(28,'/upload/images/upload_baf3f51234ead671ad85f4b2ea2156a7.jpg','卡富亚'),(29,'/upload/images/upload_2a448257016216dd0f8e006c15ee2633.jpg','卡富亚'),(30,'/upload/images/upload_5612b59daebba2da9a689ab2342f8e19.jpg','卡富亚'),(31,'/upload/images/upload_27670958677942522a10d077c170e8fc.jpg','卡富亚'),(32,'/upload/images/upload_7d723f0fa2384fdeac271d42d0834a23.jpg','蒂美悦'),(33,'/upload/images/upload_23d1d1649bc19ba35ec1ed34be08fbaf.jpg','蒂美悦'),(34,'/upload/images/upload_ad642a15006ccd10c3643e127b3ca6c1.jpg','蒂美悦'),(35,'/upload/images/upload_10f01c0a75c30d89c4bb8f59b0b417e8.jpg','蒂美悦'),(36,'/upload/images/upload_a05177c669b413d48456610b8179e26c.jpg','蒂美悦'),(37,'/upload/images/upload_d9882f176d08646d00cdf2e0584cca40.jpg','蒂美悦'),(38,'/upload/images/upload_a99346c66e2b118af0a78595ed634510.jpg','蒂美悦'),(39,'/upload/images/upload_beb036acbf308f0e5cc1490abd61850e.jpg','蒂美悦'),(40,'/upload/images/upload_7e2b159a7a3409ef437966b045b68cd6.jpg','蒂美悦'),(41,'/upload/images/upload_8dd8b59ed7ba3db41acce23580b26979.jpg','蒂美悦'),(42,'/upload/images/upload_3f99a87710263750b6f18a08bba1222a.jpg','蒂美悦'),(43,'/upload/images/upload_aa2110f3cc2dcb6248beb867ce17541e.jpg','凯撒豪庭'),(44,'/upload/images/upload_9d930f6cf6ab7160538a72ae86043d50.jpg','凯撒豪庭'),(45,'/upload/images/upload_44b115ba81f9197db9c5668a6cc72bef.jpg','凯撒豪庭'),(46,'/upload/images/upload_1ffab9c9d2e9ee2d47efd86ba4e10569.jpg','凯撒豪庭'),(47,'/upload/images/upload_74017c1188cd0ab0336aad7b126f44ee.jpg','凯撒豪庭'),(48,'/upload/images/upload_ded98771b42dd3a6e3c18e581e1d5560.jpg','凯撒豪庭'),(49,'/upload/images/upload_15d63bc3cb182cf45ebe05a3c815e5a7.jpg','凯撒豪庭'),(50,'/upload/images/upload_5820c6cfac80138b3c2486ad83da1d26.jpg','凯撒豪庭'),(51,'/upload/images/upload_612e43511b49293388d3a0c7556151b3.jpg','凯撒豪庭'),(52,'/upload/images/upload_eb5fc4a691b84c56c7557bba42a4d83b.jpg','凯撒豪庭'),(53,'/upload/images/upload_e35dcef494312439cbed62f1c54df4b6.jpg','年轮'),(54,'/upload/images/upload_a8daf81038418369bf2021f491c563c8.jpg','年轮'),(55,'/upload/images/upload_aa101f25a1bdf1dab63b300e963fe386.jpg','年轮'),(56,'/upload/images/upload_388b45e86890c39d88630b082caef688.jpg','年轮'),(57,'/upload/images/upload_b44e882c6ea739bfc1f02b67ddd9315b.jpg','年轮'),(58,'/upload/images/upload_02286b139d36c3bb6f9a02a466031f76.jpg','年轮'),(59,'/upload/images/upload_b137cd119bdfae82336695fcf4af73df.jpg','年轮'),(60,'/upload/images/upload_ac9d31e57d7b700a4e5d33e71d4785a1.jpg','年轮'),(61,'/upload/images/upload_16c2bd888c2fe8bd0a269e88a72f58e0.jpg','年轮'),(62,'/upload/images/upload_335cf35dc989f371ce0e773225143f18.jpg','年轮'),(63,'/upload/images/upload_e63066b5d18f8d7ff822eacfaff7bcea.jpg','青春城堡'),(64,'/upload/images/upload_14644a3662de5c4e878b9b1b43e786fc.jpg','青春城堡'),(65,'/upload/images/upload_35043f168a5c93fa46bd83471d8291dc.jpg','青春城堡'),(66,'/upload/images/upload_265ea53ed2d04d8771e3bf7020320cfa.jpg','青春城堡'),(67,'/upload/images/upload_d30eb26b0dab925d120ccd81a8005954.jpg','青春城堡'),(68,'/upload/images/upload_77a0aaae1f89d5659b1db31ecfa1cd16.jpg','青春城堡'),(69,'/upload/images/upload_0f9ca6d730983718f1b023738ee4c4b5.jpg','青春城堡'),(70,'/upload/images/upload_ab936a911c63b199b3e6d2e5cc39d8d7.jpg','青春城堡'),(71,'/upload/images/upload_e0c81a38825f92547fed38d59dd9914f.jpg','青春城堡'),(72,'/upload/images/upload_5da4ab2c1af499c39094c274f79fff0e.jpg','青春城堡'),(73,'/upload/images/upload_0a06f81182d12c68f647e55a859dd873.jpg','北欧悠歌'),(74,'/upload/images/upload_115e3f247f864ca97046351398793522.jpg','北欧悠歌'),(75,'/upload/images/upload_6ca7f1e5d2c1473997ddc5e820aff2a9.jpg','北欧悠歌'),(76,'/upload/images/upload_44a1d6a5f14b02730ec2ab2509bda9ed.jpg','北欧悠歌'),(77,'/upload/images/upload_c592bd46aef22436741b2a95f6daaf69.jpg','北欧悠歌'),(78,'/upload/images/upload_a660cf3ed9d8b86c31afc6e67f7a5620.jpg','北欧悠歌'),(79,'/upload/images/upload_30d6f284bc6125710d2400d73f6707e1.jpg','北欧悠歌'),(80,'/upload/images/upload_b6301c1fbc668ad4bbe09ac2ff17031a.jpg','北欧悠歌'),(81,'/upload/images/upload_7f6f0e9010146e0c998e015847f6abed.jpg','北欧悠歌'),(82,'/upload/images/upload_e125ae25b8c15c460a3fa95e1d2b9b33.jpg','北欧悠歌'),(83,'/upload/images/upload_5b3b04041c8b24fc07d4384047c105bb.jpg','彼岸阳光'),(84,'/upload/images/upload_39cf258129ae318737dc85cbdf017b5b.jpg','彼岸阳光'),(85,'/upload/images/upload_bb249298cf9d640b90bcf4fcaa549a53.jpg','彼岸阳光'),(86,'/upload/images/upload_57de1094796f702e33a83c1f9837b3cf.jpg','彼岸阳光'),(87,'/upload/images/upload_0a05e429272b9b4e8be351588420201d.jpg','彼岸阳光'),(88,'/upload/images/upload_5f8aebf29859f775ada80ddcd8c0b3d5.jpg','彼岸阳光'),(89,'/upload/images/upload_46e4f7bec8f9bc666a1bd1911707aecc.jpg','彼岸阳光'),(90,'/upload/images/upload_01a7dd7840647fefba4b4f097e362ab8.jpg','彼岸阳光');

/*Table structure for table `price` */

DROP TABLE IF EXISTS `price`;

CREATE TABLE `price` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `price` */

insert  into `price`(`id`,`price`) values (1,'0-1999'),(2,'2000-3999'),(3,'4000-5999'),(4,'6000-7999'),(5,'8000-9999'),(6,'10000以上');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `product_id` int(255) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` int(255) DEFAULT NULL,
  `product_desc` text,
  `product_spec` text,
  `category_p_id` int(255) DEFAULT NULL,
  `category_c_id` int(255) DEFAULT NULL,
  `style_id` int(255) DEFAULT NULL,
  `product_type_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `product` */

insert  into `product`(`product_id`,`product_name`,`product_price`,`product_desc`,`product_spec`,`category_p_id`,`category_c_id`,`style_id`,`product_type_id`) values (1,'蓝骑',9300,'简美风格 1.8米床 品质至上 美国进口珍稀金丝黄杨木 高档大宝油漆 做旧床板条床','内径：宽1800*长2000mm；外径：长2180*宽1920*高1560mm',1,27,7,3),(4,'Clover克罗弗',2799,'简美风格 超值推荐款 经典软硬双面两用床垫 天然乳胶环保床垫','长2000*宽1800*厚240mm',2,32,7,11),(5,'卡富亚',2199,'现代风格 真皮臻品 加厚式头层水牛真皮靠背 ','内径：宽1815*长2010mm；外径：长2460*宽1950*高1070mm',1,24,1,6),(6,'蒂美悦',6400,'现代风格 舒适黄牛真皮沙发 高弹性公仔棉真皮腰枕 带储物功能L型皮艺左转角沙发','单人位：长760mm*宽970mm*高1000mm：三人位：长2200mm（含侧柜拼组合后）*宽970mm*高1000mm；贵妃：长1800mm*宽970mm*高1000mm',4,43,1,22),(7,'凯撒豪庭',3350,'欧式风格 畅销经典款 高档水牛头层真皮床 对称式描金雕花 精致水晶拉扣床','内径：宽1815*长2010mm；外径：长2170*宽2090*高1560mm',1,24,2,6),(8,'年轮',6699,'中式风格 爆款中式床 美国进口白杨木 S型实木真皮床','内径：宽1815*长2010mm；外径：长2640*宽2050*高880mm',1,24,3,6),(9,'青春城堡',4688,'进口芬兰松 双层儿童床 全实木板条床','内径：上床：900*1900mm；下床：1200*1900mm；外径：长2526*宽1270*高1780mm',1,22,4,3),(10,'北欧悠歌',2499,'北欧风格 实木 布艺床 简约卧室家具 哥本哈根系列','内径：宽1800*长2000mm；外径：长2100*宽1870*高1030mm',1,23,5,1),(11,'彼岸阳光',1450,'地中海风格 人气爆款 栅栏式简约设计 臻选美国进口白杨木床 ','内径：宽1515*长2010mm；外径：长2140*宽1655*高1050mm',1,27,6,1);

/*Table structure for table `product_images` */

DROP TABLE IF EXISTS `product_images`;

CREATE TABLE `product_images` (
  `product_id` int(255) NOT NULL AUTO_INCREMENT,
  `product_image_good` varchar(255) DEFAULT NULL,
  `product_image_s1` varchar(255) DEFAULT NULL,
  `product_image_s2` varchar(255) DEFAULT NULL,
  `product_image_s3` varchar(255) DEFAULT NULL,
  `product_image_n1` varchar(255) DEFAULT NULL,
  `product_image_n2` varchar(255) DEFAULT NULL,
  `product_image_n3` varchar(255) DEFAULT NULL,
  `product_image_b1` varchar(255) DEFAULT NULL,
  `product_image_b2` varchar(255) DEFAULT NULL,
  `product_image_b3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `product_images` */

insert  into `product_images`(`product_id`,`product_image_good`,`product_image_s1`,`product_image_s2`,`product_image_s3`,`product_image_n1`,`product_image_n2`,`product_image_n3`,`product_image_b1`,`product_image_b2`,`product_image_b3`) values (1,'/upload/images/upload_e7497235edc4df18c4207ba6f8bf116b.jpg','/upload/images/upload_4c6f7d63007cba58b1a6bfd17bb6568d.jpg','/upload/images/upload_adf389bbd8f81b4f5c5cbbaa1f7edce5.jpg','/upload/images/upload_05082969b8227745ec8b1542de0c0ea7.jpg','/upload/images/upload_b1bddecb1b848693df4265fcaa9d31dc.jpg','/upload/images/upload_2310e8f8450791f87d2748b7ad47300a.jpg','/upload/images/upload_bf5796fa1799d0c5c4876a260b0674b3.jpg','/upload/images/upload_7371ba9bb4b37d6de5f3e71feae57c68.jpg','/upload/images/upload_5d5d5c905e12dfcd786177a577c19f74.jpg','/upload/images/upload_70057230506ceb662e4bf934fcaf2d31.jpg'),(4,'/upload/images/upload_debe104712981fef7f07fb48cf018001.jpg','/upload/images/upload_05ab45db18a62255d5a02367ad0be973.jpg','/upload/images/upload_c60597e68581f4fd14cc4d303bd0f2dd.jpg','undefined','/upload/images/upload_249a488f4b61797a0d56d06906e89f2a.jpg','/upload/images/upload_071bedc2cd134f40d007f7d4346a42cb.jpg','undefined','/upload/images/upload_ffcd3e1f6e79a710a5acf9a33d9e2878.jpg','/upload/images/upload_1b545de9fe8ab1af38b76b35984eb2c4.jpg','undefined'),(5,'/upload/images/upload_dcf72a02eb1cd0e19be1ab6b8cee230b.jpg','/upload/images/upload_66bbdf70b66456497750ee9be1ca7861.jpg','/upload/images/upload_afa0009296c7c3c35c6103b1164ef217.jpg','/upload/images/upload_0f9f6514876072edd92ab8e9a7b497a4.jpg','/upload/images/upload_9e8e9ac519e5f59d813296936f67c146.jpg','/upload/images/upload_6d0185e263d03157375f4c0aa334e6d0.jpg','/upload/images/upload_93dfae46bc1efcc7e07ed0875bd828ee.jpg','/upload/images/upload_2ba5c634f03492cd904347505e13596b.jpg','/upload/images/upload_bfbd13e2cb7342852972b9afb6df400c.jpg','/upload/images/upload_25827ac7bcc86ee6c11ad19002b50551.jpg'),(6,'/upload/images/upload_fe961a4d2d22543d900c5a6ab9cd8efe.jpg','/upload/images/upload_9f3d537430b2ba74de0b078a08756485.jpg','/upload/images/upload_9f4e5f9569663d2013d161106d0da49c.jpg','/upload/images/upload_fe2733ebdbb98f5af240e47f57ea2ac7.jpg','/upload/images/upload_2c846c22e563d563184effa4ce782ce2.jpg','/upload/images/upload_979d9915b654eb0933696c187e75db90.jpg','/upload/images/upload_252ba5c29613ff77826debf50bd79338.jpg','/upload/images/upload_b2e18ad0690b1375ece9be150be04f0e.jpg','/upload/images/upload_cc4fadc01c2f9769e45cb7df8441af4b.jpg','/upload/images/upload_1ce3da45af8c655fa262086a15b812b5.jpg'),(7,'/upload/images/upload_060e53f2152ba75b8b8c544d0ca17853.jpg','/upload/images/upload_22f0411894cc281e9eceb8ed1eac3b0f.jpg','/upload/images/upload_55e7e33c449ec283e638c8ed70e4b494.jpg','/upload/images/upload_10a9a30bed3c4e6010793f2dcd4a1798.jpg','/upload/images/upload_c29d4ae657823fc1d42b3141af982677.jpg','/upload/images/upload_c142f7170f3dae3acaadcadcd4919815.jpg','/upload/images/upload_7e826ca553a548e1f54831732e3d13b5.jpg','/upload/images/upload_196124b8cc17c2f6547de3667fa2f891.jpg','/upload/images/upload_c8c21eb9ec4073f820e6130d3a0ee0e5.jpg','/upload/images/upload_1642c166d34de0375f5031f5be867c0e.jpg'),(8,'/upload/images/upload_d8cf246fe632fbc21bb4846d568ee197.jpg','/upload/images/upload_db8a80ff324f781ef17e28ebeab2cd26.jpg','/upload/images/upload_59a9a3db5fa341b6cd69d28542bdb25c.jpg','undefined','/upload/images/upload_e751c5f3065f68d4ed5cc8faaf1bde45.jpg','/upload/images/upload_0ce3f54bb3fb1db42e9352c16e92122d.jpg','undefined','/upload/images/upload_9a782eb8b58c0592d9255fbeda344ac5.jpg','/upload/images/upload_98e741318ad6a120943530a6789ff74b.jpg','undefined'),(9,'/upload/images/upload_a4e62300cdcd5c61660a28e7c73c8e13.jpg','/upload/images/upload_ffb4a1d457e72e703c7ff07906766b42.jpg','/upload/images/upload_2645383b17b5e4d005ac0d9df8fc12fe.jpg','undefined','/upload/images/upload_684fbe8ad79c59c733a491a1167f12c4.jpg','/upload/images/upload_809e279618d260d24c16b4f27e18de4c.jpg','undefined','/upload/images/upload_6f01aa0f3d958a05aa9f12add78b9811.jpg','/upload/images/upload_bddda084077c2cf4f65eb25d265e2d9f.jpg','undefined'),(10,'/upload/images/upload_317271d0717b19505bc9b9d16a095615.jpg','/upload/images/upload_4f7f8acac32967c9bf0b758898ef2cfc.jpg','/upload/images/upload_41b5a399ea3253dfd6415c70833a6f2e.jpg','/upload/images/upload_c671c892978f98105b3ca3730ecec9cf.jpg','/upload/images/upload_1adadb9b4abc2c4bdaf307055b040d83.jpg','/upload/images/upload_7ac76b103118829528f4dd6e067022a4.jpg','/upload/images/upload_0acd171f8cc3e080fae88290b5b18d2f.jpg','/upload/images/upload_8cb8ec2cfb4a885e66ad6be4863be7f8.jpg','/upload/images/upload_a6c35efc1905c09d567f827b26e3f2cd.jpg','/upload/images/upload_870c9b2ac81964e98f18fd2ab35a69f2.jpg'),(11,'/upload/images/upload_540d969f609f4def4308b75158da76ea.jpg','/upload/images/upload_bd3333f9928b20edddae6257afc785b1.jpg','/upload/images/upload_d00d2d54b2341e15e59250f034c1238c.jpg','/upload/images/upload_150fac65e24078d057c10e87158d53a2.jpg','/upload/images/upload_07bc41abcb01dbf42d05ddc814653333.jpg','/upload/images/upload_1ea3111ec8017a5dba3d0cd371dab677.jpg','/upload/images/upload_8e3405298370dd62f6f3bc1dc72bbde6.jpg','/upload/images/upload_2927293f56fd824bce45eff8d8e4bab0.jpg','/upload/images/upload_35c9f3e9ff37982ea3f34477627111ce.jpg','/upload/images/upload_431cecd235530f6c6a9522492ea932a9.jpg');

/*Table structure for table `product_type` */

DROP TABLE IF EXISTS `product_type`;

CREATE TABLE `product_type` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `product_type` varchar(255) DEFAULT NULL,
  `category_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8;

/*Data for the table `product_type` */

insert  into `product_type`(`id`,`product_type`,`category_id`) values (1,'实木',1),(2,'板木',1),(3,'板式',1),(4,'皮艺',1),(5,'布艺',1),(6,'真皮',1),(7,'其他',1),(8,'天然乳胶',2),(9,'环保椰棕',2),(10,'海绵',2),(11,'弹簧',2),(12,'3D内胆',2),(13,'其他',2),(14,'1门',3),(15,'2门',3),(16,'3门',3),(17,'4门',3),(18,'5门',3),(19,'6门',3),(20,'其他',3),(21,'实木',4),(22,'皮艺',4),(23,'布艺',4),(24,'板木',4),(25,'红木',4),(26,'棉麻',4),(27,'其他',4),(28,'实木',5),(29,'大理石',5),(30,'不锈钢',5),(31,'皮艺',5),(32,'板式',5),(33,'板木',5),(34,'其他',5),(35,'实木',6),(36,'大理石',6),(37,'不锈钢',6),(38,'板式',6),(39,'板木',6),(40,'红木',6),(41,'其他',6),(42,'实木',7),(43,'板式',7),(44,'板木',7),(45,'桃花芯木',7),(46,'玻璃',7),(47,'不锈钢',7),(48,'大理石',7),(49,'其他',7),(50,'实木',8),(51,'桃花芯木',8),(52,'皮艺',8),(53,'布艺',8),(54,'板式',8),(55,'不锈钢',8),(56,'板木',8),(57,'其他',8),(58,'实木',9),(59,'桃花芯木',9),(60,'板式',9),(61,'大理石',9),(62,'板木',9),(63,'其他',9),(64,'实木',10),(65,'板式',10),(66,'板木',10),(67,'其他',10),(68,'实木',11),(69,'皮艺',11),(70,'布艺',11),(71,'板式',11),(72,'板木',11),(73,'钢铁',11),(74,'其他',11),(75,'实木',12),(76,'板式',12),(77,'板木',12),(78,'其他',12),(79,'实木',13),(80,'板木',13),(81,'板式',13),(82,'其他',13),(83,'4门',14),(84,'3门',14),(85,'2门',14),(86,'其他',14),(87,'实木',15),(88,'板式',15),(89,'布艺',15),(90,'其他',15),(91,'会议台',16),(92,'大班台',16),(93,'其他',16),(94,'职员椅',17),(95,'大班椅',17),(96,'会议椅',17),(97,'其他',17),(98,'布艺',18),(99,'皮艺',18),(100,'其他',18),(101,'藤',19),(102,'铝',19),(103,'实木',19),(104,'板式',19),(105,'布艺',19),(106,'金属',19),(107,'其他',19),(108,'实木',20),(109,'布艺',20),(110,'皮艺',20),(111,'板木',20),(112,'板式',20),(113,'红木',20),(114,'其他',20),(115,'藤',21),(116,'其他',21);

/*Table structure for table `shoppingcart` */

DROP TABLE IF EXISTS `shoppingcart`;

CREATE TABLE `shoppingcart` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

/*Data for the table `shoppingcart` */

insert  into `shoppingcart`(`id`,`product_name`,`user_name`) values (32,'蓝骑','123'),(33,'蓝骑','aa'),(40,'Clover克罗弗','qq'),(43,'蓝骑','qq'),(44,'Clover克罗弗','qq'),(45,'蓝骑','qq');

/*Table structure for table `style` */

DROP TABLE IF EXISTS `style`;

CREATE TABLE `style` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `style` varchar(255) DEFAULT NULL,
  `style_bigimage` varchar(255) DEFAULT NULL,
  `style_bgimage` varchar(255) DEFAULT NULL,
  `pinpai_p` varchar(255) DEFAULT NULL,
  `pinpai_c` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `style` */

insert  into `style`(`id`,`style`,`style_bigimage`,`style_bgimage`,`pinpai_p`,`pinpai_c`) values (1,'现代','/upload/images/bg_image1_1.jpg','/upload/images/bg_image1.jpg','/upload/images/p_pinpai1.jpg','/upload/images/c_pinpai1.jpg'),(2,'欧式','/upload/images/bg_image2_1.jpg','/upload/images/bg_image2.jpg','/upload/images/p_pinpai2.jpg','/upload/images/c_pinpai2.jpg'),(3,'中式','/upload/images/bg_image3_1.jpg','/upload/images/bg_image3.jpg','/upload/images/p_pinpai3.jpg','/upload/images/c_pinpai3.jpg'),(4,'儿童','/upload/images/bg_image4_1.jpg','/upload/images/bg_image4.jpg','/upload/images/p_pinpai4.jpg','/upload/images/c_pinpai4.jpg'),(5,'北欧','/upload/images/bg_image5_1.jpg','/upload/images/bg_image5.jpg','/upload/images/p_pinpai5.jpg','/upload/images/c_pinpai5.jpg'),(6,'地中海','/upload/images/bg_image6_1.jpg','/upload/images/bg_image6.jpg','/upload/images/p_pinpai6.jpg','/upload/images/c_pinpai6.jpg'),(7,'简美','/upload/images/bg_image7_1.jpg','/upload/images/bg_image7.jpg','/upload/images/p_pinpai7.jpg','/upload/images/c_pinpai7.jpg');

/*Table structure for table `success` */

DROP TABLE IF EXISTS `success`;

CREATE TABLE `success` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number` int(255) DEFAULT NULL,
  `phone` double DEFAULT NULL,
  `wuliu` varchar(255) DEFAULT NULL,
  `address` text,
  `other` text,
  `zhifu` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

/*Data for the table `success` */

insert  into `success`(`id`,`product_name`,`name`,`number`,`phone`,`wuliu`,`address`,`other`,`zhifu`,`user_name`) values (21,'蓝骑','艾迪',1,15871145629,'顺丰','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)','','支付宝','qq'),(22,'Clover克罗弗','艾迪',2,15871145629,'顺丰','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)','','支付宝','qq'),(23,'蓝骑','艾迪',2,15871145629,'顺丰','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)','','支付宝','qq'),(24,'蓝骑','艾迪',1,2147483647,'顺丰','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)','','支付宝','qq'),(25,'蒂美悦','艾迪',2,2147483647,'韵达','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)','','微信','qq'),(26,'蓝骑','艾迪',1,2147483647,'中通','湖北省武汉市洪山区 雄楚大道666号(中南财经政法大学)','','微信','qq');

/*Table structure for table `tuijian` */

DROP TABLE IF EXISTS `tuijian`;

CREATE TABLE `tuijian` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `tuijian` varchar(255) DEFAULT NULL,
  `style_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

/*Data for the table `tuijian` */

insert  into `tuijian`(`id`,`tuijian`,`style_id`) values (1,'卡富亚',1),(2,'蒂美悦',1),(3,'',1),(4,'',1),(5,'',1),(6,'',1),(7,'凯撒豪庭',2),(8,'',2),(9,'',2),(10,'',2),(11,'',2),(12,'',2),(13,'年轮',3),(14,'',3),(15,'',3),(16,'',3),(17,'',3),(18,'',3),(19,'青春城堡',4),(20,'',4),(21,'',4),(22,'',4),(23,'',4),(24,'',4),(25,'北欧悠歌',5),(26,'',5),(27,'',5),(28,'',5),(29,'',5),(30,'',5),(31,'彼岸阳光',6),(32,'',6),(33,'',6),(34,'',6),(35,'',6),(36,'',6),(37,'蓝骑',7),(38,'Clover克罗弗',7),(39,'',7),(40,'',7),(41,'',7),(42,'',7);

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `phone` double DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `user_info` */

insert  into `user_info`(`id`,`name`,`sex`,`birthday`,`phone`,`email`,`address`,`username`) values (1,'123','男','1995年1月1日',12345678910,'760811943@qq.com','福建省泉州市鲤城区古店社区金龙街道泉州师范学院','qq');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`) values (8,'qq','099b3b060154898840f0ebdfb46ec78f');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
