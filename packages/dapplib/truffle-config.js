require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy release pitch hole guess praise army ghost'; 
let testAccounts = [
"0x5f4757545e6867b0277443ba9b449ab61f6676a9c57d05d3fcdba45c88bbcd5f",
"0xb0ecd32f8cdbe99be4b17f2f9c0fc3f956cf60721750724978e6a8ba2a75ebd8",
"0xa088e2daf81155556cfafb0508dc413e3261933411ccbc2f146d151ad7d510a6",
"0xaa23d93b9630fe74771047fdcad22646c3378d6ff196d6277274dc6e5192603b",
"0x0881d728cc3c17aeb78445908870c62cb445347f95eeac082fbb5d315c0acce2",
"0x227121809f3a77fa4ff5eabd16db6b1d13b45f1e5ecfefe440c1bcb1e27b6247",
"0x57ecbafa1a6a6025319991f6390788e1c1f1cc79c218b1be47f9acc44bab8c11",
"0x1414c016ec6d93dc109ccc113e07509d5679d984741227be015628ab300ec6b2",
"0x686c7927ccafccb074cad478964f0ec05910e095b0af850e21453d7045ed3017",
"0x236813c1bf2365a04e82ac81ef56d8b55eab1c39eee45a5830f85983d495be17"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


