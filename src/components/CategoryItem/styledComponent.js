import styled from 'styled-components'

export const ListItem = styled.li`
  font-size: 10px;
  color: black;
  min-width: 100px;
  list-style-type: none;
  padding: 10px;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  text-decoration-color: ${props => (props.isActive ? '#db756e' : 'none')};
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`
export const P = styled.h1`
  font-size: 20px;
  color: ${props => (props.isActive ? '#db756e' : 'black')};
`
