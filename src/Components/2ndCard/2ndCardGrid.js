import React from 'react'
import SecondCard from "./2ndCard"


const secondCardData =[
 {secondCardImage: "Group 50",
 secondCardName:"Streetwear Collections",
},
 {secondCardImage: "Group 51",
 secondCardName:"Striped T-Shirts",
},
 {secondCardImage: "Group 52",
 secondCardName:"Round Neck T-Shirts",
},
 {secondCardImage: "Group 55",
 secondCardName:"Printed T-Shirts"
},
 {secondCardImage: "Group 54",
 secondCardName:"Oversized T-Shirts"
},
 {secondCardImage: "Group 53",
 secondCardName:"Half Sleeves T-Shirts"
},]

export default function SecondCardGrid() {
  return (
    <div className='secondCardGridParent'>
        {secondCardData.map((currentCard)=>{
            return(
                <SecondCard
                image={currentCard.secondCardImage}
                name={currentCard.secondCardName}
                />

            )
        })}
    </div>
  )
}
