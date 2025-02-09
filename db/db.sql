DROP DATABASE IF EXISTS Stock;

CREATE DATABASE Stock;

USE Stock;

CREATE TABLE `Categories` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL UNIQUE 
);

CREATE TABLE `Fournisseurs` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `adresse` VARCHAR(100) NOT NULL,
  `numero` VARCHAR(100) NOT NULL
);

CREATE TABLE `Produits` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prix_unitaire` FLOAT NOT NULL,
  `quantite_stock` INT NOT NULL,
  `categorie_id` INT,
  `fournisseur_id` INT
);

CREATE TABLE `Clients` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `adresse` VARCHAR(100) NOT NULL,
  `numero` VARCHAR(100) NOT NULL
);

CREATE TABLE `Commandes` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `client_id` INT NOT NULL,
  `date_commande` DATETIME NOT NULL,
  `statut` ENUM("En cours", "Livrée") NOT NULL
);

CREATE TABLE `Lignes_Commande` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `commande_id` INT NOT NULL,
  `produit_id` INT NOT NULL,
  `quantite` INT NOT NULL,
  `prix_unitaire_applique` FLOAT NOT NULL
);

ALTER TABLE `Produits` 
  ADD FOREIGN KEY (`categorie_id`) REFERENCES `Categories` (`id`) ON DELETE SET NULL;

ALTER TABLE `Produits` 
  ADD FOREIGN KEY (`fournisseur_id`) REFERENCES `Fournisseurs` (`id`) ON DELETE CASCADE;

ALTER TABLE `Commandes` 
  ADD FOREIGN KEY (`client_id`) REFERENCES `Clients` (`id`) ON DELETE CASCADE;

ALTER TABLE `Lignes_Commande` 
  ADD FOREIGN KEY (`commande_id`) REFERENCES `Commandes` (`id`) ON DELETE CASCADE;

ALTER TABLE `Lignes_Commande` 
  ADD FOREIGN KEY (`produit_id`) REFERENCES `Produits` (`id`) ON DELETE CASCADE;
