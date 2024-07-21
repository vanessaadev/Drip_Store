import React, {useState} from 'react';
import './SlideShoes.css'
import Imagem1 from "../../../public/produc-image-1.jpeg"
import Imagem2 from "../../../public/produc-image-2.jpeg"
import Imagem3 from "../../../public/produc-image-3.jpeg"
import Imagem4 from "../../../public/produc-image-4.jpeg"
import Imagem5 from "../../../public/produc-image-5.jpeg"


export default function SlideShoes() {
    const photos = [Imagem1, Imagem2, Imagem3, Imagem4, Imagem5];
    
    return (
        <div className="photos-container">
        {photos.map((mostrarPhoto, index) => (
            <img key={index} src={mostrarPhoto} className='configPhotos'/>
        ))}
        </div>
    )
}



