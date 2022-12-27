import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";

import { getWallet } from "../utils/wallet";
// import { hashAddress } from "../utils/hash";

const Wallet = ({ name, account, onWalletConnect }) => {
  const navigate = useNavigate();
  const [accConncected, setAccConnected] = useState(account);
  const handleWalletConnect = async () => {
    const acc = await getWallet();
    if (acc === undefined) {
      window.open("https://metamask.io/download/");
      navigate(-1);
    }
    setAccConnected(acc);
    onWalletConnect(accConncected);
  };

  const serverURL = "http://localhost:3000/userinfo";

  const addressDB = () => {
    try {
      axios
        .post(
          serverURL,
          {
            name: name,
            address: accConncected,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log("ok", res);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleWalletConnect();
    addressDB();
    getBalance(accConncected, web3);
  }, [accConncected]);

  const goerliURL =
    "https://goerli.infura.io/v3/2d2c8426cde6446fa9185e2e0b01dcea";
  const getWeb3 = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider(goerliURL));
    return web3;
  };
  const getBalance = async (address, web3) => {
    const addressChecksum = web3.utils.toChecksumAddress(address);
    const balance = await web3.eth.getBalance(addressChecksum, "latest");
    setBalance(balance);
  };
  const web3 = getWeb3();
  // const ganache = "0x4A9ABCDBAd58601e021e2C698Bc193eDBfd7f692";
  // const [balance, setBalance] = useState("0");
  // const web3ganache = () => {
  //   return new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  // };
  // const getBalanceGanache = async (address) => {
  //   const checksumAddr = web3ganache().utils.toChecksumAddress(address);
  //   try {
  //     const balance = await web3ganache().eth.getBalance(checksumAddr);
  //     return balance;
  //   } catch (e) {
  //     console.log(e);
  //     return e;
  //   }
  // };

  const [balance, setBalance] = useState("0");

  return (
    <div>
      Wallet 미구현, {accConncected}, Balance: {balance}
    </div>
  );
};

export default Wallet;

// isWalletConnected => icon color / body
// props => wallet type => kaikas / metamask(=klaytn / ethereum)
// 계정 연동 <-> extension 건드릴 필요 없이 getWallet으로 호출
