import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/Auth/auth-operation";


export default function NavbarUser() {
  const email = useSelector(store => store.auth.user.email);
  const token = useSelector(store => store.auth.token);
  const dispatch = useDispatch();
  const logout = e => {
    e.preventDefault();
    dispatch(logOut())
  };
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={logout}>Вийти</button>
    </div>
  );
}