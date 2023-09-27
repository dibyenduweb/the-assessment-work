
const Hero = () => {
    return (

    <div className="hero lg:min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Kj85GSH/Rectangle-4281.png)'}}>
  <div className="hero-overlay bg-opacity-95"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-full">
      <h1 className="mb-5 lg:text-5xl font-bold ">I Grow By Helping People In Need</h1>
    
     <div className="flex">
     <input  type="text" placeholder="Search here...." className="input input-bordered lg:w-full lg:ml-36 max-w-xs text-black" />
     <button className="btn bg-[#FF444A] text-white border-0	">Search</button>
     </div>     
    </div>
  </div>
  <div>
 
  </div>


</div>

    );
};

export default Hero;


