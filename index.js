const { listen } = require("./http")
const { sendMail } = require("./api/services/mailer")
const { mail } = require("./config")

const send = async () => {
	await sendMail(mail.recipient)
}

const NodeAPI = async () => {
	await listen()
}

NodeAPI()
send()

/*

NodeAPI							March 3, 2024

source: index.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
