import {useRouter} from "next/router";
import Index from "../index";
import {MainLayout} from "../../components/MainLayout";

export default function Post({post}) {
    return <>
        <MainLayout>
            <h1>{post.title}</h1>
        </MainLayout>
    </>
}

Post.getInitialProps= async (ctx) => {
    const id = ctx.query.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()

    return {
        post
    }
}