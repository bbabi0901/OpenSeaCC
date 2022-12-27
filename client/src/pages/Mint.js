import React, { useState } from 'react';
import axios from 'axios';



const Mint = ({ name, account }) => {
  const [values, setValues] = useState({});
  const req = async () => {
    const result = await axios.post("http://localhost:3000/mypage/userInfo",
      {
        "address" : account
      },  // body
      {"Content-Type": "application/json"} // header
    )
    return result;
  }

  const result = req().then((result) => {
    return result;
  })
  // const response = await axios('http://localhost:3000/mint', {
  //   name: nftName,
  //   address: nftAddress,
  //   detail: nftDetail,
  //   image: nftImage,
  //   price: nftPrice,

  // });
  // console.log(response.data);
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
  }

  return(
    
  <div className="Mint">
    <div className="container">
    <form onSubmit={handleSubmit}>
        <h1>Create New Item</h1>
        <h6>* Required fields</h6>
        <h3>Image, Video, Audio, or 3D Model</h3>
        <h6>File types supported: Image Link Only</h6>
        <div className="add__img">
          <input 
          className = 'text_input'
          type='text' 
          accept="image/*" 
          name='nft_image'
          onChange={handleChange}
          ></input>

          <div className="upload"></div>
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
          <div className="add__collection">
            <h3>Collection</h3>
            <h6>This is the collection where your item will appear.</h6>
            <select 
            className = 'text_input' 
            placeholder = 'Select Collection'
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
