import Web3 from "web3";

const getWallet = async (type = "metamask") => {
  if (window.ethereum) {
    try {
      let acc;
      if (type === "metamask") {
        acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      }
      return acc[0];
    } catch (error) {
      return;
    }
  } else {
    return;
  }
};

const getBalance = async (address, web3) => {
  const addressChecksum = web3.utils.toChecksumAddress(address);
  const balance = await web3.eth.getBalance(addressChecksum, "latest");
  return balance;
};

const getGoerliWeb = () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://goerli.infura.io/v3/2d2c8426cde6446fa9185e2e0b01dcea"
    )
  );
  return web3;
};

export { getWallet, getBalance, getGoerliWeb };
