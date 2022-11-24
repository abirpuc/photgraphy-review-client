import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthPorvider';
import UseTitle from '../../hook/UseTitle';
import ReviewItem from './ReviewItem';

const MyReview = () => {
    UseTitle('my-Review');
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    const handleDelete = (id) =>{
        const reviewDelete = window.confirm("Are want to delete this")

        if(reviewDelete){
            fetch(`http://localhost:5000/review/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('your delete successfully done!')
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReviews(remaining)
                }
            })
        }
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/review?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
    return (
        <div className='w-3/4 mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewItem
                                key={review._id}
                                review = {review}
                                handleDelete={handleDelete}
                            ></ReviewItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;