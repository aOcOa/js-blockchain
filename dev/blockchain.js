// blockchain data structure
function Blockchain(){
    this.chain = [];
    this.pendingTransations = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        nonce: nonce,
        hash: hash,
        transations: this.pendingTransations,
        previousBlockHash: previousBlockHash
    }

    this.pendingTransations = [];
    this.chain.push(newBlock);

    return newBlock;
}


Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransation = function(amount, sender, recipient){
    const newTransation = {
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    this.pendingTransations.push(newTransation);
    return this.getLastBlock()['index'] + 1;
}
module.exports = Blockchain;