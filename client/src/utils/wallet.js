export const getWallet = async (type = "metamask") => {
  if (window.ethereum && type === "metamask") {
    try {
      const acc = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return acc;
    } catch (error) {
      return;
    }
  } else if (type !== "metamask") {
    alert("");
    return;
  } else {
    alert("install metamask extension!!");
    return;
  }
};
