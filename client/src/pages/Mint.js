import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Textarea, Button } from "@chakra-ui/react";
import axios from "axios";
// Goal: upload on ipfs and chain directly from client

// Step0. connect ipfs
// sudo npm install -save ipfs-api
// const ipfsAPI = require('ipfs-api');
// const ipfs = ipfsAPI('192.168.0.8' ,'5001', {protocol: 'http'})

// Step1. metadata from state => compile in json
// exMetadata = {
//   name: '',
//   image: '', <- external Link?
//   description: ''
// } <- becomes data when accessing tokenURI

// Step2. upload image on ipfs by using ipfs-api
// => returns hash data(ex. QmT7~~~) => metadata에 해쉬를 파싱해서 image에 externallink가 없으면 넣어준다
// 이 메타데이터도 따로 ipfs에 업로드 -> 이때 나온 해시를 파싱한게 becomes part of tokenURI

// Step3. default contract or default contract에 collection/token이름과 심볼을 받아서 컨트랙트 "대신" 발행.
// 발행한 컨트랙트(=contract abi)와 tokenURI가 있으면 NFT 발행 가능.

// 요약 => 1.메타데이터를 만들고 2.ipfs에 올리고 3.올릴때반환된값을 활용해서 minting

// Extra step. When calling ipfs image
// npm install react-ipfs-image(https://www.npmjs.com/package/react-ipfs-image)

const Mint = ({ name, account }) => {
  const address = localStorage.getItem("address");
  const [values, setValues] = useState({});
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  const req = async (mintData) => {
    const result = await axios.post(
      "http://localhost:3000/mint/minting",
      {
        address: address,
        img: imgBase64,
        info: mintData,
      }, // body
      {
        "Content-Type": "multipart/form-data",
      } // header
    );

    return result;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mintData = JSON.stringify(values, null, 2);
    alert(JSON.stringify(values, null, 2));

    req(mintData);
  };
  const handleChangeFile = (event) => {
    setImgFile(event.target.files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  return (
    <div className="Mint">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Create New Item</h1>
          <h6>* Required fields</h6>
          <h3>Image, Video, Audio, or 3D Model</h3>
          <h6>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </h6>
          <div className="add__img">
            <div className="upload">
              <input
                type="file"
                id="file"
                onChange={handleChangeFile}
                multiple="multiple"
              />
            </div>
            <ul className="image_preview">
              <i className="fa-regular fa-image"></i>
            </ul>
          </div>
          <div className="add__name">
            <h3>Name</h3>
            <Input
              className="text_input"
              type="text"
              placeholder="   Item name"
              name="nft_name"
              onChange={handleChange}
            ></Input>
          </div>
          <div className="add__external_link">
            <h3>External link</h3>
            <h6>
              OpenSea will include a link to this URL on this item's detail
              page, so that users can click to learn more about it. You are
              welcome to link to your own webpage with more details.
            </h6>
            <Input
              className="text_input"
              type="text"
              placeholder="   https://yoursite.io/item/123"
              name="nft_img_link"
              onChange={handleChange}
            ></Input>
          </div>
          <div className="add__discription">
            <h3>Description</h3>
            <h6>
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </h6>
            <Textarea
              className="text_input discription"
              placeholder="  Provide a detailed discription of your item."
              name="nft_detail"
              onChange={handleChange}
            ></Textarea>
          </div>
          <div className="add__price">
            <h3>Price</h3>
            <Input
              className="text_input"
              type="number"
              name="nft_price"
              onChange={handleChange}
            ></Input>
          </div>
          <div className="add__collection">
            <h3>Theme</h3>
            <h6>This is the theme where your item will added.</h6>
            <select
              className="text_input"
              placeholder="Select Collection"
              name="nft_collection"
              onChange={handleChange}
            >
              <option value="">...Select Collection</option>
              <option value="trending">Trending</option>
              <option value="art">Art</option>
              <option value="collectibles">Collectibles</option>
            </select>
          </div>
          <div className="add__create">
            {/* <Link to="/mypage"> */}
            <Button className="add__create_button" type="submit">
              <h3>Create</h3>
            </Button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mint;
