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
            <div className='top'>
                <div className='top_left'>
                    <img  className="image" src='https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31' alt="nft"></img>
                    <div className='floor_left'>
                    <div>
                        <h4>Description</h4>
                        <div>
                            <h4>By</h4> 
                            <a href='/'>
                                <h4>LaidBackLlamas</h4>
                            </a>
                        <h4>This NFT is a Limited Edition Christmas Lady Llama (Official Collectors NFT) /50.</h4>
                        </div>
                        <h4>Details</h4>
                    </div>
                </div>

                </div>
                <div className='top_right'>

                    <div className='info'>
                        <div className='nft_name'>{/*nft_name*/}</div>
                        <div className='owner'>
                            <h4>Created by</h4>
                            <a href='/'>{/*this.props.owner*/}</a>
                        </div>
                        <div className='creater'>
                            <h4>Owned by</h4>
                            <a href='/'>{/*this.props.creater*/}</a>
                        </div>
                    </div>
                    <div className='sale_ends'>
                        <h4>Trade ends{/*this.props.upt_dt*/}</h4>
                        <h4>02  17  06  24</h4>
                        <h4>Days  Hours  Minutes  Seconds</h4>
                    </div>
                    <div className='buy_sell'>
                        <h4>Current price</h4>
                        <h4>0.13 ETH ${/*this.props.nft_price*/}</h4>
                        <button className='add_to_cart'><h3>Add to cart</h3></button>
                        <button className='make_offer'><h3>Make offer</h3></button>
                    </div>
                    <div className='price_history'>

                    </div>
                    <div className='floor_right'>
                    <div className='listing'>
                        <button>
                            Listings
                        </button>
                        <h4>Price &nbsp;USD Price &nbsp;Expiration</h4>
                        <h4>0.13 ETH &nbsp; $158.66 &nbsp;3days</h4>
                    </div>
                </div>
                </div>      



                  
            </div>
        </div>
    );
}
export default NFTdetails