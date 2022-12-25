const MyPage = () => {
  return <div className="mypage">
      <div className="background_image">
        <div className="slide">
          <img src="https://cdn.mos.cms.futurecdn.net/VECkttyB7rAa9qSkxMiB8f.jpg" alt=""></img>
        </div>
      </div>
      <div className="user_image">
        <img src="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png" alt=""></img>
      </div>
      <div className="user_info">
        <div className="name">
          <h1>User_name</h1>
          <div className="wallet_address">
            <i className="fa-brands fa-ethereum"></i> 
            <h5>accounts</h5>
            <div className="created_date">
              <h5>Joined December 2022</h5>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="user_menu">
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
          <select >
            <option value='Offers made'>More</option>
            <option value='Offers made'>Offers made</option>
            <option value='Offers received'>Offers received</option>
            <option value='Active Listings'>Active Listings</option>
            <option value='Inactive Listings'>Inactive Listings</option>
            <option value='Hidden'>Hidden</option>
          </select>
        </div>
      </div>
      <div className="display">
        <div className="NFT_101">
          <div className="NFT_101_1">1</div>
          <div className="NFT_101_1">2</div>
          <div className="NFT_101_1">3</div>
          <div className="NFT_101_1">4</div>
          <div className="NFT_101_1">5</div>
          <div className="NFT_101_1">6</div>
        </div>
        <div className="NFT_101">
          <div className="NFT_101_1">1</div>
          <div className="NFT_101_1">2</div>
          <div className="NFT_101_1">3</div>
          <div className="NFT_101_1">4</div>
          <div className="NFT_101_1">5</div>
          <div className="NFT_101_1">6</div>
        </div>
        <div className="NFT_101">
          <div className="NFT_101_1">1</div>
          <div className="NFT_101_1">2</div>
          <div className="NFT_101_1">3</div>
          <div className="NFT_101_1">4</div>
          <div className="NFT_101_1">5</div>
          <div className="NFT_101_1">6</div>
        </div>

      </div>
    </div>;
};

export default MyPage;
