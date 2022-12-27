import abi from "./ERC721/ERC721ABI.js";
import { getGoerliWeb } from "./wallet.js";
// import axios from "axios";

const contractAddr = "0x4197425d40E4fDA55C0c2913bcDB325217A7079a";
const mint = async (address, tokenURI) => {
  const web = getGoerliWeb();
  const nftContract = new web.eth.Contract(abi, contractAddr);
  const addressChecksum = web.utils.toChecksumAddress(address);
  const result = await nftContract.methods.mintNFT(addressChecksum, tokenURI);
  return result;
};

export { mint };
