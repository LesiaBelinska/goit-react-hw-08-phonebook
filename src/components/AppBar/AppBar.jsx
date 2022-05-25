import { Navigation } from "components/Navigation/Navigation.jsx";
import { AuthNavigation } from "components/AuthNavigation/AuthNavigation";
import { UserMenu } from "components/UserMenu/UserMenu";

export const AppBar = () => {
    return (
        <header>
            <Navigation />
            <UserMenu />
            <AuthNavigation />
        </header>
    );
}