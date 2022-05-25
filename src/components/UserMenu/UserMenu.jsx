import s from "./UserMenu.module.css";

export const UserMenu=() => {
    return (
        <div className={s.menu}>
            <p className={s.name}>Welcome</p>
            <button type="button" className={s.button}>Sign out</button>
        </div>
    )
}