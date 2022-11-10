import React, {useState} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataMainPhotos} from "../data";
import firstImg from '../homeImages/main1.jpg'

function ImgSlider(props){
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: firstImg,
        }));
    };
    return(
        <div className="img-slider">
            <Slider {...settings}>
                {dataMainPhotos.map((item) => (
                <div className="card">

                    <img
                        src={
                            defaultImage[item.id] === item.id
                                ? defaultImage.linkDefault
                                : item.imgSrc
                        }
                        alt={item.title}
                        onError={handleErrorImage}
                    />
                </div>
                ))}
            </Slider>

        </div>
    )
}

export default ImgSlider;

