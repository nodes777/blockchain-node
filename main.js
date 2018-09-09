const Block = require("./block");
const Blockchain = require("./blockchain");

function mineBlock(difficulty) {}

let jsChain = new Blockchain();
jsChain.addBlock(new Block({ amount: 5 }));
jsChain.addBlock(new Block({ amount: 10 }));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid? " + jsChain.checkValid());
