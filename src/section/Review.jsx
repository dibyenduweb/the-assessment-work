
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
                 <p className="w-80  ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas quod amet soluta rem harum nostrum libero,</p>
                 <h2 className="text-2xl">Mr. Smith</h2>
            </div> 

            <div>
            <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
                 <p className="w-80  ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas quod amet soluta rem harum nostrum libero,</p>
                 <h2 className="text-2xl">Mr. Smith</h2>
            </div> 

            <div>
            <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
</div>
                 <p className="w-80  ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas quod amet soluta rem harum nostrum libero,</p>
                 <h2 className="text-2xl">Mr. Smith</h2>
            </div>         
        </div>  
  </div>

    );
};

export default Review;