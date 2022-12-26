import './NFTdetails.css'
const NFTdetails = () => {
    return(
        <div className="nft_details">
            <img src='https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31'></img>
        <div className='nft_name'></div>
        <div className='owner'>
            <h4>Owned by</h4>
            <a href='/'>{/*user*/}</a>
        </div>
        <div className='make_offer'>Make offer</div>
        <div className='add_to_cart'></div>

        </div>
    );
}
export default NFTdetails