# EDBB
Exploitation de la base de donnée

 # Gestion de Stock

## Description

L'application "Gestion de Stock" est une API RESTful qui permet de gérer les informations relatives aux produits, clients, commandes, catégories, fournisseurs et lignes de commande. Elle permet de réaliser des opérations CRUD (Create, Read, Update, Delete) sur les différentes ressources de la base de données. 

L'architecture de la base de données a été modulée pour permettre une gestion flexible et évolutive des stocks. La base de données est conçue autour de relations entre plusieurs tables (produits, commandes, clients, etc.), ce qui permet d'organiser efficacement les informations et de garantir l'intégrité des données tout en optimisant les requêtes et les performances de l'application.

## Installation

### Prérequis

- Node.js
- MySQL 

### Étapes d'installation
1. **Clonez le repository**

    ```bash
    git clone https://github.com/miangaly-rafiri/EDBB.git
    ```

2. **Accédez au répertoire du projet**

    ```bash
    cd EDBB
    ```

3. **Installez les dépendances**

    ```bash
    npm install
    ```

4. **Créez la base de données dans MySQL**

    Utilisez MySQL Workbench ou la ligne de commande pour créer une base de données `Stock` :

    ```sql
    CREATE DATABASE Stock;
    ```

5. **Configurer la connexion à la base de données**

    Assurez-vous que les informations de connexion dans `dbConfig` (fichier `app.js`) sont correctes :
    
    ```javascript
    const dbConfig = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Stock'
    };
    ```

6. **Lancez le serveur**

    ```bash
    node app.js
    ```
    Cela lancera le serveur sur `http://localhost:3000`.

7. **Testez les endpoints**

    Vous pouvez maintenant interagir avec l'API en utilisant des outils comme [Postman] ou [Insomnia].


## Historique des Commits

### V1 → Audit → V2

#### V1 - Initial Commit

- Mise en place du projet 
- Création des routes de base pour gérer les produits, clients, commandes, catégories, fournisseurs, et lignes de commande.
- Connexion à la base de données MySQL** : Configuration de la connexion à une base de données MySQL locale (`Stock`) et initialisation de la structure de la base de données avec des requêtes de récupération des données de chaque table.


#### Audit - Sécurisation des requêtes SQL

- Mise en place de requêtes SQL paramétrées pour éviter les attaques par injection SQL.
- Remplacement des requêtes SQL par des requêtes paramétrées dans tous les endpoints (produits, clients, commandes, etc.).

#### V2 - Refactorisation du Code

- Refactorisation du code pour centraliser la logique de gestion de la base de données dans un fichier dédié (`database.js`).
- Amélioration de la gestion des connexions à la base de données avec un pool de connexions.

## Endpoints

- **GET** `/produits` - Récupère la liste des produits.
- **POST** `/produits` - Crée un nouveau produit.
- **PUT** `/produits/:id` - Met à jour un produit existant.
- **DELETE** `/produits/:id` - Supprime un produit.

- **GET** `/clients` - Récupère la liste des clients.
- **POST** `/clients` - Crée un nouveau client.
- **PUT** `/clients/:id` - Met à jour un client existant.
- **DELETE** `/clients/:id` - Supprime un client.

- **GET** `/commandes` - Récupère la liste des commandes.
- **POST** `/commandes` - Crée une nouvelle commande.
- **PUT** `/commandes/:id` - Met à jour une commande existante.
- **DELETE** `/commandes/:id` - Supprime une commande.

- **GET** `/categories` - Récupère la liste des catégories.
- **POST** `/categories` - Crée une nouvelle catégorie.
- **PUT** `/categories/:id` - Met à jour une catégorie existante.
- **DELETE** `/categories/:id` - Supprime une catégorie.

- **GET** `/fournisseurs` - Récupère la liste des fournisseurs.
- **POST** `/fournisseurs` - Crée un nouveau fournisseur.
- **PUT** `/fournisseurs/:id` - Met à jour un fournisseur existant.
- **DELETE** `/fournisseurs/:id` - Supprime un fournisseur.

- **GET** `/lignes_commande` - Récupère la liste des lignes de commande.
- **POST** `/lignes_commande` - Crée une nouvelle ligne de commande.
- **PUT** `/lignes_commande/:id` - Met à jour une ligne de commande existante.
- **DELETE** `/lignes_commande/:id` - Supprime une ligne de commande.

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express.js** : Framework web pour Node.js.
- **MySQL** : Base de données relationnelle.
- **mysql2/promise** : Module pour interagir avec MySQL de manière asynchrone.

## Contributeurs
- [RAFIRINGA Evoeke Miangaly](https://github.com/miangaly-rafiri/EDBB)
