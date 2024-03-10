const hostname = (cmd) => {

	if ('hostname' === cmd) {
		return true
	}

	return false
}

module.exports = { hostname }

/*

NodeAPI							March 4, 2024

source: api/services/system.js
author: @misael-diaz

Copyright (c) 2024 Misael Díaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

*/
