import React from 'react';
import './styles.css';

const CarrouselCard = (props) => {
    return(
         <div className='wrapperImages'>
            <div className='label-movies'>
                <span className='movies'>MOVIES</span>
            </div>
            <img className='image' width={240} src={props.src} />
            <div className='label-name'>
                <span className='name'>{props.name}</span>
            </div>
        </div>
    )
}

export default CarrouselCard;