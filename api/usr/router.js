const express = require("express");
const controller = require("./controller");
const { login, signup, confirmation } = controller;
const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/confirm").post(confirmation);

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
