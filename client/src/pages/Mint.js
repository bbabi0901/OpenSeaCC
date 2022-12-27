import React, { useState } from 'react';
import axios from 'axios';

const Mint = ({ name, account }) => {
  console.log(account)
  console.log(name)
  const [values, setValues] = useState({});
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일	
  const req = async () => {
    const result = await axios.post("http://localhost:3000/mint/minting",
      {
        "address" : account,
        "img" : imgBase64,
        "info" : values
      },  // body
      {
        "Content-Type": "multipart/form-data",
      } // header
    )

    return result;
  }

  const handleChange = e => {
    setValues({
      ...values,
      account,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const mintData = JSON.stringify(values, null,2);
    req(mintData)
  }
  const handleChangeFile = (event) => {

    setImgFile(event.target.files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for(var i=0;i<event.target.files.length;i++){
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
          var base64Sub = base64.toString()
             
          setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
          }
        }
      }
    }

  }

  return(
    
  <div className="Mint">
    <div className="container">
    <form onSubmit={handleSubmit}>
        <h1>Create New Item</h1>
        <h6>* Required fields</h6>
        <h3>Image, Video, Audio, or 3D Model</h3>
        <h6>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</h6>
        <div className="add__img">

          <div className="upload">
          <input type="file" id="file"  onChange={handleChangeFile} multiple="multiple" />
          
          </div>
          <ul className="image_preview">
          <i className="fa-regular fa-image"></i>
          </ul>

        </div>
          <div className="add__name">
            <h3>Name</h3>
            <input 
            className = 'text_input'
            type='text' 
            placeholder = '   Item name'
            name='nft_name'
            onChange={handleChange}
            ></input>
          </div>
          <div className="add__external_link">
            <h3>External link</h3>
            <h6>OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</h6>
            <input 
            
            className = 'text_input' 
            type='text' 
            placeholder = '   https://yoursite.io/item/123'
            name='nft_img_link'
            onChange={handleChange}
            ></input>
          </div>
          <div className="add__discription">
            <h3>Description</h3>
            <h6>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</h6>
            <textarea 
            className = 'text_input discription'  
            placeholder = '  Provide a detailed discription of your item.'
            name='nft_detail'
            onChange={handleChange}
            ></textarea>
          </div>
          <div className="add__price">
            <h3>Price</h3>
            <input 
            
            className = 'text_input' 
            type='number' 
            name='nft_price'
            onChange={handleChange}
            ></input>
          </div>
          <div className="add__collection">
            <h3>Collection</h3>
            <h6>This is the collection where your item will appear.</h6>
            <select 
            className = 'text_input' 
            placeholder = 'Select Collection'
            name='nft_collection'
            onChange={handleChange}

            >
              <option value = 'Select Collection'>...Select Collection</option>
              <option value = 'No Result'>...No Result</option>
            </select>
          </div>
          <div className="add__create">
            <button 
            className="add__create_button" 
            type='submit'
            >
              <h3>Create</h3>  
            </button>
          </div>
        </form>
      </div>
    </div>

  )
};

export default Mint;
