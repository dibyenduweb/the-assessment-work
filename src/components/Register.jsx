import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Header from "./Home/Header";
import { FaEye,FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [regError, setRegError] = useState('');
  const [succses, setSuccses] = useState('');
  const [viewPassword, setViewPassword] = useState(false);


  const {createtUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if(password.length <6){
          setRegError('Passward must be 6 caractor or number');
          return;
        }
        else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
              setRegError('your password shoud be like this Example1@');
              return;
        }
      //rest 
      setRegError('');
      setSuccses('');

        createtUser(email, password)
      .then( result =>{
        console.log(result.user);
        setSuccses('Account created succsesfully')
      })
      .catch(error =>{
        console.error(error);
        // setRegError(error.message);
        setRegError('email id allradey use');
        

      })

    }

    return (
      <>
      <Header></Header>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
           <form onSubmit={handleRegister}>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input 
                type={ viewPassword ? "text" : "password" }
                name="password" 
                placeholder="password" 
                className="input input-bordered" required />
                <span className="absolute top-4 right-3 " onClick={ () => setViewPassword(! viewPassword)}>
                  {
                     viewPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                     
                  }
                </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">regiseter</button>
              </div>
           </form>
           {
            regError && <p className="text-red-500">{regError}</p>
           }
           {
            succses &&  <p className="text-green-500">{succses}</p>
           }
           <p>Allrady have account<Link to="/login"><button className='btn '>Login</button></Link></p>
            </div>
          </div>
        </div>
      </div></>
    );
};

export default Register;