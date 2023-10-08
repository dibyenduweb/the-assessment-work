import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";

const ServiceDetails = () => {
    const [music, setMusic] = useState({})
    const {id} = useParams();
    console.log(id);
    
    const musicdata = useLoaderData()
    console.log(musicdata);
    
    useEffect(() => {
        const getMusic = musicdata?.find(music=>music.id == id);
        console.log(getMusic);
        setMusic(getMusic);

    },[id, musicdata]);

    console.log(music);


    return (
        <div>
            <Header></Header>
            <img src={music.image} alt="" />
            <h1>{music.name}</h1>
            <p>{music.short_description}</p>
        </div>
    );
};

export default ServiceDetails;