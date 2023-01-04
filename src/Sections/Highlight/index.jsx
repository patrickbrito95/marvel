import React, { useState } from 'react';
import './styles.css';
import SpiderManImg from '../../Assets/spider-man.jpg'
import BlackWidowImg from '../../Assets/black-widow.jpg'
import HulkImg from '../../Assets/hulk.jpg'
import ThorImg from '../../Assets/thor.jpg'
import BlackPantherImg from '../../Assets/black-panther.jpg'
import ThanosImg from '../../Assets/thanos.jpg'
import IronManImg from '../../Assets/iron-man.jpg'
import StrangeImg from '../../Assets/doctor-strange.jpg'
import WandaImg from '../../Assets/wanda.jpeg'
import CapImg from '../../Assets/captain.jpg'
import AntManImg from '../../Assets/ant-man.jpg'
import CarrouselButton from '../../Components/CarrouselButton';
import CarrouselCard from '../../Components/CarrouselCard';

const HightLight = () => {

    const characters = [
        { "name": "Homem Aranha", "src": SpiderManImg },
        { "name": "Viúva Negra", "src": BlackWidowImg },
        { "name": "Hulk", "src": HulkImg },
        { "name": "Thor", "src": ThorImg },
        { "name": "Pantera Negra", "src": BlackPantherImg },
        { "name": "Thanos", "src": ThanosImg },
        { "name": "Homem de Ferro", "src": IronManImg },
        { "name": "Doutor Estranho", "src": StrangeImg },
        { "name": "Feiticeira Escarlate", "src": WandaImg },
        { "name": "Capitão América", "src": CapImg },
        { "name": "Homem-Formiga", "src": AntManImg }
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
        let listW = characters.length * 295;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className='HightLight-bg'>
            <div>
                <div className="wrapperHeader">
                  <h2 className='title'>PERSONAGENS EM DESTAQUE</h2>
                    <div className='wrapperButtons'>
                    <div onClick={handleLeftArrow}>
                    <CarrouselButton isPrev />  
                    </div>
                    <div onClick={handleRightArrow}>
                    <CarrouselButton isNext />
                    </div>
                </div>
                </div>
                <div className="listarea">
                    <div className="list" style={{
                        marginLeft: scrollX,
                        width: characters.length * 280
                    }}>
                    {characters.length > 0 && characters.map((item, key) => (
                        <CarrouselCard key={key} src={item.src} name={item.name} />
                        
                        ))}
                    </div>  
                </div>
        </div>
        </div>
    )
}

export default HightLight;