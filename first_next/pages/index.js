import Link from 'next/link'
import {useState, useEffect} from "react";
import {MainLayout} from "../components/MainLayout";
import ModalWindow from "../components/ModalWindow";
import {AuthContext} from "../context";
import ContentBoard from "../components/ContentBoard";


export default function Index({posts}) {

    const [modal, setModal] =useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [accessToken, setAccessToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')


    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken
        }}>
            <MainLayout setModal={setModal}>
                <ModalWindow visible={modal} setVisible={setModal}/>
                <ContentBoard limitNumber={10} pageNumber={1}>

                </ContentBoard>
            </MainLayout>
        </AuthContext.Provider>
    )
}

Index.getInitialProps= async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return {
        posts
    }
}