import React from 'react';
import './styles.css';
import CardsFanMarvelImg from '../../Assets/cards-fan-desktop.png'

const CardsFanMarvel = () => {
    return(
        <div className='wrapper-cards-fan'>
            <h1 className='title-cards-fan'>MARVEL MASTERCARD</h1>
            <h4 className='subtitle-cards-fan'>Desbloqueie seus super-poderes</h4>
            <img className='card-marvel-image' src={CardsFanMarvelImg} alt="Cartões da Marvel" />
            <div className='wrapper-buttons'>
                <button className='call-to-action'>CADASTRE-SE AGORA</button>
                <button className='more-information'>ENTENDA COMO FUNCIONA</button>
            </div>
        </div>
    )
}

export default CardsFanMarvel;