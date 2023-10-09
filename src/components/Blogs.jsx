import { useLoaderData } from "react-router-dom";

import Header from "./Home/Header";




const Blogs = () => {
    const blogsdata = useLoaderData();
    console.log(blogsdata);







    return (
        <div>
            <Header></Header>
            <h2 className="text-center font-bold text-4xl my-4">Introduce our Blogs</h2>

            <div>
               {
                blogsdata.map(blog => 
                
                (
                    <div key={blog.id} >
                       <div className="card w-[900px] mx-auto">
  <figure><img src={blog.image} alt="blog" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {blog.name}
      <div className="badge badge-secondary">New Post</div>
    </h2>
    <p>{blog.description}</p>
   <button className="btn btn-ghost">Read more</button>
    
  </div>
</div>
                    
                    </div>
                ))
               }
            </div>
        </div>
    );
};

export default Blogs;