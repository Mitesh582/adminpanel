import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard/Dashboard'
import Admin from '../Admin/Admin'
import Product from '../Products/Product'
import EditProduct from '../EditProduct/EditProduct'
import './MainContent.css'
import { useDispatch } from 'react-redux'
import { GetProductsAsync, getProductsAsync } from '../../Service/Action/ProductAction'

function MainContent({ handleSidebar, handle }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getLoginDetail = () => {

    let data = JSON.parse(sessionStorage.getItem("LoginData"));

    if (data === null) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    getLoginDetail();
    dispatch(getProductsAsync())
    dispatch(GetProductsAsync())
  }, [])

  return (
    <div className='col m'>
      <Header handleSidebar={handleSidebar} handle={handle} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/product' element={<Product />} />
        <Route path='/updateproduct' element={<EditProduct />} />
      </Routes>
    </div>
  )
}

export default MainContent