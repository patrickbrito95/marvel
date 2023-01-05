import React from 'react';
import './styles.css';
import MarvelLogoImg from '../../Assets/marvel-logo.png'
import Icon from '../../Components/Icon';

const Footer = () => {
    return(
        <div>
            <div className='wrapper-newsletter'>
                <div className='red-box'>
                    <h1>RECEBA AS NOVIDADES DA MARVEL</h1>
                </div>
                <div className='newsletter'>
                    <div className='newsletter-title'>
                        <span>Cadastre-se para receber nossas notícias em primeira mão</span>
                    </div>
                    <div className="newsletter-input">
                        <label>SEU MELHOR EMAIL</label>
                        <div>

                        <input placeholder='Informe seu melhor e-mail' />
                        <button>ENVIAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapper-footer'>
                <div className="first-block">
                    <div className='marvel-logo'>
                        <img width={50} height={67} src={MarvelLogoImg} alt="marvel logo" />
                    </div>
                    <div className='about-marvel'>
                        <span>A Marvel</span>
                        <div className='footer-links'>
                            <a>Sobre a Marvel</a>
                            <a>Ajuda</a>
                            <a>Carreiras</a>
                        </div>
                    </div>
                    <div className='media-marvel'>
                    <span>Mídia</span>
                        <div className='footer-links'>
                            <a>Filmes</a>
                            <a>Quadrinhos</a>
                            <a>Programas de TV</a>
                            <a>Jogos</a>
                        </div>
                    </div>
                </div>
                <div className='second-block'>
                    <div className='last-news-blog'>
                    <span>Última do blog</span>
                        <div className='headline-news'>
                            <img width={60} height={60} src="https://pittnews.com/wp-content/uploads/2022/09/O_Marvel_LaMarca_AP-900x600.jpg" />
                            <p>Vingadores confirma grande teoria dos fãs sobre a Marvel...</p>
                        </div>
                        <a>Continuar lendo</a>
                    </div>
                    <div className='follow-us'>
                        <span>Siga a Marvel</span>
                        <div className='social-icons'>
                            <a>
                                <Icon name="facebook" />
                            </a>
                            <a>
                                <Icon name="spotify" />
                            </a>
                            <a>
                                <Icon name="instagram" />
                            </a>
                            <a>
                                <Icon name="youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;