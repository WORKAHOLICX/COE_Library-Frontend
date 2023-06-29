import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import Upload from './Pages/Admin/Upload';
import Delete from './Pages/Admin/Delete';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Admin/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </Router> 

  )
}

export default App;
