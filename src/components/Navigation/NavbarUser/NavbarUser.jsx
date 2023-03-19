import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/Auth/auth-operation";
import { NavLink } from "react-router-dom";


export default function NavbarUser() {
  const email = useSelector(store => store.auth.user.email);
  const isLogin = useSelector(store => store.auth.isLogin);
  const dispatch = useDispatch();
  const logout = e => {
    e.preventDefault();
    dispatch(logOut())
  };
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={logout}>Вийти</button>
      {isLogin && <NavLink to='/contacts'>Контакти</NavLink>}
    </div>
  );
}