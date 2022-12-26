const Mint = () => {
function setPriview(event){
  let reader = new FileReader();
  reader.onload = function(event){
    let img
  }
}
  return(
  <div className="Mint">
    <div className="container">
      <h1>Create New Item</h1>
      <h6>* Required fields</h6>
      <h3>Image, Video, Audio, or 3D Model</h3>
      <h6>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</h6>
      <div className="add__img">
        <input type='file' accept="image/*"></input>
        <div className="upload"></div>
        <ul className="image_preview">
        <i className="fa-regular fa-image"></i>
        </ul>
      </div>
        <div className="add__name">
          <h3>Name</h3>
          <input className = 'text_input'type='text' placeholder = '   Item name'></input>
        </div>
        <div className="add__external_link">
          <h3>External link</h3>
          <h6>OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</h6>
          <input className = 'text_input' type='text' placeholder = '   https://yoursite.io/item/123'></input>
        </div>
        <div className="add__discription">
          <h3>Description</h3>
          <h6>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</h6>
          <textarea className = 'text_input discription'  placeholder = '  Provide a detailed discription of your item.'></textarea>
        </div>
        <div className="add__collection">
          <h3>Collection</h3>
          <h6>This is the collection where your item will appear.</h6>
          <select className = 'text_input' placeholder = 'Select Collection'>
            <option value = 'Select Collection'>...Select Collection</option>
            <option value = 'No Result'>...No Result</option>
          </select>
        </div>
        <div className="add__create">
          <button className="add__create_button">
            <h3>Create</h3>  
          </button>
        </div>
      </div>
    </div>

  )
};

export default Mint;
