import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa";

import authOperations from "redux/auth/authOperations.js";


import s from "./UserMenu.module.css";

export const UserMenu = () => {
    
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.user.name);

    return (
        <div className={s.menu}>
            <FaRegUser />
            <p className={s.name}>Welcome, {name}</p>
            <button
                type="button"
                className={s.button}
                onClick={() => dispatch(authOperations.logOut())}
            >
                Sign out
            </button>
        </div>
    );
}