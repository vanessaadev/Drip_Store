import './Footer.css'

import vectorImage from '../../assets/logo-footer.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import TwitterIcon from '../../assets/twitter.svg'; 

export function Footer() {
    return (
        <>
            <footer>
                <div className="container-1">
                    <div className="container-logo">
                        <div className="image-container">
                            <img className="logo" src={vectorImage} alt="logo" />
                            {/* <div className="text-logo">
                                <h3>Digital Store</h3>
                            </div> */}
                        </div>
                    </div>

                    <div className="text-container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni fuga sunt culpa perferendis tempore, numquam dolor accusantium!
                    </div>
                    <div className="icons-sociais">
                        <img src={FacebookIcon} alt="facebook" />
                        <img src={InstagramIcon} alt="instagram" />
                        <img src={TwitterIcon} alt="twitter" />
                    </div>
                </div>

                <div className="container-2">
                    <div className="container-info">
                        <div className="conteudo">
                            <div className="title">
                                <span>Informação</span>
                            </div>
                            <span>Sobre Drip Store</span>
                            <span>Segurança</span>
                            <span>Wishlist</span>
                            <span>Blog</span>
                            <span>Trabalhe Conosco</span>
                            <span>Meus Pedidos</span>
                        </div>
                    </div>

                    <div className="container-info">
                        <div className="conteudo">
                            <div className="title">
                                <span>Categorias</span>
                            </div>
                            <span>Camisetas</span>
                            <span>Calças</span>
                            <span>Bonés</span>
                            <span>Headphones</span>
                            <span>Tênis</span>
                        </div>
                    </div>

                    <div className="container-info container-contato">
                        <div className="conteudo">
                            <div className="title">
                                <span>Contato</span>
                            </div>
                            <span className="endereco">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</span>
                            <span>(85) 3051-3411</span>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="data-footer">
                    <span>@ 2024 Digital College</span>
                </div>
            </footer>
        </>
    );
}