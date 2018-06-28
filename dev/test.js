const Blockchain = require('./Blockchain');


// console.log(Blockchain);
// const catcoin = new Blockchain();

//// !!
// catcoin.createNewBlock(12983, 'sdfijsdofisjdcl','qwejlajdadad');
// catcoin.createNewBlock(5646, 'rgdfgdfgrg','xcvxcvdfgtyrty');
// catcoin.createNewBlock(234234, 'sadasuyjymyum','dscsdefff');
// catcoin.createNewBlock(8, 'uuujujgnfgbfgb','wetryrtyrty');

// console.log(catcoin);

// // !!
// catcoin.getLastBlock();
// console.log(catcoin.getLastBlock());

// // !!
const catcoin = new Blockchain();
catcoin.createNewBlock(23245, 'FLASKEOKRFOEWK', 'CNLKSNLFKENFKWEJNFJKWEF');

catcoin.createNewTransation(100, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');

catcoin.createNewBlock(09435, 'mclseomfo', 'fefkela;kdp;akpf');

catcoin.createNewTransation(300, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');

catcoin.createNewTransation(7700, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');

catcoin.createNewTransation(1, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');
// mine a new block after new transations.
catcoin.createNewBlock(3434, 'mclseomfo', 'SDLFKLDSKFOSDKF');

console.log(catcoin);
