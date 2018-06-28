// blockchain data structure
function Blockchain(){
    this.chain = [];
    this.newTransations = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        nonce: nonce,
        hash: hash,
        transations: this.newTransations,
        previousBlockHash: previousBlockHash
    }

    this.newTransations = [];
    this.chain.push(newBlock);

    return newBlock;
}

module.exports = Blockchain;