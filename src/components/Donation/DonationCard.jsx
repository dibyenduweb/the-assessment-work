/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({cart}) => {
    const { id, title,price,image, newimage, category, description } = cart || {};

    return (
        <>
       
      <div className='p-16'>
      <div className='lg:flex lg:items-center gap-4  lg:w-[600px] rounded-md' style={{background:cart.card_bg_color}}>
        <div>
            <img className='lg:w-[220px] lg:h-[200px] ' src={image} alt="" />
        </div>
        <div>
            <p className= "p-1 w-20 mt-2 rounded text-center font-bold" style={{color: cart.text_color,
        background:cart.category_bg_color
                    }} >{category}</p>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-xl' style={{color: cart.text_color}}>  ${price}</p>
            <Link to={`/donatedata/${cart.id}`}> 
            <button style={{background: cart.text_color}} className='bg-orange-800 px-3 rounded-md text-white '>View Details</button>
            </Link>
        </div>
      </div>
      </div>
        
        
        </>
    );
};

export default DonationCard;