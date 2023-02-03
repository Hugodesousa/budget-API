"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { GenericError } from './middlewares/GenericError';
// import routes from './Routes/Routes';
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(routes);
// app.use(GenericError);
exports.default = app;
