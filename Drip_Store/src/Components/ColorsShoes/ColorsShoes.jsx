import React, { useState } from "react";
import './ColorShoes.css'

export default function Stars() {
    const [selectedColor, setSelectedColor] = useState(null); // Estado para armazenar a cor selecionada
    const colorShoes = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]; // Array de cores para as bolas

    const handleColorSelection = (color) => {
        setSelectedColor(color === selectedColor ? null : color); // Toggle da seleção da cor
    };

    return (
        <div className="containerCS">
            {colorShoes.map((color, index) => (
                <div className="infoCircle"
                    key={index}
                    style={{
                        backgroundColor: color,
                        border: selectedColor === color ? "2px solid #C92071" : "none"
                    }}
                    onClick={() => handleColorSelection(color)}
                >
                </div>
            ))}
        </div>
    );
}
