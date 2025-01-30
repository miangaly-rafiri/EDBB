// const mysql = require("mysql2/promise");
// const fs = require("fs");
// // Configuration de la base de données 

// const dbConfig =
// {    
//     host: 'localhost', 
//     user: 'root',   
//     password: '', 
//     database: 'gestionStock'  
// };

// // Fonction pour initialiser la base de données
// async function initializeDatabase() {  
//      try {      
//      const connection = await mysql.createConnection(dbConfig);      
//      const schema = fs.readFileSync("db.sql", "utf8");       
//      await connection.query(schema);       
//     console.log("Base de données initialisée avec succès !");        
//       await connection.end();   
//      } catch (error) {       
//          console.error("Erreur lors de l'initialisation de la base :", error);   
//     }
// }
         
// module.exports = { initializeDatabase }; 

const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require('path');

// Configuration de la base de données
const dbConfig = {    
    host: 'localhost', 
    user: 'root',   
    password: '', 
    database: 'gestionStock'
};

// Fonction pour initialiser la base de données
async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        
        // Créer la base de données si elle n'existe pas
        await connection.query('CREATE DATABASE IF NOT EXISTS gestionStock');
        
        // Sélectionner la base de données
        await connection.query('USE gestionStock');
        
        // Lire et exécuter le schéma
        const schemaPath = path.join(__dirname, 'db.sql');
        const schema = fs.readFileSync(schemaPath, "utf8");
        const statements = schema.split(';').filter(statement => statement.trim() !== '');

        for (const statement of statements) {
            await connection.query(statement);
        }

        console.log("Base de données initialisée avec succès !");
        await connection.end();
    } catch (error) {
        console.error("Erreur lors de l'initialisation de la base :", error);
    }
}

module.exports = { initializeDatabase };
