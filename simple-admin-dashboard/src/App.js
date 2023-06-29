import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './scss/style.scss'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <ProtectedRoutes />
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
