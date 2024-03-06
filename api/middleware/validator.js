const isEmptyObj = obj => {

	for (const prop in obj) {
		return false;
	}

	return true;
}

module.exports = { isEmptyObj }

/*

NodeAPI							March 4, 2024

source: api/middleware/validator.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
