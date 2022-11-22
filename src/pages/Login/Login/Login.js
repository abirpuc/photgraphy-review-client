import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthPorvider';
import UseTitle from '../../../hook/UseTitle';

const Login = () => {
    UseTitle('login')
    const provider = new GoogleAuthProvider();
    const {singInWithGoogle} = useContext(AuthContext)
    const handleForm = event =>{
        event.preventDefault();

        const form = event.target;

    }

    singInWithGoogle(provider)
    .then()
    .catch()
   
    return (
        <div className='mt-30 w-3/4 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login with!</h1>
                        <div className='mt-8 w-full'>
                            <button onClick={singInWithGoogle} className='btn btn-outline btn-error w-3/4 my-2'>Google</button>
                            <button className='btn btn-outline btn-primary w-3/4 my-2'>Facebook</button>
                            <button className='btn btn-outline btn-accent w-3/4 my-2'>GitHub</button>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='p-4 w-3/4 mx-auto'>I am new in this site? <span className='text-xl text-green-600'><Link to="/singup">Create new Account</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;