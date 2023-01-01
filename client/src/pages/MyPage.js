import axios from "axios";
import React, { useState, useEffect } from "react";
import NFT from "../components/NFT/NFT";
import { useNavigate } from "react-router-dom";
import { getWallet } from "../utils/wallet";
import { useWeb3React } from "@web3-react/core";
import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";

const MyPage = () => {
  const [nfts, setNfts] = useState();
  // const [disconnect, setDisconnect] = useState(account);
  const { library, chainId, account, deactivate } = useWeb3React();

  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/mypage/userInfo",
        { address: account },
        { "Content-Type": "application/json" } // header
      )
      .then((response) => {
        setNfts(response.data);
      });
  }, []);

  // function logOut() {
  //   localStorage.clear();
  //   return setDisconnect(!account);
  // }

  return (
    <div className="mypage">
      <Box>
        <Box m={0} p={[1, 0]} width="auto" height="auto">
          <Image
            src="https://cdn.mos.cms.futurecdn.net/VECkttyB7rAa9qSkxMiB8f.jpg"
            alt=""
          ></Image>
        </Box>

        <VStack>
          <Box boxSize="sm" width="250px" height="250px">
            <Image
              src="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
              borderRadius="250px"
              border="4px"
              borderColor="white"
              alt=""
            ></Image>
          </Box>
          <Box p={6}>SampleName</Box>
          <HStack>
            <Box>
              <i className="fa-brands fa-ethereum"></i>
            </Box>
            <Box>{account}</Box>
            <Box>Joined December 2022</Box>
          </HStack>
        </VStack>

        {/* <div className="user_info">
          <div className="name">
            <div className="wallet_address"></div>
          </div>
          <div className=""></div>
        </div> */}
        <Box className="user_menu">
          <div className="user_collected">
            <h2>Collected</h2>
          </div>
          <div className="user_created">
            <h2>Created</h2>
          </div>
          <div className="user_favorited">
            <h2>Favorited</h2>
          </div>
          <div className="user_activity">
            <h2>Activity</h2>
          </div>
          <div className="user_more">
            <select>
              <option value="Offers made">More</option>
              <option value="Offers made">Offers made</option>
              <option value="Offers received">Offers received</option>
              <option value="Active Listings">Active Listings</option>
              <option value="Inactive Listings">Inactive Listings</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>
        </Box>
        <div className="display">
          {console.log(nfts)}
          {nfts !== {} && nfts !== undefined
            ? nfts.owner.map((item) => {
                return <NFT className="nft_list" nft={item} key={item.id} />;
              })
            : 0}
        </div>
      </Box>
    </div>
  );
};

export default MyPage;
