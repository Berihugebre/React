import React from 'react';
import { Link } from 'react-router-dom';
import Log from '../hyflbe.jpg'

const NavigationItem = (props) => {
  return (
    <li className="site__nav-item"><Link to={props.url}>{props.title}</Link></li>
  )
};

const Navigation = (props) => { 
    return ( 
      <header>
        <img src={Log} className="log" alt="the log"/>
      <h1 className="site__title">Hack Your Future</h1>
      <nav className="site__nav" >
        <ul>
            {props.data.map((navigationData, key) => (
            <NavigationItem key={key} title ={navigationData.title} url={navigationData.url} />
            ))} 
        </ul>
      </nav>
    </header>
    );
}
 
export default Navigation;