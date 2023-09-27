import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";


const DonationDetails = () => {
    const [cart, setCart] = useState();

    const {id} = useParams();
    // console.log(typeof(id));
    const donations = useLoaderData();


    useEffect(() => {
        
        const findDonattion = donations.find((cart) => cart.id === parseInt(id));

        setCart(findDonattion);

    },[id, donations]);


//  console.log(cart);

    return (
        <>
          
          <div> 
            <AddToCart  cart= {cart}></AddToCart>
           </div>
            
        </>
    );
};

export default DonationDetails;