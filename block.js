const SHA256 = require("crypto-js/sha256");

class Block {
	constructor(data) {
		// where block in located in the chain
		this.index = 0;
		this.timestamp = new Date().valueOf();
		this.data = JSON.stringify(data);
		// refers to previous block
		this.previousHash = "0";
		this.calculateHash = calculateHash.bind(this);

		this.hash = function() {
			let hash = SHA256(
				this.index +
					this.previousHash +
					this.timestamp +
					this.data +
					this.nonce
			).toString();
			return hash;
		};

		// Used to mine
		this.nonce = 0;
	}
}

function calculateHash() {}

module.exports = Block;
