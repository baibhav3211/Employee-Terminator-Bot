import Login from "./components/auth/Login"
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import UserDashboard from './components/dashboard/UserDashboard'
import Register from "./components/auth/Register"
import { InputForm } from "./components/InputForm/InputForm"

import { ThemeProvider } from "@mui/material";
import theme from '../theme'
import NotFound from './components/utils/NotFound'
import AdminDashboard from "./components/dashboard/AdminDashboard";
import ChangePassword from "./components/auth/ChangePassword";
import MasterAdmin from "./components/masteradmin/MasterAdmin";


function App() {
  
  return (
    <>

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/register' />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addemployee" element={<InputForm />} />
            <Route path="/login" element={<Login />} />
            <Route path='/userdashboard/*' element={<UserDashboard />} />
            <Route path='/admindashboard/*' element={<AdminDashboard />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/masteradmin" element={<MasterAdmin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  
  )
  }

export default App
