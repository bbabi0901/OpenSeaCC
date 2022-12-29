const erc721Abi = require("./contract/contractabi");
const contract_address = "0x25EF5eEc91A8240b5428B630e826ef4Df5bFBa4b"
const Web3 = require("web3");
const web3 = new Web3("https://goerli.infura.io/v3/104fe2efa02c48bb8c5ca83b54b521ee")
const private_key = "462a5ccd03d7fb0e40cebfb7e67f224da27f1aa4c866db4aa300a60d1d307b2f"

module.exports = {
    AddChain : async (tokenURI, issuerAddress) => {
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            contract_address
        );

        const data = tokenContract.methods
        .mintNFT(issuerAddress, tokenURI)
        .encodeABI();

        const nonce = await web3.eth.getTransactionCount(issuerAddress, 'latest');

        const tx = {
            from: issuerAddress,
            to: contract_address,
            nonce: nonce,
            gas: 5000000,
            data: data,
        };

        // 트랜잭션 서명
        const signPromise = await web3.eth.accounts.signTransaction(tx, private_key);
        console.log(signPromise)

        // 체인에 트랜잭션 실행
        const signedTx = await web3.eth.sendSignedTransaction(signPromise.rawTransaction);
        console.log(signedTx)

        const tokenId = await tokenContract.methods
                        .checkTokenId(tokenURI)
                        .call();

        return tokenId;
    }
}