"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    console.log('* Path', req.path);
    res.json({ message: 'Hello Typescript 🔥' });
});
app.listen(3000, function () { return console.log('Server running'); });
