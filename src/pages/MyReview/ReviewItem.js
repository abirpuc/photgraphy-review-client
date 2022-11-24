import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = ({review,handleDelete}) => {
    const {_id,serviceName,message} = review;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn  btn-ghost btn-xs'>X</button>
                </label>
            </th>
            <td>
                {serviceName}
            </td>
            <td>
                {message}
            </td>
            <th>
                <Link to={`/updatereview/${_id}`}><button className="btn btn-ghost btn-xs">Edits</button></Link>
            </th>
        </tr>
    );
};

export default ReviewItem;