const Blockchain = require('./Blockchain');
console.log(Blockchain);
const catcoin = new Blockchain();

catcoin.createNewBlock(12983, 'sdfijsdofisjdcl','qwejlajdadad');
catcoin.createNewBlock(5646, 'rgdfgdfgrg','xcvxcvdfgtyrty');
catcoin.createNewBlock(234234, 'sadasuyjymyum','dscsdefff');
catcoin.createNewBlock(8, 'uuujujgnfgbfgb','wetryrtyrty');
console.log(catcoin);

catcoin.getLastBlock();
console.log(catcoin.getLastBlock());
