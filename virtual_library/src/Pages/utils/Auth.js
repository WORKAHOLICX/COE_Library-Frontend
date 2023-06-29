import React from "react";
import { useAuth } from "../hooks/useAuth";


const Auth = () => {
    const { login } = useAuth();
    login()

    return (
        <div>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </div>
    )
}

export default Auth;