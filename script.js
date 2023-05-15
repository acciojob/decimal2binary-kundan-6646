function decimalToBinary(n) {
	let res = "";
	while(n > 0) {
		res = (n%2) + res;
		n = parseInt(n / 2);
	}

	return res;
}

module.exports = decimalToBinary;
