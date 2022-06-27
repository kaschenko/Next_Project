import Link from "next/link";
import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import style from '../styles/Header.module.css'
import { Button } from '@blueprintjs/core'
import {useContext} from "react";
import {AuthContext} from "../context";

const Header = ({ children, setModal }) => {

    const {isAuth} = useContext(AuthContext)

    return (
        <header className={style.container}>
            <div>
                <Link href={"/"} >
                    <a className={style.title}>Тестовое задание</a>
                </Link>
            </div>
            <div className={style.buttons}>
                { !isAuth?
                    <Button large="true" text="Войти" onClick={() => setModal(true)} />
                    :
                    <div className={style.title}>Вы вошли</div>
                }

            </div>
        </header>
    );
};

export {Header};