import React, { useState } from 'react';
import './styles.css';
import SpiderManImg from '../../Assets/spider-man.jpg'
import BlackWidowImg from '../../Assets/black-widow.jpg'
import HulkImg from '../../Assets/hulk.jpg'
import ThorImg from '../../Assets/thor.jpg'
import BlackPantherImg from '../../Assets/black-panther.jpg'
import ThanosImg from '../../Assets/thanos.jpg'
import IronManImg from '../../Assets/iron-man.jpg'

const HightLight = () => {

    const characters = [
        { "name": "Homem Aranha", "src": SpiderManImg },
        { "name": "Viúva Negra", "src": BlackWidowImg },
        { "name": "Hulk", "src": HulkImg },
        { "name": "Thor", "src": ThorImg },
        { "name": "Pantera Negra", "src": BlackPantherImg },
        { "name": "Thanos", "src": ThanosImg },
        { "name": "Homem de Ferro", "src": IronManImg }
    ];

    const [scrollX, setScrollX] = useState(0);
    
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = characters.length * 250;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className='HightLight-bg'>
            <div className="movieRow">
            <h2 className='title'>PERSONAGENS EM DESTAQUE</h2>
                <div className="movieRow--left" onClick={handleRightArrow}>
                <button>
                    {"<"}
                </button>
                </div>
                <div className="movieRow--right" onClick={handleLeftArrow}>
                <button>
                    {">"}
                </button>
                </div>
                <div className="listarea">
                    <div className="list" style={{
                        marginLeft: scrollX,
                        width: characters.length * 200
                    }}>
                    {characters.length > 0 && characters.map((item, key) => (
                        <div key={key} className="items">
                            <img width={300} height={150} src={item.src} alt={item.name} />
                        </div>
                        ))}
                    </div>  
                </div>
        </div>
        </div>
    )
}

export default HightLight;