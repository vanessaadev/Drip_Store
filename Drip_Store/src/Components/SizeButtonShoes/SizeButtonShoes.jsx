import React, { useState } from 'react';
import './SizeButtonShoes.css'

const ShoeSizeButtons = () => {
  // Tamanhos disponíveis
  const sizes = ["39", "40", "41", "42", "43"];

  // Estado para armazenar o tamanho selecionado
  const [selectedSize, setSelectedSize] = useState("");

  // Função para atualizar o estado quando um tamanho for selecionado
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>   
      <div className='sizeButton'>
        {sizes.map((size) => (
          <button
            key={size}
            style={{ margin: "5px" }}
            onClick={() => handleSizeSelect(size)}
            className={selectedSize === size ? "selected" : ""}
          >
            {size}
          </button>
        ))}
      </div>
      <div className='RespSizeShoes'>
      {selectedSize && <p>Tamanho selecionado: <span>{selectedSize}</span></p>}
      </div>
    </div>
  );
};

export default ShoeSizeButtons;
