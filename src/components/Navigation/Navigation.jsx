import NavbarAuth from "components/Navigation/NavbarAuth/NavbarAuth"
import { Link } from "react-router-dom"
import styled from './Navigator.module.css'
import NavbarUser from "./NavbarUser/NavbarUser"
import { useSelector } from "react-redux"


function Navigation() {
    const isLogin = useSelector(store => store.auth.isLogin)
    return(
        <div className={styled.header}>
            <Link to="/"className={styled.headerLink}>Home</Link>
            {isLogin ? <NavbarUser/> : <NavbarAuth/>}
        </div>
    )
}
export default Navigation;