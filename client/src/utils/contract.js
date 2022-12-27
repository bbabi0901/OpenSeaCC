import abi from "./abi/abi.js";
import { getGoerliWeb } from "./wallet.js";
import axios from "axios";

// const contractAddr = "0xec1254f8ecf5137f04b7079464a656b82f163fc0";
const contractAddr = "0x6ff290578ec9befe0b4b2a7586e42557a4a9d31d";

// const getNftList = async () => {
//   let nftList = [];
//   const web = getGoerliWeb();
//   const nftContract = await new web.eth.Contract(abi, contractAddr);
//   for (let tokenId = 1; tokenId <= 9; tokenId++) {
//     let tokenURI = await nftContract.methods.tokenURI(tokenId).call();
//     nftList.push({ tokenId, tokenURI });
//   }
//   return nftList;
// };
// const nftList = getNftList();
// console.log(nftList);

const web = getGoerliWeb();
const nftContract = new web.eth.Contract(abi, contractAddr);
let tokenURI = await nftContract.methods.tokenURI(1).call();
// const tokenId = 1;
// let tokenURI = await axios.get(
//   `https://gateway.pinata.cloud/ipfs/QmUbYfuTGNpNfFdMzSmkSVZxC5iGhaDpcR8YH8gJgDb2xo/${tokenId}.json`
// );
// const image = "https://ipfs.io/ipfs/" + tokenURI.data.image.split("//")[1];

console.log(tokenURI);

// https://gateway.pinata.cloud/ipfs/QmUbYfuTGNpNfFdMzSmkSVZxC5iGhaDpcR8YH8gJgDb2xo/{id}.json
// ipfs://QmQXuQvksryJ9Qzi5BbdyhNkpMk1PSopSVcW5WDwxFxS1L/image.gif
// https://ipfs.io/ipfs/QmQXuQvksryJ9Qzi5BbdyhNkpMk1PSopSVcW5WDwxFxS1L/image.gif
// https://ipfs.io/ipfs/QmUbhku31goRMVxmEDHgh7tvaBpsRqpUnkkSdrkjJu33j3/1Metadata1,1.json
