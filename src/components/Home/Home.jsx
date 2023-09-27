import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import Cards from "../Cards/Cards";




// chages
const Home = () => {

    const pageData = useLoaderData();

    
    return (
       <>
        <div>
         <Hero></Hero>
</div>

<div  className="grid lg:grid-cols-4 px-24 gap-8 mt-4 ">
{
    pageData.map(cards => <Cards key={cards.id} cards={cards}></Cards> )

}
</div>



</>

    );
};

export default Home;