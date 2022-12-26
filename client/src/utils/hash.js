const { sha256 } = require("js-sha256").sha256;
export const hashAddress = (name, address) => {
  return sha256(name + address);
};
