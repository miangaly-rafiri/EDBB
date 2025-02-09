const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
const { initializeDatabase } = require("./database");

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Stock'
};

app.use(express.json());

(async () => {
    await initializeDatabase();

    const connection = await mysql.createPool(dbConfig);

    app.get('/produits', async (req, res) => {
        try {
            const query = `SELECT * FROM Produits`;
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/produits', async (req, res) => {
        try {
            const produit = req.body;
            const query = `INSERT INTO Produits (nom, description, prix) VALUES (?, ?, ?)`;
            const [results] = await connection.query(query, [produit.nom, produit.description, produit.prix]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/produits/:id', async (req, res) => {
        try {
            const produit = req.body;
            const query = `UPDATE Produits SET nom = ?, description = ?, prix = ? WHERE id = ?`;
            const [results] = await connection.query(query, [produit.nom, produit.description, produit.prix, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/produits/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Produits WHERE id = ?`;
            const [results] = await connection.query(query, [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/clients', async (req, res) => {
        try {
            const query = `SELECT * FROM Clients`;
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/clients', async (req, res) => {
        try {
            const client = req.body;
            const query = `INSERT INTO Clients (nom, email, adresse) VALUES (?, ?, ?)`;
            const [results] = await connection.query(query, [client.nom, client.email, client.adresse]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/clients/:id', async (req, res) => {
        try {
            const client = req.body;
            const query = `UPDATE Clients SET nom = ?, email = ?, adresse = ? WHERE id = ?`;
            const [results] = await connection.query(query, [client.nom, client.email, client.adresse, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/clients/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Clients WHERE id = ?`;
            const [results] = await connection.query(query, [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/commandes', async (req, res) => {
        try {
            const { start, end } = req.query;
            let query = `SELECT * FROM Commandes`;
            let queryParams = [];
            
            if (start && end) {
                query += ` WHERE date_commande BETWEEN ? AND ?`;
                queryParams.push(start, end);
            }
            
            const [results] = await connection.query(query, queryParams);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });
    

    app.post('/commandes', async (req, res) => {
        try {
            const commande = req.body;
            const query = `INSERT INTO Commandes (client_id, date_commande, statut) VALUES (?, ?, ?)`;
            const [results] = await connection.query(query, [commande.client_id, commande.date_commande, commande.statut]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/commandes/:id', async (req, res) => {
        try {
            const commande = req.body;
            const query = `UPDATE Commandes SET client_id = ?, date_commande = ?, statut = ? WHERE id = ?`;
            const [results] = await connection.query(query, [commande.client_id, commande.date_commande, commande.statut, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/commandes/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Commandes WHERE id = ?`;
            const [results] = await connection.query(query, [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/categories', async (req, res) => {
        try {
            const query = `SELECT * FROM Categories`;
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/categories', async (req, res) => {
        try {
            const categorie = req.body;
            const query = `INSERT INTO Categories (nom) VALUES (?)`;
            const [results] = await connection.query(query, [categorie.nom]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/categories/:id', async (req, res) => {
        try {
            const categorie = req.body;
            const query = `UPDATE Categories SET nom = ? WHERE id = ?`;
            const [results] = await connection.query(query, [categorie.nom, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/categories/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Categories WHERE id = ?`;
            const [results] = await connection.query(query, [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/fournisseurs', async (req, res) => {
        try {
            const query = `SELECT * FROM Fournisseurs`;
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/fournisseurs', async (req, res) => {
        try {
            const fournisseur = req.body;
            const query = `INSERT INTO Fournisseurs (nom, prenom, adresse, numero) VALUES (?, ?, ?, ?)`;
            const [results] = await connection.query(query, [fournisseur.nom, fournisseur.prenom, fournisseur.adresse, fournisseur.numero]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/fournisseurs/:id', async (req, res) => {
        try {
            const fournisseur = req.body;
            const query = `UPDATE Fournisseurs SET nom = ?, prenom = ?, adresse = ?, numero = ? WHERE id = ?`;
            const [results] = await connection.query(query, [fournisseur.nom, fournisseur.prenom, fournisseur.adresse, fournisseur.numero, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/fournisseurs/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Fournisseurs WHERE id = ?`;
            const [results] = await connection.query(query, [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/lignes_commande', async (req, res) => {
        try {
            const query = `SELECT * FROM Lignes_Commande`;
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.post('/lignes_commande', async (req, res) => {
        try {
            const ligneCommande = req.body;
            const query = `INSERT INTO Lignes_Commande (commande_id, produit_id, quantite) VALUES (?, ?, ?)`;
            const [results] = await connection.query(query, [ligneCommande.commande_id, ligneCommande.produit_id, ligneCommande.quantite]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.put('/lignes_commande/:id', async (req, res) => {
        try {
            const ligneCommande = req.body;
            const query = `UPDATE Lignes_Commande SET commande_id = ?, produit_id = ?, quantite = ? WHERE id = ?`;
            const [results] = await connection.query(query, [ligneCommande.commande_id, ligneCommande.produit_id, ligneCommande.quantite, req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.delete('/lignes_commande/:id', async (req, res) => {
        try {
            const query = `DELETE FROM Lignes_Commande WHERE id = ?`;
            const [results] = await connection.query(query, [req.params.id]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/clients/:id/commandes', async (req, res) => {
        try {
            const clientId = req.params.id;
            const query = `SELECT * FROM Commandes WHERE client_id = ?`;
            const [results] = await connection.query(query, [clientId]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/produits/:id/commandes', async (req, res) => {
        try {
            const productId = req.params.id;
            const query = `
                SELECT DISTINCT c.* 
                FROM Commandes c
                JOIN Lignes_Commande lc ON lc.commande_id = c.id
                WHERE lc.produit_id = ?
            `;
            const [results] = await connection.query(query, [productId]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/commandes/recherche', async (req, res) => {
        try {
            const { client_id, start, end, statut, produit_id } = req.query;
            
            let query = `SELECT * FROM Commandes c JOIN Lignes_Commande lc ON lc.commande_id = c.id WHERE 1=1`;
            let queryParams = [];

            if (client_id) {
                query += ` AND c.client_id = ?`;
                queryParams.push(client_id);
            }
            if (start && end) {
                query += ` AND c.date_commande BETWEEN ? AND ?`;
                queryParams.push(start, end);
            }
            if (statut) {
                query += ` AND c.statut = ?`;
                queryParams.push(statut);
            }
            if (produit_id) {
                query += ` AND lc.produit_id = ?`;
                queryParams.push(produit_id);
            }

            const [results] = await connection.query(query, queryParams);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/stats/produits-les-plus-vendus', async (req, res) => {
        try {
            const query = `
                SELECT p.nom, SUM(lc.quantite) AS total_vendu
                FROM Produits p
                JOIN Lignes_Commande lc ON lc.produit_id = p.id
                GROUP BY p.nom
                ORDER BY total_vendu DESC
            `;
            const [results] = await connection.query(query);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/stats/total-ventes', async (req, res) => {
        try {
            const { start, end } = req.query;
            const query = `
                SELECT SUM(lc.quantite * p.prix) AS total_ventes
                FROM Lignes_Commande lc
                JOIN Produits p ON lc.produit_id = p.id
                JOIN Commandes c ON lc.commande_id = c.id
                WHERE c.date_commande BETWEEN ? AND ?
            `;
            const [results] = await connection.query(query, [start, end]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.get('/produits/stock-faible', async (req, res) => {
        try {
            const { seuil } = req.query;
            const query = `SELECT * FROM Produits WHERE stock < ?`;
            const [results] = await connection.query(query, [seuil]);
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})();