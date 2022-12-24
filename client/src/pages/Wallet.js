import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getWallet } from "../utils/wallet";

const Wallet = (props) => {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const connectMetamask = async () => {
      const acc = await getWallet();
      console.log(acc);
      setAccounts(acc);
      if (accounts === undefined) {
        alert("install metamask extension!!");
        navigate(-1);
      }
    };
    connectMetamask();
  });

  return <div>Wallet 미구현, {accounts}</div>;
};

export default Wallet;

// isWalletConnected => icon color / body
// wallet type => kaikas / metamask(=klaytn / ethereum)
// singletone? token?
