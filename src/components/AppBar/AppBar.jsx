import { Navigation } from "components/Navigation/Navigation.jsx";
import { AuthNavigation } from "components/AuthNavigation/AuthNavigation";
import { UserMenu } from "components/UserMenu/UserMenu";

import s from "./AppBar.module.css";

export const AppBar = () => {
    return (
        <header className={s.header}>
            <Navigation />
            <UserMenu />
            <AuthNavigation />
        </header>
    );
}