import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function PrivateRoute({ children }) {

    const { isloggedin } = useContext(AppContext)

    if (isloggedin) {
        return children;
    }
    else {
        return (
            <div className="">
                {toast.error("Please Login First")}
                <Navigate to="/login" />
            </div>

        )
    }
}
