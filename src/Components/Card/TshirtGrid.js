import React from "react";
import Card from "./Card";

const tshirtData = [
  {
    tshirtImage: "Rectangle 3",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 4",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 5",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 6",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 3",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 4",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 5",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 6",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
];

export const TshirtGrid = () => {
  return (
    <>
    <div className="tshirtGridHeading">
<div className="line1"></div>
<h2>Trending T-Shirts</h2>
<div className="line2"></div>
    </div>
      
      <div className="tshirtgridparent">
        {tshirtData.map((currentTshirt) => {
          return (
            <Card
              tshirtImage={currentTshirt.tshirtImage}
              tshirtBrandName={currentTshirt.tshirtBrandName}
              tshirtStyle={currentTshirt.tshirtStyle}
              tshirtPrice={currentTshirt.tshirtPrice}
              tshirtCutOffPrice={currentTshirt.tshirtCutOffPrice}
            />
          );
        })}
      </div>
      {/* <div className="tshirtgridparent">
        {tshirtData.map((currentTshirt) => {
         
          return hELLO;
        })}
      </div> */}
    </>
  );
};
