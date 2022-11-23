import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../../AuthContext/AuthPorvider';

const CustomerReview = ({name}) => {
    const {user} = useContext(AuthContext)

    const handleForm = event =>{
        event.preventDefault()

        const form = event.target
        const userName = form.name.value;
        const userEmail = form.email.value;
        const mobile = form.mobile.value;
        const serviceName = form.servicename.value;
        const message = form.message.value;

        const review = {
            userName,
            userEmail,
            mobile,
            serviceName,
            message
        }

        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(() =>{
            toast.success('your review is successfully done');
            form.reset()
        })
        .catch(err => console.log(err))

    }
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl p-20">
                <div>
                    <h1 className='text-center my-4 text-2xl text-primary'>Write Your Review</h1>
                </div>
                <form onSubmit={handleForm}>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                        {
                            user?.displayName ? <input type="text" name="name" readOnly defaultValue={user?.displayName} className="input input-bordered w-full" /> :
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                        }
                        {
                            user?.email?<input type="text" name="email" defaultValue={user.email} readOnly className="input input-bordered w-full" />:
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" required/>
                        }
                        <input type="text" name="mobile" placeholder="mobile" className="input input-bordered w-full" required/>
                        <input type="text" name="servicename" defaultValue={name} readOnly className="input input-bordered w-full" />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered mt-4 w-full" placeholder="Write Your review..."></textarea>
                    <button className='btn btn-primary my-4'>Submit</button>
                    <Toaster></Toaster>
                </form>
            </div>
        </div>
    );
};

export default CustomerReview;