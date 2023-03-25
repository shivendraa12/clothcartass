import React from 'react'

export default function SecondCard(props) {
  return (
    <div className='Card'>
        <div className="secondCard_img">
            <img src={`/assets/${props.image}.png`} alt=""/>
            <div className="secondCard_name">
          <p>{props.name}</p>
        </div>
        </div>
        
    </div>
  )
}
