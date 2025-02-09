INSERT INTO Categories (nom) VALUES
('Avions en Papier'),
('Accessoires de Bureau'),
('Maquettes');

INSERT INTO Fournisseurs (nom, prenom, adresse, numero) VALUES
('Fournisseur Maquettes', 'Jean', '123 Rue, Paris', '01654'),
('Papeterie du Monde', 'Pierre', '456 Avenue, Lyon', '01478'),
('Outils Précis', 'Claude', '789 Boulevard, Marseille', '01784');

INSERT INTO Produits (nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id) VALUES
('Maquette Avion A380', 15.99, 120, 1, 1),
('Maquette Avion Boeing 747', 19.99, 80, 1, 2),
('Papier Spécial Avion', 5.50, 300, 2, 2),
('Ciseaux de Précision', 7.99, 50, 2, 3),
('Colle pour Maquettes', 4.99, 150, 3, 1),
('Avion Papier Vitesse Supersonique', 12.99, 60, 1, 3);

INSERT INTO Clients (nom, prenom, adresse, numero) VALUES
('Pierre', 'Dupont', '1 Rue, 75008 Paris', '01'),
('Miangaly', 'Rajaona', '2 Avenue , 75010 Paris', '0987'),
('Agnes', 'Leclerc', '15 Boulevard , 78390 Fontenay', '0147');

INSERT INTO Commandes (client_id, date_commande, statut) VALUES
(1, '2025-02-01 10:00:00', 'En cours'),
(2, '2025-02-02 14:30:00', 'Livrée'),
(3, '2025-02-03 09:00:00', 'En cours');

INSERT INTO Lignes_Commande (commande_id, produit_id, quantite, prix_unitaire_applique) VALUES
(1, 1, 2, 15.99),
(1, 3, 5, 5.50),
(2, 2, 1, 19.99),
(2, 4, 2, 7.99),
(3, 6, 1, 12.99);
