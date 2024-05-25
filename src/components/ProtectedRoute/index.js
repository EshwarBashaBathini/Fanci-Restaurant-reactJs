import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({element: Element}) => {
  const jwtToken = Cookies.get('jwt_token')
  return jwtToken ? <Element /> : <Navigate to="/login" />
}

export default ProtectedRoute
