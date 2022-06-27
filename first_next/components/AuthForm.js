import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import {Button} from "@blueprintjs/core";
import CustomInput from "./CustomInput";
import style from "../styles/AuthForm.module.css"
import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context";
import {getTotalCount} from "../API/getTotalCount";

const AuthForm = ({setModal}) => {

    const [login, setLogin] = useState('')
    const [passwordInForm, setPassword] = useState('')

    const {isAuth, setIsAuth, setAccessToken, setRefreshToken, accessToken} = useContext(AuthContext)

    const sendData = async (e) => {

        e.preventDefault()

        setModal(false)

        const response = await axios.post("http://api.interview.michaelknyazev.com/api/v1/login", {
            email: login,
            password: passwordInForm
        })

        setIsAuth(true)

        setAccessToken(response.data.result.access_token)
        setRefreshToken(response.data.result.refresh_token)


    }

    return (
        <div>
            <form className={style.auth}>
                <div className={style.customText}>Вход</div>
                <CustomInput value={login} onChange={e => setLogin(e.target.value)} type="text" placeholder="Введите email"/>
                <CustomInput value={passwordInForm} onChange={e => setPassword(e.target.value)} type="text" placeholder="Введите пароль"/>
                <Button text="Войти" onClick={sendData} />
            </form>
        </div>
    );
};

export default AuthForm;