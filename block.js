const SHA256 = require("crypto-js/sha256");

class Block {
	constructor(index, timestamp, data, previousHash) {
		// where block in located in the chain
		this.index = 0;
		this.timestamp = timestamp;
		this.data = data;
		// refers to previous block
		this.previousHash = "0";
		this.calculateHash = calculateHash.bind(this);
		this.hash = this.calculateHash();
		// used to mine
		this.nonce = 0;
	}
}

function calculateHash() {
	return SHA256(
		this.index + this.previousHash + this.timestamp + this.data + this.nonce
	).toString();
}

module.exports = Block;
