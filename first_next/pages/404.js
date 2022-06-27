import style from '../styles/Error.module.css'
import Link from "next/link";


export default function ErrorPage() {
    return (
        <div className={style.container}>
            <div className={style.mainTitle}>
                404
            </div>
            <div className={style.title}>Страница не найдена!</div>
            <Link href="/">
                <div className={style.link}>
                    Вернуться на главную
                </div>
            </Link>
        </div>
    );
}