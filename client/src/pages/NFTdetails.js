import axios from 'axios';
import './NFTdetails.css'
import { getWallet } from "../utils/wallet";

const NFTdetails = ({}) => {

    const req = async () => {
        const result = await axios.post("http://localhost:3000/nftdetails",
          //{"address" : account},  // body
          {"Content-Type": "application/json"} // header
        )
        return result;
      }
    
      const result = req().then((result) => {
        return result;
      })
      //
    return(
        <div className="nft_details">
        <div className="nft_name">    
        <span className='nft_name'>{/*nft_name*/}</span>
        </div>
        <div className="image">
            <img className="photo" src='https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31' alt="nft"></img>
        </div>
        <div className='owner'>
            <h4>Owned by</h4>
            <a href='/'>{/*user*/}</a>
        </div>
        <span className="TradeStation--header">
            Sale ends 2022년 12월 29일 at 오전 8:06 GMT+9
            <div className="Timer-numbers">02  17  06  24</div>
            <div className="Timer-string">Days  Hours  Minutes  Seconds</div>
            </span>
        <div className="TradeStation--main">
            <div className="TradeStation--ask-label">Current price</div>
            <div className="TradeStation--price-container">
                0.13
                ETH
                $158.66
            </div>
            <div>
                <button className='add_to_cart'>Add to cart</button>
            </div>
            <div>
                <button className='make_offer'>Make offer</button>
            </div>
        </div>
        <button className="Header listing-panel" type="button">
            <span>Listings</span>
        </button>
        <div className="Body listing-panel-header">Price &nbsp;USD Price &nbsp;Expiration</div>
        <div className="Body listing-panel-main">0.13 ETH &nbsp; $158.66 &nbsp;3days</div>
        <button className="Header Description-panel">
            <span>Description</span>
        </button>
        <div className="Body Description-panel">
            <span>By LaidBackLlamas</span>
            <p>This NFT is a Limited Edition Christmas Lady Llama (Official
            Collectors NFT) /50.</p>
        </div>
        <button className="Header Details-panel">
            <span>Details</span>
        </button>
        <div className=""></div>
        </div>
    );
}
export default NFTdetails