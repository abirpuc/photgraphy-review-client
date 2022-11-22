import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthPorvider';
import UseTitle from '../../hook/UseTitle';

const Singup = () => {
    UseTitle('Sing up');
    const {createUser} = useContext(AuthContext);

    const handleForm = event =>{
        event.preventDefault();
        const form = event.target;

        const name =form.name.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        const password = form.password.value;

        console.log(name,email,password);
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(err => console.message(err))
    }
    return (
        <div className='w-3/4 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sing UP now!</h1>
                        <p>sing up now for get membership our photography service, contact with us easily for photography and give us review </p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photourl" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing UP</button>
                            </div>
                        </form>
                        <div className='text-center mx-auto py-4'>
                            <p>Already Have an Account?<Link to="/login"><span className='text-2xl text-green-400'>Login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;