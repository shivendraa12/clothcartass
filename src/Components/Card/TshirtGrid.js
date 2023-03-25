import React from "react";
import Button from "../Button/Button";
import Card from "./Card";




const TshirtGrid = ({tshirtData,tShirtGridParent}) => {
  return (
    <>
    <div className="tshirtGridHeading">
<div className="line1"></div>
<h2>{tShirtGridParent}</h2>
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
      <Button/>
      {/* <div className="tshirtgridparent">
        {tshirtData.map((currentTshirt) => {
         
          return hELLO;
        })}
      </div> */}
    </>
  );
};

export default TshirtGrid
