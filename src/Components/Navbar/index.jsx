import react from 'react';
import NavbarItem from '../NavbarItem';
import './style.css'

const Navbar = () => {

    const itens = [
        { "name": "FILMES", "path": "/movies" },
        { "name": "QUADRINHOS", "path": "/hq" },
        { "name": "PROGRAMAS DE TV", "path": "/tv" },
        { "name": "JOGOS", "path": "/games" }
    ];


    return(
        <div className='navbar'>
            <div className="logo">
                <img width={140} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" />
            </div>
            <div className="navbar-item">
                {itens.map((item) => (
                    <NavbarItem name={item.name} />
                     
                ))}
            </div>
        </div>
    )
}

export default Navbar;