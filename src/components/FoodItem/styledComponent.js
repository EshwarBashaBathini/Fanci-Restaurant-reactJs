import styled from 'styled-components'

export const ListItem = styled.li`
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px;
  padding: 10px;
  font-family: 'roboto';
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
`
export const H1 = styled.h1`
  font-size: 20px;
  color: black;
`
export const P = styled.p`
  font-size: 20px;
  color: #4d484a;
  font-weight: bold;
`
export const Div = styled.div`
  width: 60%;
`
export const Pdescr = styled.p`
  font-size: 17px;
  color: #a1999d;
`
export const ButtonsContainer = styled.div`
  height: 35px;
  width: 80px;
  color: white;
  border-radius: 20px;
  background-color: #077814;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 767px) {
    height: 50px;
    width: 120px;
    border-radius: 30px;
  }
`
export const Button = styled.button`
  outline: none;
  cursor: pointer;
  background: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
`
export const NotAvaiable = styled.p`
  font-size: 18px;
  color: red;
  @media sreen and (min-width: 767px) {
    font-size: 30px;
  }
`
export const Customization = styled.p`
  font-size: 15px;
  color: #3552f2;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`
export const Calories = styled.p`
  font-size: 12px;
  width: 20%;
  color: #f76d23;
  @media screen and (min-width: 767px) {
    font-size: 15px;
  }
`
export const Img = styled.img`
  width: 15%;
  border-radius: 10px;
  @media screen and (min-width: 767px) {
    border-radius: 20px;
  }
`
