CREATE DATABASE IF NOT EXISTS gestionStock;
USE gestionStock;

CREATE TABLE Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255),
    coordonnees VARCHAR(255)
);

CREATE TABLE Commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    date_commande DATE NOT NULL,
    FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL,
    quantite_en_stock INT NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categories(id) ON DELETE SET NULL
);

CREATE TABLE Fournisseurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255),
    coordonnees VARCHAR(255)
);

CREATE TABLE Lignes_Commande (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT NOT NULL,
    produit_id INT NOT NULL,
    quantite INT NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES Commandes(id) ON DELETE CASCADE,
    FOREIGN KEY (produit_id) REFERENCES Produits(id) ON DELETE CASCADE
);
