const express = require("express")
const controller = require("./controller")
const { run } = controller
const router = express.Router()

router.route("/run").post(run)

module.exports = router

/*

NodeAPI							March 4, 2024

source: router.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
