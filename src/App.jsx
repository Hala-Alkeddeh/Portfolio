import React from 'react'
import {Routes, Route } from 'react-router-dom'
import PortfolioPage from './Page/PortfolioPage';

const App = () => {
     return (
    <Routes>
        <Route path='/' element={<PortfolioPage/>} />
    </Routes>
     )
}

export default App
