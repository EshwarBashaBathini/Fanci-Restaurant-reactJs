import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useEffect} from 'react'

const ProtectedRoute = ({element: Element}) => {
  const jwtToken = Cookies.get('jwt_token')
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
  }, [jwtToken]);
  
  return <Element /> 
}

export default ProtectedRoute
