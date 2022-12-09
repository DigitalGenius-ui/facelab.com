import React from 'react'
import "./Nav.scss"
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const {nav, path, name, selected, setSelected} = props;
  return (
    <div className="navigation">
        <div 
        onClick={() => setSelected(name)}
        className={selected === name ? "nav active" : "nav"}>
            <span>{nav}</span>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Nav