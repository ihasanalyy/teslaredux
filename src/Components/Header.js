import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burger , setBurger] = useState(false)
  return (
    <Container>
      <a>
        <img src='Images/logo.svg' />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model S</a>
        <a href='#'>Model S</a>
        <a href='#'>Model S</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setBurger(true)} />
      </RightMenu>
      <BurgerNav show={burger}>
        <WrapperClose>
          <CustomClose onClick={()=>setBurger(false)} />
        </WrapperClose>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  }
  @media (max-width: 768px){
  display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
  a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translate(100%)'};
  transition: transform 0.2s;
  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0 ,0 ,0 , .2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`
const WrapperClose = styled.div`
  display: flex;
  justify-content: end;
`