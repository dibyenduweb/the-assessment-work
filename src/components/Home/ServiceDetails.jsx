import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";

const ServiceDetails = () => {
    const [music, setMusic] = useState({})
    const {id} = useParams();
    //console.log(id);
    
    const musicdata = useLoaderData()
    //console.log(musicdata);
    
    useEffect(() => {
        const getMusic = musicdata?.find(music=>music.id == id);
        //console.log(getMusic);
        setMusic(getMusic);

    },[id, musicdata]);

    //console.log(music);


    return (
        <div>
            <Header></Header>
            <div className="hero h-16 mt-24">
  <div className="hero-content flex-col lg:flex-row">
    <img src={music.image} className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{music.name}</h1>
      <p className="py-2">Singer Name: {music.singer}</p>
      <p className="py-2">Total hour: {music.duration_hours}</p>
      <p className="py-2">Songs: {music.songs}</p>

      <p>Price ${music.price}</p>
      {/* <button className="btn btn-primary">{music.button}</button> */}

{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>{music.button}</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations!🎊🎉🎉🎉</h3>
    <p className="py-4">Thank you for your Booking we accepted your booking.
we contact with  you shortly.🙏😊</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-pr">Close</button>
      </form>
    </div>
  </div>
</dialog>





    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;