import styled from 'styled-components'
import  { Link as LinkR } from 'react-router-dom' 
// import  { Link as LinkS } from 'react-scroll' 

export const Nav = styled.nav`
background: "000;
height: 80px;
display: flex;
justify-content: center;
`

export const NavbarContainer = styled.div`
 display: flex;
  justify-content: space-between;
   height: 80px;
`

export const NavLogo = styled(LinkR)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display: flex;
`