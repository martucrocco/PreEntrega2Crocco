import React, {useState} from 'react'
import styled from 'styled-components'
import Burgerbutton from './Burgerbutton'
import logo from "../assets/img/logo.jpg"
import Cartwidget from './Cartwidget'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
   
    setClicked(!clicked)
  }
  return (
    <>
    <NavContainer>
      <header className='header'>
        <img  className='logoyz'  src={logo} alt=""/>
        
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">INICIO</a>
          <a onClick={handleClick} href="#h">PRODUCTOS</a>
          <a onClick={handleClick} href="#h">TALLERES</a>
          <a onClick={handleClick} href="#h">CONTACTO</a>
          <br/>
          <br/>
          <a onClick={handleClick} href="#h"><Cartwidget/></a>
        </div>
        <div className='Burguer'>
          <Burgerbutton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

      </header>
    </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
 
 .header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: .3rem;
 
 background-color: #333;

 }
  
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .logoyz{
    height: 120px;
    width: 120px;
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 1.5rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.5rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `