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

    // CRUD pour Produits
    app.get('/produits', async (req, res) => {
        try {
            const [results] = await connection.query('SELECT * FROM Produits');
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/produits', async (req, res) => {
        try {
            const produit = req.body;
            const [results] = await connection.query('INSERT INTO Produits SET ?', produit);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/produits/:id', async (req, res) => {
        try {
            const produit = req.body;
            const [results] = await connection.query('UPDATE Produits SET ? WHERE id = ?', [produit, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/produits/:id', async (req, res) => {
        try {
            const [results] = await connection.query('DELETE FROM Produits WHERE id = ?', [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Clients
    app.get('/clients', async (req, res) => {
        try {
            const [results] = await connection.query('SELECT * FROM Clients');
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/clients', async (req, res) => {
        try {
            const client = req.body;
            const [results] = await connection.query('INSERT INTO Clients SET ?', client);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/clients/:id', async (req, res) => {
        try {
            const client = req.body;
            const [results] = await connection.query('UPDATE Clients SET ? WHERE id = ?', [client, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/clients/:id', async (req, res) => {
        try {
            const [results] = await connection.query('DELETE FROM Clients WHERE id = ?', [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Commandes
    app.get('/commandes', async (req, res) => {
        try {
            const [results] = await connection.query('SELECT * FROM Commandes');
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/commandes', async (req, res) => {
        try {
            const commande = req.body;
            const [results] = await connection.query('INSERT INTO Commandes SET ?', commande);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/commandes/:id', async (req, res) => {
        try {
            const commande = req.body;
            const [results] = await connection.query('UPDATE Commandes SET ? WHERE id = ?', [commande, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/commandes/:id', async (req, res) => {
        try {
            const [results] = await connection.query('DELETE FROM Commandes WHERE id = ?', [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Categories
    app.get('/categories', async (req, res) => {
        try {
            const [results] = await connection.query('SELECT * FROM Categories');
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/categories', async (req, res) => {
        try {
            const categorie = req.body;
            const [results] = await connection.query('INSERT INTO Categories SET ?', categorie);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/categories/:id', async (req, res) => {
        try {
            const categorie = req.body;
            const [results] = await connection.query('UPDATE Categories SET ? WHERE id = ?', [categorie, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/categories/:id', async (req, res) => {
        try {
            const [results] = await connection.query('DELETE FROM Categories WHERE id = ?', [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Fournisseurs
    app.get('/fournisseurs', async (req, res) => {
        try {
            const [results] = await connection.query('SELECT * FROM Fournisseurs');
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/fournisseurs', async (req, res) => {
        try {
            const fournisseur = req.body;
            const [results] = await connection.query('INSERT INTO Fournisseurs SET ?', fournisseur);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/fournisseurs/:id', async (req, res) => {
        try {
            const fournisseur = req.body;
            const [results] = await connection.query('UPDATE Fournisseurs SET ? WHERE id = ?', [fournisseur, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/fournisseurs/:id', async (req, res) => {
        try {
            const [results] = await connection.query('DELETE FROM Fournisseurs WHERE id = ?', [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // CRUD pour Lignes_Commande
    app.get('/lignes_commande', async (req, res) => {
        try {
            const [results] = await connection.query('SELECT * FROM Lignes_Commande');
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/lignes_commande', async (req, res) => {
        try {
            const ligneCommande = req.body;
            const [results] = await connection.query('INSERT INTO Lignes_Commande SET ?', ligneCommande);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/lignes_commande/:id', async (req, res) => {
        try {
            const ligneCommande = req.body;
            const [results] = await connection.query('UPDATE Lignes_Commande SET ? WHERE id = ?', [ligneCommande, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/lignes_commande/:id', async (req, res) => {
        try {
            const [results] = await connection.query('DELETE FROM Lignes_Commande WHERE id = ?', [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})();
