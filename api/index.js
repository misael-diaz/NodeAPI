const express = require("express")
const lmp = require("./lmp/router")
const sys = require("./sys/router")
const usr = require("./usr/router")
const router = express.Router()

router.use("/lmp", lmp)
router.use("/sys", sys)
router.use("/usr", usr)

module.exports = router

/*

NodeAPI							March 4, 2024

source: index.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
