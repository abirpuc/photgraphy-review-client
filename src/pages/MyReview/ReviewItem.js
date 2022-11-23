import React from 'react';

const ReviewItem = ({review}) => {
    const {_id,serviceName,message} = review;
    return (
        <tr>
            <th>
                <label>
                    <button className='btn  btn-ghost btn-xs'>X</button>
                </label>
            </th>
            <td>
                {serviceName}
            </td>
            <td>
                {message}
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Edits</button>
            </th>
        </tr>
    );
};

export default ReviewItem;