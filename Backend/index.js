import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { StatusCodes } from http-status-codes;

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({
        message: 'Hello World ✅'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server running on port: ' + process.env.PORT);
});
