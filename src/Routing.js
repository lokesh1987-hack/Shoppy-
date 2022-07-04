import React, { useEffect, useState } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Cart from './Pages/Cart'
import Dashboard from './Pages/Dashboard/Dashboard'
import Forgetpassword from './Pages/Forgetpassword'
import Homepage from './Pages/Homepage'
import Loginpage from './Pages/Login/Loginpage'
import Register from './Pages/Register'
import Shopping from './Pages/Shopping'
import Stories from './Pages/Stories'

function Routing() {

    const [isLogin, setIsLogin] = useState()
    const token = localStorage.getItem('token')
    useEffect(()=>{
        setIsLogin(token)
    },[])

    return (
        <Routes>
            {
                !isLogin && (
                    <>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/stories" element={<Stories />} />
                        <Route path="/login" element={<Loginpage />}/>
                        <Route path="/register" element={<Register />} />
                        <Route path="/forgetpassword" element={<Forgetpassword />} />
                    </>
                )
            }
            {
                isLogin && (
                    <>
                        <Route path="/shopping" element={<Shopping />} />
                        <Route path="/mycart" element={<Cart />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </>
                )
            }
            <Route path="*" element={<Navigate to={isLogin?"/dashboard":"/login"}/>} />
        </Routes>
    )
}

export default Routing
