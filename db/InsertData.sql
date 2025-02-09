INSERT INTO Produits (nom, prix_unitaire, quantite_en_stock) VALUES 
('Maquette C', 20.00, 100),
('Maquette Z', 15.00, 200);

INSERT INTO Categories (nom) VALUES
('Avions Civils'),
('Avions Militaires');

INSERT INTO Fournisseurs (nom, adresse, coordonnees) VALUES
('Fournisseur 1', 'Adresse 1', 'Coordonnees 1'),
('Fournisseur 2', 'Adresse 2', 'Coordonnees 2');

INSERT INTO Clients (nom, adresse, coordonnees) VALUES
('Client 1', 'Adresse 1', 'Coordonnees 1'),
('Client 2', 'Adresse 2', 'Coordonnees 2');

INSERT INTO Commandes (client_id, date_commande) VALUES 
(1, '2024-05-01'),
(2, '2025-09-12');

INSERT INTO Lignes_de_Commande (commande_id, produit_id, quantite, prix_unitaire) VALUES 
(1, 1, 2, 10.00),
(2, 2, 3, 15.00);
