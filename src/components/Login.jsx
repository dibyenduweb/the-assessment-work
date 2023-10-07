/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Header from './Home/Header';

const Login = () => {
  const [logError, setLogError] = useState('');
  const [succses, setSuccses] = useState('');
  
  const {signInUser, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();

        const handleLogin = e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);

            signInUser(email, password)
            .then(result =>{
              console.log(result.user);
              setSuccses('Logged in Successfully')
              e.target.reset();
              navigate('/');
            })
            .catch(error => {
              console.error(error);
              // setLogError(error.message);
              setLogError("Invalid input please check");
        })
      }
      const handGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        })
      }

    return (
      <>
      <Header></Header>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
     <form onSubmit={handleLogin}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
     </form>
     {
            logError && <p className="text-red-500">{logError}</p>
           }
           {
            succses &&  <p className="text-green-500">{succses}</p>
           }
     <p>Create new account<Link to="/register"><button className='btn '>Register</button></Link></p>
      <p><button onClick={handGoogleSignIn} className='btn btn-ghost'>Google</button></p>
      </div>
    </div>
  </div>
</div></>
    );
};

export default Login;