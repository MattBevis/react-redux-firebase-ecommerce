import React from "react";
import ShopMen from "./../../assets/shopMens.jpg";
import ShopWoman from "./../../assets/shopWomens.jpg";

import "./styles.scss";

function Directory(props) {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopWoman})` }}>
          <a href="#">Shop Womens</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
          <a href="#">Shop Mens</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
