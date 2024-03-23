const https = require("https");
const fs = require("fs/promises");
const express = require("express")
const cors = require("cors")
const api = require("../api")
const port = 8080
const app = express()

app.use(cors())
app.use(express.text())
app.use(express.json())

app.use("/api", api)

app.get("/", (req, res) => {
	res.status(200).json("NodeAPI Executing")
})

app.get("*", (req, res) => {
	res.status(404).json("not found error")
})

const listen = async () => {
	const key = await fs.readFile(`${__dirname}/../certs/selfsigned.key`);
	const cert = await fs.readFile(`${__dirname}/../certs/selfsigned.crt`);
	const opt = { key, cert };
	const server = https.createServer(opt, app);
	await server.listen(port);
	console.log(`app listening on port ${port}`)
}

module.exports = { listen }

/*

NodeAPI							March 3, 2024

source: index.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
