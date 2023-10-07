/* eslint-disable no-unused-vars */

import react from "react";
import { useLoaderData } from "react-router-dom";


const Service =() => {
const cards = useLoaderData();
console.log(cards);
 


return (
        <div className="p-8">
            <h1>Service</h1>
            <div>
         
            </div>
            <div>

  </div>
  </div>
    );
};

export default Service;