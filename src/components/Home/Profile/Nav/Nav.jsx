import React from 'react'
import "./Nav.scss"
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const {nav, path, name} = props.nav;
  return (
    <div className="sticky">
        <div className="navigation">
            {/* <NavLink
            to={path}
            > */}
                <div className="nav">
                    <span>{nav}</span>
                    <p>{name}</p>
                </div>
            {/* </NavLink> */}
        </div>
    </div>
  )
}

export default Nav