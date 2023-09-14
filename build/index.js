"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.env' });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./src/routes/users"));
const db_1 = __importDefault(require("./connections/db"));
const app = (0, express_1.default)();
var corOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    setHeaders: function (res, path, stat) {
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    }
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corOptions));
app.use(express_1.default.urlencoded({ extended: true }));
app.route('/').get((req, res) => {
    return res.status(200).send({
        message: "backend_logic API"
    });
});
app.use('/api', users_1.default);
app.listen(8000, () => {
    console.log(`listening on port 8000`);
    (0, db_1.default)();
});
