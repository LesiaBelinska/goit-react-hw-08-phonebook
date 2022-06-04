import { MdPhonelinkLock } from "react-icons/md";

import s from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={s.container}>
            <MdPhonelinkLock className={s.icon}/>
            <p className={s.text}>Please, Sign in or Sign up </p>
        </div>
    )
}