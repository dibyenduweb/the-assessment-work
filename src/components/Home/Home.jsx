
import Contact from "../../section/Contact";
import Review from "../../section/Review";
import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Header from "./Header";
import Service from "./Service";


const Home = () => {
    return (
        <>
        <div className="h-[500px] relative text-white bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/hKsgV7K/photo-1614149162883-504ce4d13909.jpg)'}}>
        <Header></Header>
        <Banner></Banner>
        </div>
       <Service></Service>
     <Review></Review>
     <Contact></Contact>
     <Footer></Footer>
            
            </>
       
    );
};

export default Home;