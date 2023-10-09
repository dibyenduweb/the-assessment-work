
const Review = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Customer Reviwe</h1>
            <div className="lg:flex justify-around mt-8">
            <div>
            <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
                 <p className="w-96  ">Overall, Ethereal Echoes is a musical masterpiece that has the power to transport you to otherworldly realms. It s a must-listen for anyone seeking a serene escape from the hustle and bustle of everyday life.</p>
                 <h2 className="text-1xl text-red-600">Reviewer: Emily Smith</h2>
            </div> 

            <div>
            <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
                 <p className="w-96  ">I ve been grooving to the infectious rhythms of Funky Fusion, the latest album by The Groove Masters. From start to finish, this album oozes funk and soul, making it impossible not to tap your feet and bob your head.</p>
                 <h2 className="text-1xl text-red-600">Reviewer: Mike Johnson</h2>
            </div> 

            <div>
            <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
</div>
                 <p className="w-96  ">I recently had the pleasure of immersing myself in the sonic universe of Synthwave Odyssey, and it s safe to say that this album exceeded all my expectations. If you re a fan of nostalgic 80s synth-pop with a modern twist, this is a must-listen.</p>
                 <h2 className="text-1xl text-red-600">Reviewer: Sarah Adams</h2>
            </div>         
        </div>  
  </div>

    );
};

export default Review;