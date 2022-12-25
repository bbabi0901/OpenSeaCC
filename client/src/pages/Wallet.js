import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getWallet } from "../utils/wallet";

const Wallet = ({ handleWalletChecked }) => {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  const onWalletChecked = () => {
    handleWalletChecked();
  };
  useEffect(() => {
    const connectMetamask = async () => {
      const acc = await getWallet();
      if (accounts === undefined) {
        alert("install metamask extension!!");
        navigate(-1);
      }
      setAccounts(acc);
      localStorage.setItem("account", acc);
      onWalletChecked();
    };
    connectMetamask();
  });

  return <div>Wallet 미구현, {accounts}</div>;
};

export default Wallet;

// isWalletConnected => icon color / body
// props => wallet type => kaikas / metamask(=klaytn / ethereum)
// 계정 연동 <-> extension 건드릴 필요 없이 getWallet으로 호출
