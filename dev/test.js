const Blockchain = require('./Blockchain');


// console.log(Blockchain);
// const catcoin = new Blockchain();

//// !! CREATE NEW BLOCK
// catcoin.createNewBlock(12983, 'sdfijsdofisjdcl','qwejlajdadad');
// catcoin.createNewBlock(5646, 'rgdfgdfgrg','xcvxcvdfgtyrty');
// catcoin.createNewBlock(234234, 'sadasuyjymyum','dscsdefff');
// catcoin.createNewBlock(8, 'uuujujgnfgbfgb','wetryrtyrty');

// console.log(catcoin);

// // !! GET LAST BLOCK
// catcoin.getLastBlock();
// console.log(catcoin.getLastBlock());

// // // !! CREATE NEW TRANSATION
// const catcoin = new Blockchain();
// catcoin.createNewBlock(23245, 'FLASKEOKRFOEWK', 'CNLKSNLFKENFKWEJNFJKWEF');

// catcoin.createNewTransation(100, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');

// catcoin.createNewBlock(09435, 'mclseomfo', 'fefkela;kdp;akpf');

// catcoin.createNewTransation(300, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');

// catcoin.createNewTransation(7700, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');

// catcoin.createNewTransation(1, 'DOGKLMCLSEMCSECIL','BUGAWPKXOAWKWE');
// // mine a new block after new transations.
// catcoin.createNewBlock(3434, 'mclseomfo', 'SDLFKLDSKFOSDKF');

// console.log(catcoin);

// !! HASH BLOCK
// const catcoin = new Blockchain();

// const previousBlockHash = 'IJFLASJIFOAESKOKEPSKDPOE';
// const currentBlockData =[{
//     amount: 2323,
//     sender: 'ALEXVPOOKSPEOKFOEPKF',
//     recipient: 'JOIKCKOPEWSSEIPRI'
// },{
//     amount: 23245,
//     sender: 'ALEXVPOOKSPEOKFOEPKF',
//     recipient: 'JOIKCKOPEWSSEIPRI'
// },{
//     amount: 123,
//     sender: 'ALEXVPOOKSPEOKFOEPKF',
//     recipient: 'JOIKCKOPEWSSFEIPRI'
// }]

// const nonce = 23903294
// console.log(catcoin.hashBlock(previousBlockHash,currentBlockData, nonce));

// // !! PROOF OF WORK
// const catcoin = new Blockchain();

// const previousBlockHash = 'IJFLASJIFOAESKOKEPSKDPOE';
// const currentBlockData =[{
//     amount: 2323,
//     sender: 'ALEXVPOOKSPEOKFOEPKF',
//     recipient: 'JOIKCKOPEWSSEIPRI'
// },{
//     amount: 23245,
//     sender: 'ALEXVPOOKSPEOKFOEPKF',
//     recipient: 'JOIKCKOPEWSSEIPRI'
// },{
//     amount: 123,
//     sender: 'ALEXVPOOKSPEOKFOEPKF',
//     recipient: 'JOIKCKOPEWSSFEIPRI'
// }]
// // caculate
// console.log(catcoin.proofOfWork(previousBlockHash,currentBlockData));
// // verify
// console.log(catcoin.hashBlock(previousBlockHash,currentBlockData, 16015));
// // it took lots time to mine but easy to verify.


// // !! GENESIS BLOCK
// const catcoin = new Blockchain();
// console.log(catcoin);