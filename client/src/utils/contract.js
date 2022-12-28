import Web3 from "web3";
import abi from "./ERC721/ERC721ABI.js";
import { getGoerliWeb } from "./wallet.js";
// import axios from "axios";

const contractAddr = "0x4197425d40E4fDA55C0c2913bcDB325217A7079a";

// minting tx
const mint = async (address, tokenURI, web) => {
  try {
    const web = getGoerliWeb();
    const nftContract = new web.eth.Contract(abi, contractAddr);
    const addressChecksum = web.utils.toChecksumAddress(address);
    const nonce = await web.eth.getTransactionCount(addressChecksum, "latest");
    const data = await nftContract.methods
      .mintNFT(addressChecksum, tokenURI)
      .encodeABI();
    const tx = {
      from: address,
      to: contractAddr,
      nonce: nonce,
      gas: 500000,
      maxPriorityFeePerGas: 1999999987,
      data: data,
    };
    return tx;
  } catch (err) {
    // console.log(err);
    return false;
  }
};

// signing transaction
const signTx = async (tx, privateKey) => {
  try {
    const web = getGoerliWeb();
    const txSigned = await web.eth.accounts.signTransaction(tx, privateKey);
    console.log("signed", txSigned);
    const hash = web.eth.sendSignedTransaction(
      txSigned.rawTransaction,
      (err, hash) => {
        if (err) console.log("Transaction Error:", err);
      }
    );
    return hash;
  } catch (err) {
    console.log("Promise Error:", err);
    return false;
  }
};

// const transfer = (address) => {};

// export { mint };
