/* eslint-disable import/no-extraneous-dependencies */
import Cookies from 'js-cookie'
import {useNavigate, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  const navigation = useNavigate()

  if (!jwtToken) {
    navigation('/login')
  }

  return <Route {...props} />
}

export default ProtectedRoute
