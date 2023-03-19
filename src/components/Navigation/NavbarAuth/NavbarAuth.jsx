import { NavLink } from "react-router-dom";
import styled from './NavbarAuth.module.css'


export default function NavBarAuth() {
    
    return (
        <div className={styled.boxLink}>
            <NavLink to='/register' className={styled.headerLink}>Реєстрація</NavLink>
            <NavLink to='/login' className={styled.headerLink}>Увійти</NavLink>
        </div>
    )
}