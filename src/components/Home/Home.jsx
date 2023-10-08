
import { useLoaderData } from "react-router-dom";
import Contact from "../../section/custom";
import Review from "../../section/Review";
import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Header from "./Header";
import Service from "./Service";



const Home = () => {
    const musicdata =useLoaderData();

    return (
        <>
        <div className="lg:h-[500px] relative text-white lg:bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/hKsgV7K/photo-1614149162883-504ce4d13909.jpg)'}}>
        <Header></Header>
        <Banner></Banner>
        </div>
        <h1 className="text-4xl font-bold text-center mt-4">Service</h1>
      <div className="grid lg:grid-cols-3">
      {
        musicdata.map(music=> <Service key={musicdata.id} music={music}></Service>)
       }
      </div>
     <Review></Review>
     <Contact></Contact>
     <Footer></Footer>
            
            </>
       
    );
};

export default Home;