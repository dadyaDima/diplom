import React from "react";

const NavLink = (props) => {
    const getClasses = () => {
        let classes = "nav-link"
        return (classes += props.active ? " active" : "")
    }
    
    const handleClick = () => {
        props.onActiveChange(props.id)
    }
    
    return <>
      <li className="nav-item" onClick={handleClick}>
        <a href={props.link} className={getClasses()}>{props.text}</a>
      </li>
    </>
};

export default NavLink;