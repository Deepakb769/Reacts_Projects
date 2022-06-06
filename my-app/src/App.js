import React,{Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color = "danger">
        <div className='container'>
          <NavbarBrand href="/">Restro</NavbarBrand>
        </div>        
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
