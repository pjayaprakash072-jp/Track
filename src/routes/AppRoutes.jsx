import {Routes,Route, Navigate} from "react-router-dom"
import Login from '../pages/Auth/Login'
import Register from "../pages/Auth/Register"
import Calculate from "../pages/Main/Calculate"
import DashboardSection from "../components/DashboardSection"
import About from "../components/About"
import History from "../pages/History/History"
import { useAuth } from "../context/useAuth"
function Private({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<DashboardSection/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/calculate' element={<Calculate/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/history' element={<Private><History/></Private>}/>
    </Routes>
  )
}

export default AppRoutes