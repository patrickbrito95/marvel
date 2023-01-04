import React from 'react';
import './styles.css'

const Card = (props) => {
    return(
        <div className='wrapperImages-card'>
        <div className='label-movies-card'>
            <span className='movies'>MOVIES</span>
        </div>
        <img className='image-card' width={170} src={props.src} />
        <div className='label-name-card'>
            <span className='name-card'>{props.name}</span>
        </div>
    </div>
    )
}

export default Card;