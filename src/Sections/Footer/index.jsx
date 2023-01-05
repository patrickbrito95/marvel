import React from 'react';
import './styles.css';

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

            </div>
        </div>
    )
}

export default Footer;