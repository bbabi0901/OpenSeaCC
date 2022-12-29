import Web3 from "web3";
import azukiAbi from "./ERC721/azukiABI.js";
import catAbi from "./ERC721/catABI.js";
import abi from "./abi/ERC721ABI";
import { getGoerliWeb } from "./wallet.js";
// require("dotenv").config();

const { PRIVATE_KEY } = process.env;

// const contractAddr = "0x4197425d40E4fDA55C0c2913bcDB325217A7079a";
const contractAddr = "0xb769c830b248e5a1d03ef97331b03da797132458";
const web = getGoerliWeb();

// minting tx
const mint = async (address, tokenURI) => {
  try {
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
    const txHash = signTx(tx, PRIVATE_KEY, web);
    return txHash;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// signing transaction
const signTx = async (tx, privateKey, web) => {
  try {
    const txSigned = await web.eth.accounts.signTransaction(tx, privateKey);
    // console.log("signed", txSigned);
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

const collections = {
  trending: {
    contractAddr: "0x10B8b56D53bFA5e374f38e6C0830BAd4ebeE33E6",
    abi: azukiAbi,
    num: 0,
  },
  art: {
    contractAddr: "0x10B8b56D53bFA5e374f38e6C0830BAd4ebeE33E6",
    abi: azukiAbi,
    num: 1,
  },
  collectibles: {
    contractAddr: "0x10B8b56D53bFA5e374f38e6C0830BAd4ebeE33E6",
    abi: azukiAbi,
    num: 2,
  },
};

export { mint, collections };
