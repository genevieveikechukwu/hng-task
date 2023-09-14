import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express, { Response } from 'express';
import cors from 'cors';
import userRoutes from './src/routes/users';
import connect from './connections/db';

const app = express();

var corOptions = {
    origin: '*',
    methods: [ 'GET', 'POST', 'PUT', 'DELETE', 'PATCH' ],
    allowedHeaders: [ 'Content-Type', 'Authorization' ],
    credentials: true,
    setHeaders: function (res: Response, path: string, stat: any) {
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    }

};

app.use(express.json());
app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
app.route('/').get((req, res) => {
    return res.status(200).send({
        message: "backend_logic API"
    });
});
app.use('/api', userRoutes)

app.listen(8000, () => {
    console.log(`listening on port 8000`);
    connect()
});