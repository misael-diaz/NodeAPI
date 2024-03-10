const util = require("node:util")
const proc = require("node:child_process")
const exec = util.promisify(proc.exec)

const { isEmptyObj } = require("../middleware/validator")
const { hostname } = require("../services/system")

const run = async (req, res) => {

	if (isEmptyObj(req.body)) {
		const response = { message: 'empty request-body error', data: '' }
		res.status(400).json(response)
		return
	}

	const cmd = req.body

	if (hostname(cmd)) {
		const { stdout, stderr } = await exec(cmd)
		const msg = `system command ${cmd}`
		const response = { message: msg, data: stdout }
		res.status(200).json(response)
		console.log(response)
		return
	}

	const response = { message: `unsupported command ${cmd}`, data: '' }
	res.status(400).json(response)
}

module.exports = { run }

/*

NodeAPI							March 4, 2024

source: api/sys/controller.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
