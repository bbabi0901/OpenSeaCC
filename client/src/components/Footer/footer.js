import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div class="footer">
        <div class="stay_in_the_loop">
          {/* <!--sign up--> */}
          <h3>Stay in the loop</h3>
          <h4>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </h4>
          <input></input>
          <button>Sign up</button>
          {/* <!--Join the community--> */}
        </div>
        <div class="opensea">
          {/* <!--intro--> */}
          <a class="nav_logo" href="/">
            <img
              height="40"
              width="40"
              src="https://opensea.io/static/images/logos/opensea-white.svg"
            />
          </a>
          <h4>OpenSea?</h4>
          <h5>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </h5>
        </div>

        <h6>© 2018 - 2022 Ozone Networks, Inc</h6>
        <h6>
          <a href="">Privacy Policy</a>
        </h6>
        <h6>
          <a href="">Terms of Service</a>
        </h6>
      </div>{" "}
    </div>
  );
}

export default Footer;
