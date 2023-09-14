"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHandler = exports.updateHandler = exports.getHandler = exports.createHandler = void 0;
const user_1 = __importDefault(require("../models/user"));
const createHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName } = req.body;
        if (!fullName)
            return res.status(400).send({ message: "fullName is required!!" });
        const user = yield user_1.default.create(Object.assign({}, req.body));
        return res.status(200).send({ message: "Successfully created!!", data: user });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.createHandler = createHandler;
const getHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById(id);
        if (!user)
            return res.status(404).send({ message: "user with id does not exist" });
        return res.status(200).send({ message: "Successfull!!", data: user });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.getHandler = getHandler;
const updateHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { fullName } = req.body;
        const user = yield user_1.default.findById(id);
        if (!user || !fullName)
            return res.status(404).send({ message: "Please provide a correct Id or fullName" });
        yield user.updateOne({ fullName });
        return res.status(200).send({ message: "Successfully updated!!" });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.updateHandler = updateHandler;
const deleteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById(id);
        if (!user)
            return res.status(404).send({ message: "user with id does not exist" });
        yield user.deleteOne();
        return res.status(200).send({ message: "Successfully deleted!!" });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.deleteHandler = deleteHandler;
