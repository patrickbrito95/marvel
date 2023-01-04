import react from 'react';
import './styles.css'

const NavbarItem = (props) => {
    return(
        <span className="navbar-item">
            {props.name}
        </span>
    )
}

export default NavbarItem;