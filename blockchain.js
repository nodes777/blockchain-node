const Block = require("./block");

class Blockchain {
	constructor() {
		this.chain = [this.createGenesis()];
	}

	createGenesis() {
		return new Block("Genesis block", "0");
	}

	latestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.latestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		newBlock.index = this.chain.length;
		this.chain.push(newBlock);
	}

	checkValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				console.log("Doesnt match self hash");

				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}
		}

		return true;
	}
}

module.exports = Blockchain;
