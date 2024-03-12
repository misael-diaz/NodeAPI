const nodemailer = require('nodemailer');
const { mail } = require('../../config')

const ethereal = () => {

	return new Promise((resolve, reject) => {

		nodemailer.createTestAccount((err, acc) => {

			if (err) {
				reject('mailer: failed to create test account');
			}

			console.log('mailer: creadentials obtained');

			const transporter = nodemailer.createTransport({
				host: acc.smtp.host,
				port: acc.smtp.port,
				secure: acc.smtp.secure,
				auth: {
					user: acc.user,
					pass: acc.pass
				}
			});

			resolve(transporter);

		});

	});
}

const transport = () => {

	const transporter = nodemailer.createTransport({
		host: mail.host,
		port: mail.port,
		service: mail.service,
		auth: {
			user: mail.username,
			pass: mail.password
		}
	});

	return new Promise((resolve, reject) => {
		resolve(transporter)
	});
}

const welcome = (recipient, link) => {

	const msg = {
		from: mail.username,
		to: recipient,
		subject: `Welcome to NodeAPI`,
		text: `Welcome to NodeAPI use this link ${link} to confirm your email`
	}

	return msg;
}

const etherealMail = async (recipient) => {

	const msg = {
		from: `NodeAPI Mailer mailer@mailer.com`,
		to: recipient,
		subject: `test`,
		text: `Welcome to NodeAPI`,
	};

	const transporter = await ethereal();
	return new Promise((resolve, reject) => {

		transporter.sendMail(msg, (err, info) => {
			if (err) {
				reject(err);
			}
			resolve(info);
		});
	});
}

const sendMail = async (recipient) => {

	const info = await etherealMail(recipient);
	const hyperlink = nodemailer.getTestMessageUrl(info);
	const msg = welcome(recipient, hyperlink);
	const transporter = await transport();
	return new Promise((resolve, reject) => {

		transporter.sendMail(msg, (err, info) => {
			if (err) {
				reject(err);
			}
			console.log(`mailer: successful send to ${recipient}`);
			resolve(info);
		});
	});
}

module.exports = { sendMail };

/*

NodeAPI							March 11, 2024

source: api/services/mailer.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
