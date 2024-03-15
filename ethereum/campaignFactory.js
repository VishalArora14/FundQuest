import web3 from './web3';
import CampaginFactory from './contractJSON/CampaignFactory.json';

//searching for contract at particular address
const instance = new web3.eth.Contract(
  JSON.parse(CampaginFactory.interface),
  '0xE259c4A6C78bFB9145D031CEd96a371D6A772600'
);

export default instance;