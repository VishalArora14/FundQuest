import Web3 from 'web3';
var web3;

const NEXT_PUBLIC_INFURA_API_KEY="https://sepolia.infura.io/v3/aeddddca14814aba9d0948ad7d35f4ed"


if (typeof window !== 'undefined') {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new Web3.providers.HttpProvider(NEXT_PUBLIC_INFURA_API_KEY);
        web3 = new Web3(window.ethereum);
    } else if (window.web3)
        web3 = window.web3;
    else {
        const provider = new Web3.providers.HttpProvider(NEXT_PUBLIC_INFURA_API_KEY);
        web3 = new Web3(provider);
    }
}
else {
    const provider = new Web3.providers.HttpProvider(NEXT_PUBLIC_INFURA_API_KEY);
    web3 = new Web3(provider);
}
export default web3;