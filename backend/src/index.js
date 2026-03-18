import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à la base de données PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

/**
 * Route d'exemple : Récupère la liste des utilisateurs
 */
app.get('/', async (req, res) => {
res.send({meessage: "Bienvenue sur l'api!"});
});

app.listen(port, () => {
    console.log(`Backend API en écoute sur le port ${port}`);
});