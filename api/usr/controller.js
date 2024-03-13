const { isEmptyObj } = require("../middleware/validator");
const { sendMail } = require("../../api/services/mailer");

const signup = async (req, res) => {

	console.log(req.body);
	if (isEmptyObj(req.body)) {
		const msg = 'signup: requires request body';
		res.status(400).json({ message: msg, data: '' });
		return;
	}

	const { firstname, lastname, username, email, password } = req.body;
	console.log(`signup: sending mail to ${email}`);
	const info = await sendMail(email);

	const msg = 'on /api/usr/signup route';
	res.status(200).json({ message: msg, data: info });
}

module.exports = { signup };

/*

NodeAPI							March 12, 2024

source: api/user/controller.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
