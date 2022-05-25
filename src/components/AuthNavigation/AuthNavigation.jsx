import { NavLink } from "react-router-dom";

export const AuthNavigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/register">
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login">
                        Sign in
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}