import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthPorvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext)
    const { _id, message, userName, userEmail, mobile, serviceName } = useLoaderData();
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const userName = form.name.value;
        const userEmail = form.email.value;
        const mobile = form.mobile.value;
        const serviceName = form.servicename.value;
        const description = form.message.value;

        const updateReview = {
            userName,
            userEmail,
            mobile,
            serviceName,
            message:description
        }


        fetch(`https://photography-review-server-omega.vercel.app/review/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Update Successfully');
            form.reset()
        })
    }
    return (
        <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl p-20">
            <div>
                <h1 className='text-center my-4 text-2xl text-primary'>Update Your Review</h1>
            </div>
            <form onSubmit={handleForm}>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                    <input type="text" name="name" defaultValue={userName} className="input input-bordered w-full" />
                    <input type="text" name="email" defaultValue={userEmail} className="input input-bordered w-full" required />
                    <input type="text" name="mobile" defaultValue={mobile} className="input input-bordered w-full" required />
                    <input type="text" name="servicename" defaultValue={serviceName} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name="message" className="textarea textarea-bordered mt-4 w-full" defaultValue={message}></textarea>
                <button className='btn btn-primary my-4'>Submit</button>
                <Toaster></Toaster>
            </form>
        </div>
    );
};

export default UpdateReview;