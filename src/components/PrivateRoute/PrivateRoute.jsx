import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";



export const PrivateRoute =()=>{
    const isLogin = useSelector(store => store.auth.isLogin);
    const token = useSelector(store => store.auth.token);

    if (!isLogin && token) {
        return <p>...Load</p>
    }

    if (!isLogin && !token) {
        return <Navigate to='/login'/>
    }

    return(
        <Outlet/>
    )
}