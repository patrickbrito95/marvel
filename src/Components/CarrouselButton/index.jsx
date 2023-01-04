import React from 'react';
import './styles.css';

const CarrouselButton = (props) => {
    return( 
        
        <div>
            {props.isPrev ? (
                <button className="carrousel-button">
                    {"<"}
                </button>
            ): null}
            {props.isNext ? (
                <button className="carrousel-button">
                    {">"}
                </button>
            ): null}
        </div>
    )
}

export default CarrouselButton;