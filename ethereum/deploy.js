const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const campaignFactory = require('./contractJSON/CampaignFactory.json');

const NEXT_PUBLIC_MNEMONIC="pioneer lift gaze sight sound carpet that pumpkin fabric hurt gentle talk"
const NEXT_PUBLIC_INFURA_API_KEY="https://sepolia.infura.io/v3/aeddddca14814aba9d0948ad7d35f4ed"

const provider = new HDWalletProvider({
    mnemonic: NEXT_PUBLIC_MNEMONIC,
    providerOrUrl: NEXT_PUBLIC_INFURA_API_KEY});

const web3 = new Web3(provider); 
web3.setProvider(provider);

const deploy = async() => {

    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    console.log("Attempting to deploy from account" , accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
    .deploy({ data: campaignFactory.bytecode })
    .send({from : accounts[0], gas:'3000000'})
    console.log('Contract deployed to', result.options.address);

};

deploy();
// Contract deployed to 0xE259c4A6C78bFB9145D031CEd96a371D6A772600