import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <img
        src="https://papik.pro/uploads/posts/2021-11/1636124805_16-papik-pro-p-logotip-vinks-foto-18.png"
        alt="pictire"
      />

      <div>
        {props.isAuth? props.login : <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};

export default Header;