import React from 'react';
import Header from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';

// Definindo o componente de layout
const Layout = ({ children }) => {
    return (
        <div>
            {/* Componente do cabeçalho */}
            <Header/>

            {/* Conteúdo dinâmico das páginas */}
            {children}

            {/* Componente do rodapé */}
            <Footer/>
        </div>
    );
};

export default Layout;