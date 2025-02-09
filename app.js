const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
const { initializeDatabase } = require("./database");

// Configuration de la connexion MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestionStock'
};

app.use(express.json());

(async () => {
    await initializeDatabase();

    // Création de la connexion à la base de données
    const connection = await mysql.createPool(dbConfig);

    // CRUD pour Produits (vulnérable)
    app.get('/produits', async (req, res) => {
        try {
            const query = `SELECT * FROM Produits`; // Vulnérable, sans paramètres
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/produits', async (req, res) => {
        try {
            const produit = req.body;
            const query = `INSERT INTO Produits (nom, description, prix) VALUES ('${produit.nom}', '${produit.description}', ${produit.prix})`; // Vulnérable   
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/produits/:id', async (req, res) => {
        try {
            const produit = req.body;
            const query = `UPDATE Produits SET nom = '${produit.nom}', description = '${produit.description}', prix = ${produit.prix} WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/produits/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Produits WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Clients (vulnérable)
    app.get('/clients', async (req, res) => {
        try {
            const query = `SELECT * FROM Clients`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/clients', async (req, res) => {
        try {
            const client = req.body;
            const query = `INSERT INTO Clients (nom, email, adresse) VALUES ('${client.nom}', '${client.email}', '${client.adresse}')`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/clients/:id', async (req, res) => {
        try {
            const client = req.body;
            const query = `UPDATE Clients SET nom = '${client.nom}', email = '${client.email}', adresse = '${client.adresse}' WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/clients/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Clients WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Commandes (vulnérable)
    app.get('/commandes', async (req, res) => {
        try {
            const query = `SELECT * FROM Commandes`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/commandes', async (req, res) => {
        try {
            const commande = req.body;
            const query = `INSERT INTO Commandes (client_id, produit_id, quantite) VALUES (${commande.client_id}, ${commande.produit_id}, ${commande.quantite})`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/commandes/:id', async (req, res) => {
        try {
            const commande = req.body;
            const query = `UPDATE Commandes SET client_id = ${commande.client_id}, produit_id = ${commande.produit_id}, quantite = ${commande.quantite} WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/commandes/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Commandes WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Categories (vulnérable)
    app.get('/categories', async (req, res) => {
        try {
            const query = `SELECT * FROM Categories`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/categories', async (req, res) => {
        try {
            const categorie = req.body;
            const query = `INSERT INTO Categories (nom) VALUES ('${categorie.nom}')`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/categories/:id', async (req, res) => {
        try {
            const categorie = req.body;
            const query = `UPDATE Categories SET nom = '${categorie.nom}' WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/categories/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Categories WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Fournisseurs (vulnérable)
    app.get('/fournisseurs', async (req, res) => {
        try {
            const query = `SELECT * FROM Fournisseurs`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/fournisseurs', async (req, res) => {
        try {
            const fournisseur = req.body;
            const query = `INSERT INTO Fournisseurs (nom, contact) VALUES ('${fournisseur.nom}', '${fournisseur.contact}')`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/fournisseurs/:id', async (req, res) => {
        try {
            const fournisseur = req.body;
            const query = `UPDATE Fournisseurs SET nom = '${fournisseur.nom}', contact = '${fournisseur.contact}' WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/fournisseurs/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Fournisseurs WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Lignes_Commande (vulnérable)
    app.get('/lignes_commande', async (req, res) => {
        try {
            const query = `SELECT * FROM Lignes_Commande`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/lignes_commande', async (req, res) => {
        try {
            const ligneCommande = req.body;
            const query = `INSERT INTO Lignes_Commande (commande_id, produit_id, quantite) VALUES (${ligneCommande.commande_id}, ${ligneCommande.produit_id}, ${ligneCommande.quantite})`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/lignes_commande/:id', async (req, res) => {
        try {
            const ligneCommande = req.body;
            const query = `UPDATE Lignes_Commande SET commande_id = ${ligneCommande.commande_id}, produit_id = ${ligneCommande.produit_id}, quantite = ${ligneCommande.quantite} WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/lignes_commande/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Lignes_Commande WHERE id = ${req.params.id}`; // Vulnérable
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})();
