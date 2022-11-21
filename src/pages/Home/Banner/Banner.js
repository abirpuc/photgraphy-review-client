import React from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const BannerData =[
        {
            id: 1,
            img: 'https://showme.co.za/pretoria/files/2016/03/wildlife-photography.jpg',
            prev: 4,
            next: 2
        },
        {
            id: 2,
            img: 'https://i1.adis.ws/i/canon/canon-pro-candid-wedding-photography-1-1140?w=1140&qlt=70&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
            prev: 1,
            next: 3
        },
        {
            id: 3,
            img: 'https://shotkit.com/wp-content/uploads/2020/09/event-photography-8.jpg',
            prev: 2,
            next: 4
        },
        {
            id: 4,
            img: 'https://images.squarespace-cdn.com/content/v1/5727974359827e5304ee8ddf/1565809429643-6KPITFQKM121VZKHDHWX/cake-cutting-birthday.jpg',
            prev: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full mt-6">
           {
            BannerData.map(banner => <BannerItem
                key={banner.id}
                banner = {banner}
            ></BannerItem>)
           }
        </div>
    );
};

export default Banner;