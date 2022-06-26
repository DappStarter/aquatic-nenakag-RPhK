require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note ridge punch gesture force flush general'; 
let testAccounts = [
"0x9282f8680e820ab024f24b86867b15c2fcb56f2dbf606a56b5423e70a263c284",
"0x348b1563f3a34f2bb48344ce46fa19e20a14143d993504f4a2402d13e9171576",
"0x55f61ba906ccdd935b363ccfe088deafb527ce9b74da2e04492079ded0c17025",
"0xb701f2b8856ed5dcda568d3b234fdf65183dcb9489f6864c5e0f1ba1bbc99667",
"0xedc9b2ee0efbaee04821b7eba6bb623eaafcf5826290aff7124f0f7cf92bc0a1",
"0x707a470304d5dc32db949e42dd7f8b66ca0a37ae1078159131d78d1347489140",
"0x6648adf8c6ce97365ca298cbd1376fe71435f8856637fbbb538a7dd8f44e3452",
"0x43b9659ccacbf0a7a11297a3361ab1a6336d693cf92157d3cbe3a260532c0790",
"0x77ead0126e44e58856cb105bf1ee76ae1b723a875602fff6d2d4025b29a25461",
"0x2fb0a9975408a62c4d534146c8d92098acd96faa4e4780b5942f1c78c8345de3"
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


