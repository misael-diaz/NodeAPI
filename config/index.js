const dotenv = require("dotenv");
dotenv.config();

const config = {
	http: {
		host: process.env.HTTP_HOST || "0.0.0.0",
		port: process.env.HTTP_PORT || 8080
	},
	jwt: {
		token: {
			secretKey: process.env.JWT_SECRET_KEY,
			headerKey: process.env.JWT_HEADER_KEY
		}
	},
	db: {
		connectionString: process.env.DB_CONNECTION_STRING
	},
	mail: {
		host: process.env.MAIL_SMTP_HOST,
		port: process.env.MAIL_SMTP_PORT,
		service: process.env.MAIL_SERVICE,
		recipient: process.env.MAIL_RECIPIENT,
		username: process.env.MAIL_AUTH_USERNAME,
		password: process.env.MAIL_AUTH_PASSWORD
	}
};

module.exports = config;

/*

NodeAPI							February 17, 2023

source: config/index.js
author: @misael-diaz

Copyright (c) 2023 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
