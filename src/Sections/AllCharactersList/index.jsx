import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import CarrouselButton from "../../Components/CarrouselButton";
import apiMarvel from "../../services/marvelApi";
import "./styles.css";

const AllCharactersList = () => {
  const [marvels, setMarvel] = useState([]);
  const [offset, setOffset] = useState(0);

  const ts = process.env.REACT_APP_TIMESTAMP;
  const apikey = process.env.REACT_APP_API_KEY;
  const hash = process.env.REACT_APP_HASH;

  useEffect(() => {
    apiMarvel
      .get(
        `public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`
      )
      .then((response) => {
        setMarvel(response.data.data.results);
      });
  }, [offset]);

  const paginationPrevious = () => {
    if (offset > 0) {
      setOffset(offset - 30);

      apiMarvel
        .get(
          `public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`
        )
        .then((response) => {
          setMarvel(response.data.data.results);
        });
    } else {
      apiMarvel
        .get(
          `public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`
        )
        .then((response) => {
          setMarvel(response.data.data.results);
        });
    }
  };

  const paginationNext = () => {
    setOffset(offset + 30);

    apiMarvel
      .get(
        `public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`
      )
      .then((response) => {
        setMarvel(response.data.data.results);
      });
  };

  return (
    <div className="wrapperList">
      <div>
        <h2 className="title-list">LISTA DE PERSONAGENS DA MARVEL</h2>
      </div>
      {marvels.map((marvel) => {
        return (
          <Card
            name={marvel.name}
            src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
            alt={`Imagem do personagem ${marvel.name}.`}
          />
        );
      })}
      <div className="pagination-control">
        <CarrouselButton
          isPrev
          onClick={() => paginationPrevious()}
        ></CarrouselButton>
        <CarrouselButton
          isNext
          onClick={() => paginationNext()}
        ></CarrouselButton>
      </div>
    </div>
  );
};

export default AllCharactersList;
