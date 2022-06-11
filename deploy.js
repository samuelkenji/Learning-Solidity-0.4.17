// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3"); // web3 is a constructor function
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    "present art stone jaguar aerobic there bounce skirt deny intact glide woman", //Dev mnemonic (no real ether)
    "https://rinkeby.infura.io/v3/db3d5ef98cfd4a5b994efa19b4c62013"
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there!"] })
        .send({ from: accounts[0], gas: "1000000" });
    
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
}
deploy();
