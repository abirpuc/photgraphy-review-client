import React from 'react';

const BannerItem = ({banner}) => {
    const {id,img,prev,next} = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-4/5">
            <img src={img} className="w-full rounded-md h-full" alt=''/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;