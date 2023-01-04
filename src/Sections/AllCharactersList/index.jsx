import React, { useEffect, useMemo, useState } from 'react';
import Card from '../../Components/Card';
import apiMarvel from '../../services/marvelApi';

import './styles.css';



const AllCharactersList = () => {

    
    const [marvels, setMarvel] = useState([])
    const [offset, setOffset] = useState(0)
    
    const ts = '50000'
    const apikey = '1afd62f5c9f808845d6c639fa1c6783b'
    const hash = 'fc01560be380859764812ba436bba6c9'
    
    useEffect(() => {
        apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
            setMarvel(response.data.data.results)
        })
    }, []);

    const paginationPrevious = () => {
        if (offset > 0) {
            setOffset(offset - 30)

            apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
                setMarvel(response.data.data.results)
            })
        } else {
            apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
                setMarvel(response.data.data.results)
            })
        }
    }

    console.log(offset)

    const paginationNext = () => {
        setOffset(offset + 30)

        apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
            setMarvel(response.data.data.results)
        })
    }
    
  
    
    return(
        <div className='wrapperList'>
            <div>
                <h2 className="title-list">LISTA DE PERSONAGENS DA MARVEL</h2>
            </div>
             {marvels.map((marvel) => {
                    return (
                    <Card name={marvel.name} src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={`Imagem do personagem ${marvel.name}.`} />
                )
            })}
            <div>
                <button onClick={() => paginationPrevious()}>prev</button>
                <button onClick={() => paginationNext()}>next</button>
            </div>
        </div>
    )
}

export default AllCharactersList;