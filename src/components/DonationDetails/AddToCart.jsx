/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import swal from "sweetalert";
// import { useParams } from "react-router-dom";
// import Donation from "../Donation/Donation";

const AddToCart = ({cart}) => {
    // console.log(cart);
 const { id, title,price, image,description,text_color  } = cart || {};

const hanleAddToDonation = () => {

    const addedDonationArray =[];


const donationItems =JSON.parse(localStorage.getItem('donation'));

if(!donationItems){
addedDonationArray.push(cart);

localStorage.setItem('donation',JSON.stringify(addedDonationArray));
swal("Thank you", "Donation added successfully ", "success");


}else{
    const isEXits = donationItems.find(cart => cart.id == parseInt(id));
    if(!isEXits){
        addedDonationArray.push(...donationItems,cart);
        localStorage.setItem('donation',JSON.stringify(addedDonationArray));
        swal("Thank you", "Donation added successfully ", "success");
    }
    else{
        swal("Thank you ", "Donation alrady  added ", "error");
    }

}

};


  return (
    <>
        
        <div className="hero w-[1000px] h-[500px] lg:ml-56">
            <img className="w-full h-[500px] :w-96" src={image} alt="" />
            <div className="hero-overlay bg-opacity-80 mt-[400px] h-[100px]"></div>
            <div>

              <button style={{background:text_color}}   onClick={hanleAddToDonation} className="btn  text-white mt-96 item-end mr-[800px]">
                Donate  ${price}
              </button>

            </div>
          </div>
          <div className="lg:ml-56 w-[900px]">
            <h1 className="text-3xl  font-bold mt-4">{title}</h1>
            <p className="mt-4">{description}</p>
          </div>
        
      
    </>
  );
};

export default AddToCart;
