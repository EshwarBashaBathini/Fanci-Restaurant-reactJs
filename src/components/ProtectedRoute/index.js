import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({element: Element}) => {
  const jwtToken = Cookies.get('jwt_token')
  
  if(!jwtToken) navigate('/login')
  
  return <Element /> 
}

export default ProtectedRoute
