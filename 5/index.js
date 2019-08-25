"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Typing everything 🔥
var http_1 = __importDefault(require("http"));
var handleRequest = function (req, res) {
    console.log('🔥', req.method);
    res.write('Hello World 🔥');
    res.end();
};
http_1.default.createServer(handleRequest).listen(3000);
