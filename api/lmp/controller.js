const { isEmptyObj } = require("../middleware/validator")

const run = (req, res) => {

	if (!isEmptyObj(req.body)) {
		console.log(`body: ${JSON.stringify(req.body)}`)
	} else {
		console.log(`empty-body: ${JSON.stringify(req.body)}`)
	}

	const msg = "on /api/lmp/run route"
	res.status(200).json({ message: msg, input: req.body })
	console.log(msg)
}

module.exports = { run }

/*

NodeAPI							March 4, 2024

source: controller.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
