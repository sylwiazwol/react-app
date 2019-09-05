import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
    {name: "start", path: "/", exact: true}, //trzeba dać atrybut exact, żeby Start nie był ciągle podświetlony jako wybrany element (pozosatałe ścieżki zawierają / i słowo, a Start tylko / )
    {name: "produkty", path: "/products"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admina", path: "/admin"},
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact>{item.name}</NavLink>
        </li>
    ))

    return (
      <nav className="main">
          <ul>
            {menu}
          </ul>
      </nav>
    );
}

export default Navigation;