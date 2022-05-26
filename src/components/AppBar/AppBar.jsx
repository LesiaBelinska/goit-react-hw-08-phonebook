import { Navigation } from "components/Navigation/Navigation.jsx";
import { AuthNavigation } from "components/AuthNavigation/AuthNavigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";

import s from "./AppBar.module.css";

export const AppBar = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <header className={s.header}>
            <Navigation />
           {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </header>
    );
}