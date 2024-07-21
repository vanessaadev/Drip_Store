import React, {useState} from "react";
import { FaStar } from 'react-icons/fa'

export default function Stars() {
const [rating, setRating] = useState(3) 
const [rateColor, setColor] = useState(null)

    return (
        <>
        {[...Array(5)].map((star, index) => {
            const currentRate = index + 1
            return (
                <label key={index}>

                <FaStar color={currentRate <= (rateColor || rating) ? "orange" : "grey"}/>
                </label>
                
            )
        })}
        
        
        
        </>
    )
}