import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-center">Opps data found go back to home</h2>
            <div className="ml-96">
  <figure><img src={'https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif'} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="card-actions ml-[300px]">
     
      <Link to='/'><button className="btn btn-primary">Go back Home</button></Link>
    </div>
  </div>
</div>
    </div>
    );
};

export default ErrorPage;