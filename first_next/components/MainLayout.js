import Link from "next/link";
import Head from "next/head";
import {Header} from "./Header";

export function MainLayout({children, title = "Next", setModal}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="testing"/>
            </Head>
            <Header setModal={setModal}></Header>
            <main>
                {children}
            </main>
        </>
    )
}