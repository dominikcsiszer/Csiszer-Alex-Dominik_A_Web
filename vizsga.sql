-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Máj 31. 13:25
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `vizsga`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kategoria`
--

CREATE TABLE `kategoria` (
  `id` int(11) NOT NULL,
  `kategorianev` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- A tábla adatainak kiíratása `kategoria`
--

INSERT INTO `kategoria` (`id`, `kategorianev`, `createdAt`, `updatedAt`) VALUES
(1, 'Programozás', '2023-05-31 11:20:48', '2023-05-31 11:20:48'),
(2, 'Természetvédelem', '2023-05-31 11:20:48', '2023-05-31 11:20:48');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `kerdes` varchar(255) DEFAULT NULL,
  `v1` varchar(255) DEFAULT NULL,
  `v2` varchar(255) DEFAULT NULL,
  `v3` varchar(255) DEFAULT NULL,
  `v4` varchar(255) DEFAULT NULL,
  `helyes` varchar(255) DEFAULT 'v1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `kategoriumId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- A tábla adatainak kiíratása `tests`
--

INSERT INTO `tests` (`id`, `kerdes`, `v1`, `v2`, `v3`, `v4`, `helyes`, `createdAt`, `updatedAt`, `kategoriumId`) VALUES
(1, 'Mit jelent a HTML?', 'HyperText Markup Language', 'HyperText Make Language', 'Hyper Markup Language', 'HyperText Markup Langu', 'v1', '2023-05-31 11:20:48', '2023-05-31 11:20:48', 1),
(2, 'Mit jelent a CSS?', 'Cascador Style Sheets', 'Cascading Style Sheep', 'Nincs', 'Cascading Style Sheets', 'v4', '2023-05-31 11:20:48', '2023-05-31 11:20:48', 1),
(3, 'A papírt milyen szin? szelektív kukába gy?jtjük?', 'Kék', 'Piros', 'Sárga', 'Zöld', 'v1', '2023-05-31 11:20:48', '2023-05-31 11:20:48', 2),
(4, 'Melyek komposztálhatóak?', 'Nagy ágak', 'Ruhanem?', 'Zöldség - gyümölcs maradék, tojáshéj', 'Fém, m?anyag', 'v3', '2023-05-31 11:20:48', '2023-05-31 11:20:48', 2);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kategoria`
--
ALTER TABLE `kategoria`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategoriumId` (`kategoriumId`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`kategoriumId`) REFERENCES `kategoria` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
