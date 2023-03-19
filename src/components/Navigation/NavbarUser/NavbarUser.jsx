import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/Auth/auth-operation";
import { NavLink } from "react-router-dom";
import styled from './NavbarUser.module.css'


export default function NavbarUser() {
  const email = useSelector(store => store.auth.user.email);
  const isLogin = useSelector(store => store.auth.isLogin);
  const dispatch = useDispatch();
  const logout = e => {
    e.preventDefault();
    dispatch(logOut())
  };
  return (
    <div className={styled.userBox}>
      {isLogin && <NavLink to='/contacts' className={styled.headerLink}>Контакти</NavLink>}
      <p>{email}</p>
      <button type="button" onClick={logout} className={styled.btn}>Вийти</button>
    </div>
  );
}