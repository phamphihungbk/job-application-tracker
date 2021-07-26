"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const index_1 = require("./src/index");
const app = express();
const server = new index_1.default(app);
const port = process.env.BACKEND_PORT ? parseInt(process.env.BACKEND_PORT, 10) : 3000;
app.listen(port, 'localhost', function () {
    console.info(`Server running on : http://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('server startup error: address already in use');
    }
    else {
        console.log(err);
    }
});
//# sourceMappingURL=server.js.map