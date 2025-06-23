/* eslint-disable no-unused-vars */
import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './styles.css';
export default function StarRating({noOFStars = 5}){

    const [rating , setRating] = useState(0);
    const [hover , setHover] = useState(0);

    function handleClick(currentIndex){
        setRating(currentIndex);
    };

    function handleMouseMove(currentIndex){
        setHover(currentIndex);
    };
    function handleMouseLeave(){
        setHover(rating);
    }


    return <div className="star-rating">
        {
            [...Array(noOFStars)].map((_,index) => {

                return <FaStar
                    key={index}
                    className={index <= (rating || hover) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseMove(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                />
            })
        }
    </div>
}