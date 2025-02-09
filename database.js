const mysql = require("mysql2/promise");
const fs = require("fs");

const dbConfig = {    
    host: 'localhost', 
    user: 'root',   
    password: '', 
    multipleStatements: true
};

const executeDB = async (connection, filePath) => {
    const sql = fs.readFileSync(filePath, 'utf8');
    await connection.query(sql);
    console.log(`${filePath} exécuté avec succès`);
};

async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connexion à MySQL réussie');

        await executeDB(connection, './db/db.sql');

        await connection.changeUser({ database: "Stock" });

        await executeDB(connection, './db/insertData.sql');

        console.log('Base de données initialisée avec succès');
        return connection;
    } catch (err) {
        console.error('Erreur lors de l\'initialisation de la base de données :', err);
        process.exit(1);
    }
}

module.exports = { initializeDatabase };
