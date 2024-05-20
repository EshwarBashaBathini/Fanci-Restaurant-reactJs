import styled from 'styled-components'

export const NavContainer = styled.nav`
   background-color: white;
   width: 99%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
`

export const H1 = styled.h1`
  color: #191c29l;
  font-size: 20px;

  @media screen and (min-width: 767px){
   font-size: 30px;
  }
`
export const DivContainer = styled.div`
  
  display: flex;
  position: relative;
  font-size: 30px;
  
  align-items: center;
`
export const DivContainer2 = styled.div`
display:flex;
width: 30px;
justify-content: center;
align-items: center;
position: absolute;
top: -5px;
right: -25px;

`
export const P = styled.p`
  margin: 0px;
  text-align: center;
  background-color: #ff6347;
  padding: 4px 2px 2px 0px;
  color: white;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  min-width: 20px;
  border-radius: 50%;
`
export const MyOrder = styled.p`
   font-size: 15px;
   color: #6e6565;
   font-family: 'roboto';
   @media screen and (min-width: 767px){
    display: inline;
   }
   @media screen and (max-width: 767px){
    display  : none;
   }
`
export const Div = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: space-between;
`
