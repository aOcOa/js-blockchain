const sha256 = require('sha256');


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

Blockchain.prototype.hashBlock = function(preiousHashBlock, currentBlockData, nonce){
    dataAsString = preiousHashBlock + nonce.toString() + JSON.stringify(currentBlockData);
    return sha256(dataAsString);
}

Blockchain.prototype.proofOfWork = function(preiousHashBlock,currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(preiousHashBlock,currentBlockData,nonce);
    while(hash.substring(0,4) !== '0000'){
        nonce ++;
        hash = this.hashBlock(preiousHashBlock,currentBlockData,nonce);
    }
    return nonce;
}

module.exports = Blockchain;