import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { AuthProvider } from './Pages/hooks/useAuth';
import ProtectedRoutes from './Pages/utils/ProtectedRoutes'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-discussion-board/dist/index.css'

function App() {
  return (

    <div>
      <AuthProvider>
        <Router>
          <ProtectedRoutes />
        </Router>
      </AuthProvider>


    </div>


  )
}

export default App;
