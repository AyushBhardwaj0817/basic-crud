import express from 'express';
import { connection } from './postgres/postgres.js';
import router from './view/routes.js';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connection();
