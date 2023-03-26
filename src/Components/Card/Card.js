import React, { useState } from "react";

export default function Card(props) {
  console.log(props.tshirtImage);

  const [blurImage, setBlurImage] = useState(false);

  const hoverHandler = () => {
    setBlurImage(true);
  };
  const hoverHandlerInvert = () => {
    setBlurImage(false);
  };
  return (
    <>
      <div className="tshirtcard">
        <div
          className="tshirtImage"
          onMouseEnter={() => hoverHandler()}
          onMouseLeave={() => hoverHandlerInvert()}
        >
          <img src={`/assets/tshirtgrid/${props.tshirtImage}.png`} alt="" />
          {blurImage && (
            <div>
              <div className="blurpage">
                <ul>
                  <li>
                    <img src="/assets/shear.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/killer.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/carry.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="tshirtDetails">
          <div className="tshirtBrandName">{props.tshirtBrandName}</div>
          <div className="tshirtStyle">{props.tshirtStyle}</div>
          <div className="tshirtPrice">
            {props.tshirtPrice} <span>{props.tshirtCutOffPrice}</span>
          </div>
          <div className="tshirtSizes">
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
