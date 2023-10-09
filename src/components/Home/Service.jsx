/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service =({music}) => {
console.log(music);

return (
  <>
        <div>
        <div className="lg:p-14  w-72">
            <div className="card w-96 bg-base-100 shadow-2xl">
  <figure className="px-10 ">
    <img  src={music.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{music.name}</h2>
    <p>{music.short_description}</p>
    <p>Price: ${music.price}</p>
    <div className="card-actions">
      <Link to={`/details/${music.id}`}>
      <button className="btn btn-primary">{music.details_button}</button>
      </Link>
    </div>
  </div>
</div>
         </div>
        </div>
  </>
    );
};

export default Service;