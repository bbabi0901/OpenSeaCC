export const getWallet = async (type = "metamask") => {
  if (window.ethereum) {
    try {
      let acc;
      if (type === "metamask") {
        acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      }
      return acc;
    } catch (error) {
      return;
    }
  } else {
    return;
  }
};
