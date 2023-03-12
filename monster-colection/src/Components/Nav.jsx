import React from 'react'
import data from '../Data';

const Nav = () => {
  return (
    <header>
        <img src={data[0].logo} alt={data[0].name} width='45px'/>
        <h1>Monster Collections</h1>
    </header>
  )
}

export default Nav;