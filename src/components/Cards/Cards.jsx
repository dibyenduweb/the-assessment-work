/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Cards = ({cards}) => {
   
    return (
       
      <Link to={`/donatedata/${cards.id}`}>
        <div className=" card rounded-lg shadow-2xl" style={{background:cards.card_bg_color}}>
        <img src={cards.image} alt="" />
        <p style={{color: cards.text_color,
        background:cards.category_bg_color
                    }} className= "p-1 w-20 ml-6 mt-2 rounded text-center font-bold" >{cards.category}</p>
        <h1 style={{color: cards.text_color
                    }} className="p-2 font-bold">{cards.title}</h1>
        </div>    
        </Link>   

    );
};

export default Cards;