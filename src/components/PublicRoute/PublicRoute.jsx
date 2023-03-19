import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";



export const PublicRoute =()=>{
    const isLogin = useSelector(store => store.auth.isLogin);

    if (isLogin) {
        return <Navigate to='/contacts'/>
    }

    return(
        <Outlet/>
    )
}