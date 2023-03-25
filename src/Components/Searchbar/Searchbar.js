import React from "react";

export default function Searchbar() {
  return (
    <div className="offerdeals">
      <div className="offerdeals_text">
        <h5>Subscribe to get updates on exciting offers</h5>
        <h5>& deals</h5>
      </div>

      <div className="offerdeals_subscribe">

        <input type="text" placeholder="Enter your email"/>
        <button>Subscribe</button>
      </div>
    </div>
  );
}
