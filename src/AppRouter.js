import React from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Homepage from './Homepage';
function AppRouter() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' exact Component={Homepage} /> 
            </Routes>
        </Router>
    </div>
  )
}

export default AppRouter