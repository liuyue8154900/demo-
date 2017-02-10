-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-02-10 17:47:50
-- 服务器版本： 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `BJH160811`
--

-- --------------------------------------------------------

--
-- 表的结构 `HomePage`
--

CREATE TABLE IF NOT EXISTS `HomePage` (
`id` int(50) NOT NULL COMMENT 'id标示',
  `description` text NOT NULL COMMENT '商品描述',
  `catapoty` text NOT NULL COMMENT '分类',
  `homePrice` text NOT NULL COMMENT '本站价',
  `marketPrice` text NOT NULL COMMENT '市场价',
  `brand` text NOT NULL COMMENT '品牌',
  `facade` text NOT NULL COMMENT '外观',
  `rank` text NOT NULL COMMENT '等级',
  `colgate` text NOT NULL COMMENT '净含量',
  `imgsrc` text NOT NULL COMMENT '展示图地址',
  `sold` text NOT NULL COMMENT '已售出',
  `remark` text NOT NULL COMMENT '评论'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- 转存表中的数据 `HomePage`
--

INSERT INTO `HomePage` (`id`, `description`, `catapoty`, `homePrice`, `marketPrice`, `brand`, `facade`, `rank`, `colgate`, `imgsrc`, `sold`, `remark`) VALUES
(25, '【茗淘惠】【茗淘惠】和茶趣 鸿亮饼 2015普洱茶生茶 357克和茶趣 鸿亮饼 2015普洱茶生茶 357克', '普洱茶', '180.0', '200.0', '普洱生茶', '茶饼', '一级', '357g', '645_G_1439800963388.jpg', '131', '0'),
(26, '【茗淘惠】元典茶園 正宗新会柑普茶 筒装（三颗装）', '普洱茶', '158.0', '168.0', '元典', '筒装', '一级', '三颗装', '652_G_1446172228960.jpg', '11', '0'),
(27, '【好茶联盟】岩悟 武夷山大红袍 中足火炭焙 水仙+大红袍 组合装 200g', '大红袍', '360.0', '360.0', '岩悟茶业', '盒装', '特级', '200g', '644_G_1437838474576.jpg', '2', '0'),
(28, '【好茶联盟】和茶趣 2014 冰岛正山明前春茶 普洱生茶 200g', '普洱茶', '3200.0', '3460.0', '普洱生茶', '茶饼', '特级', '200g', '642_G_1437736908587.jpg', '25', '0'),
(29, '【好茶联盟】勐库戎氏 2015本味大成（茶魂升级版）普洱生茶 500g', '普洱茶', '418.0', '418.0', '勐库戎氏', '茶饼', '特级', '500g', '641_G_1437738286754.jpg', '8', '0'),
(30, '【好茶联盟】粒粒香 碧潭飘雪 茉莉花茶 200g', '茉莉花', '48.00', '57.6', '粒粒香', '罐装', '特级', '200g', '643_G_1437978515703.jpg', '20', '0'),
(31, '【好茶联盟】宋茗 溢品·安吉白茶100g', '白茶', '270.0', '270.0', '宋茗白茶', '袋装', '特级', '100g', '639_G_1437838704027.jpg', '46', '0'),
(32, '【好茶联盟】铁良老班章 2015头春普洱茶 200g 限量抢购', '普洱茶', '2500.0', '3000.0', '铁良老班章', '茶饼', '特级', '200g', '640_G_1437838342133.jpg', '3', '0'),
(33, '【好茶联盟】方守龙福鼎白茶 2014年 荷韵· 牡丹 白茶 白牡丹 100g', '福鼎白茶', '560.0', '560.0', '方守龙', '袋装', '特级', '100g', '636_G_1437838571913.jpg', '8', '0'),
(34, '【好茶联盟】御馨 御级1000 清香铁观音礼盒装 250g', '安溪铁观音', '500.0', '600.0', '御馨茗茶', '袋装', '特级', '250g', '637_G_1437838779439.jpg', '21', '0'),
(35, '【茗淘惠】和茶趣 冰岛之韵 好茶联盟首款订制茶 200g', '普洱茶', '180.00', '216.0', '和茶趣', '茶饼', '一级', '200g', '651_G_1443148201867.jpg', '15', '0'),
(36, '【茗淘惠】御馨茗茶 韵香型铁观音 铁盒装 75g', '安溪铁观音', '98.0', '98.0', '御馨茗茶', '袋装', '一级', '75g', '646_G_1439802071810.jpg', '22', '0'),
(37, '【茗淘惠】铁良老班章 2007谷花普洱茶 200g', '普洱茶', '30000.0', '36000.0', '铁良老班章', '茶饼', '特级', '200g', '649_G_1440381324963.jpg', '0', '0'),
(38, '【茗淘惠】铁良老班章 2014古花普洱茶 200g', '普洱茶', '3000.00', '3600.0', '铁良老班章', '茶饼', '特级', '200g', '647_G_1440380577162.jpg', '0', '0'),
(39, '【茗淘惠】铁良老班章 2011头春普洱茶 200g', '普洱茶', '9000.0', '10800.0', '铁良老班章', '茶饼', '特级', '200g', '648_G_1440381165446.jpg', '0', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `HomePage`
--
ALTER TABLE `HomePage`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `HomePage`
--
ALTER TABLE `HomePage`
MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT 'id标示',AUTO_INCREMENT=40;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
