const express = require("express");
const controller = require("./controller");
const { signup } = controller;
const router = express.Router();

router.route("/signup").post(signup);

module.exports = router;

/*

NodeAPI							March 12, 2024

source: api/user/router.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/