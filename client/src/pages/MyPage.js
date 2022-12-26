import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getWallet } from "../utils/wallet";

const MyPage = () => {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const connectMetamask = async () => {
      const acc = await getWallet();
      // console.log(acc);
      setAccounts(acc);
      if (accounts === undefined) {
        alert("install metamask extension!!");
        navigate(-1);
      }
    };
    connectMetamask();
  });
  return <div>MyPage 미구현, {accounts}s</div>;
};

export default MyPage;
