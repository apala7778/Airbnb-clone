import React from 'react'
//import play from '../images/play.png'
import star from '../images/Star.png'



export default function Card (props)  {
   let badgetext
   if(props.item.openSpots ===0) {
   badgetext = "SOLD OUT"
   }
   else if (props.item.location === "Online"){
    badgetext="ONLINE"
   }

   
    
  return (
    <div className="card">
      {badgetext && <div className='card--badge'>{badgetext}</div>}
     <img src={`../images/${props.item.coverimg}`} className="card--image" />
     <div className='card--stats'>
        <img src={star}  className='card--star'/>
        <span> {props.item.stats.rating}</span>
        <span className='gray'> ({props.item.stats.reviewCount}) •</span>
        <span className='gray'> {props.item.location} </span>
     </div>
     <p className='card--title'> {props.item.title}</p>
     <p className='card--rate'><span className='bold'>From {props.item.price} </span> / person</p>
    </div>
  )
}

