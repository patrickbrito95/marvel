import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavbarItem from "../NavbarItem";
import "./style.css";
import HamburguerButton from "../../Assets/hamburguer.png";

const Navbar = () => {
  const itens = [
    { name: "FILMES", src: "https://www.marvel.com/movie" },
    { name: "QUADRINHOS", src: "https://www.marvel.com/comics" },
    { name: "PROGRAMAS DE TV", src: "https://www.marvel.com/tv-shows" },
    { name: "JOGOS", src: "https://www.marvel.com/games" },
  ];

  const isDesktop = useMediaQuery({ minWidth: 991 });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isDesktop ? (
        <div className="navbar">
          <div className="logo">
            <img
              width={140}
              alt="Logo oficial da Marvel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            />
          </div>
          <div className="navbar-item">
            {itens.map((item) => (
              <NavbarItem name={item.name} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="navbar">
            <div className="logo">
              <img
                width={140}
                alt="Logo oficial da Marvel"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
              />
            </div>
            <div className="navbar-item">
              <button
                className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img alt="Ícone do Menu" src={HamburguerButton} />
              </button>
            </div>
          </div>
          {isOpen ? (
            <div className="dropdown">
              {itens.map((item) => (
                <NavbarItem name={item.name} />
              ))}
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Navbar;
