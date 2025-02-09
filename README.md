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


## Historique des Commits : 

$$$

commit 53f7e1354c75d3f782eabcc771f93fece2ed9b07 (HEAD -> main, origin/main, origin/HEAD)
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 23:25:36 2025 +0100

    push final + README + Synhtèse

commit eeb7c6ca77d4d7e64b3b74ad4bba6b70dfec5573
Merge: 46a282b a019f8b
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 22:04:57 2025 +0100

    Merge branch 'miaV2'

commit a019f8b95cca7dcdb4c3c2cf5eb781b7f2f6c168 (origin/miaV2, miaV2)
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 22:04:42 2025 +0100

    ajout des requetes / V2 fini

commit 46a282ba5ebf32dab9093541ccca9ea786b8baaf (origin/miaV1, miaV1)
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 21:14:42 2025 +0100

    ajout des requêtes test

commit b0b6c555e7e831d074d758f2ae294b285e9678cd
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 20:45:24 2025 +0100

    erreur du nom de la db, correction

commit 18bd28c8d6c22cd19fa884c0db82f0828629f28d
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 20:42:48 2025 +0100

    changement du fichier app.js pour mettre les requêtes parametrés

commit 9dabc748844bd6db624177e19578c695d13c8260
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 20:31:29 2025 +0100

     V1 fini

commit d33ac830d58349ee3e944c567ad394c89a94741b
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 20:24:19 2025 +0100

    push changement des fichiers sql

commit 15d45c4dd88c574d3cf92cd3e6b6fecbefd6c88c
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 19:19:53 2025 +0100

    changement de fichiers pour le mettre dans le dossier db

commit f9b31b8bd84be2704050231406e705673f21a2c4
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Sun Feb 9 19:18:49 2025 +0100

    changement de fichiers pour le mettre dans le dossier db

commit 1d03b5c30971c94595a0c1145819f72b89e64a43
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Thu Jan 30 16:21:13 2025 +0100

    Version 1 qui marche

commit f40d0463df5baedaea15caa5af1c3969a2fff6a8
Author: Miangaly Rafiringa <miangalyrafi@gmail.com>
Date:   Thu Jan 30 15:54:59 2025 +0100

    push de la création de la bdd et aussi les requêtes dans le JS

commit 756ec279449b30e40001de33f1e22315dd6f584b
Author: miangaly-rafiri <150609961+miangaly-rafiri@users.noreply.github.com>
Date:   Thu Jan 30 10:43:46 2025 +0100

    Initial commit

$$$


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
