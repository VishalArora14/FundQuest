import web3 from './web3';
import Campaign from './contractJSON/Campaign.json';

//searching for contract at particular address
export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address
  );
}

/*
campaign.sol file : 

These contracts are compiled and a json file (containing byte code) is created after build.
All the rules are created inside contract. Then we compile our contract.
We deploy the compiled file on a blockchain network (using deloy file) and get a address on which our contracts are deployed.
After the contract is live we can call the functions and perform operations. 
Multiple libraries
https://remix.ethereum.org/ 
*/