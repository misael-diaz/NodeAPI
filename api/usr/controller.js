const { isEmptyObj } = require("../middleware/validator");
const { sendMail } = require("../../api/services/mailer");

const login = (req, res) => {

	console.log(req.body);
	if (isEmptyObj(req.body)) {
		const msg = 'login: requires request body';
		res.status(400).json({ message: msg, data: '' });
		return;
	}

	const credentials = req.body;
	const { email, password } = credentials;

	const msg = 'on /api/usr/login route';
	res.status(200).json({ message: msg, data: credentials });
};

const signup = async (req, res) => {

	console.log(req.body);
	if (isEmptyObj(req.body)) {
		const msg = 'signup: requires request body';
		res.status(400).json({ message: msg, data: '' });
		return;
	}

	const { firstname, lastname, username, email, password, code } = req.body;
	console.log(`signup: sending mail to ${email}`);
	const info = await sendMail(email, code);

	const msg = 'on /api/usr/signup route';
	res.status(200).json({ message: msg, data: info });
}

const confirmation = (req, res) => {

	if (isEmptyObj(req.body)) {
		const msg = 'confirm: requires request body';
		res.status(400).json({ message: msg, data: '' });
		return;
	}

	const credentials = req.body;
	const { firstname, lastname, username, email, password, code } = credentials;
	console.log(credentials);

	const msg = 'on /api/usr/confirm route';
	res.status(200).json({ message: msg, data: credentials });
};

module.exports = { login, signup, confirmation };

/*

NodeAPI							March 12, 2024

source: api/user/controller.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
