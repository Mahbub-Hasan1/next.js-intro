export default function Post({post}){
    return(
        <div>
            <h2>{post.title}</h2>
            <div>
                {post.body}
            </div>
        </div>
    )
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    return{
        props:{
            post,
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = [];
    posts.forEach(post => paths.push(`/posts/${post.id}`));

    return {
        paths,
        fallback: false,
    }
}
