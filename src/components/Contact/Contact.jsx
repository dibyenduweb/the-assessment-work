import Header from "../Home/Header";

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-4xl font-bold text-center mt-4">Contact us</h1>
            <div className="text-center py-24 bg-cover" style={{backgroundImage: 'url(https://www.idfreshfood.com/wp-content/uploads/2017/09/contact_us_2.jpg)'}}>
                <h2 className="text-2xl text-black font-bold">Get in Touch</h2>
               
                <input type="text" placeholder="Put your name" className="input input-bordered input-info w-full max-w-xs" />
                <br /> <br />
                <input type="text" placeholder="Put your email" className="input input-bordered input-info w-full max-w-xs" />
               <br /> <br />
                <input type="text" placeholder="Put your message" className="input input-bordered input-lg w-full max-w-xs" />
                <br /> <br />
                <button className="btn btn-secondary">Submit</button>
            </div>
        </div>
    );
};

export default Contact;