import Link from "next/link"
import Navbarlogin from "../../components/navbarlogin"
export default function PostList({posts}){

    return(
        <div>
            <Navbarlogin/>
            <h1>List of Post</h1>
            {posts.map(function(post){
                return(
                    <div key={post.id}>
                        <Link href = {`posts/${post.id}`} passHref>
                        <h4>{post.id} {post.title}</h4>
                        </Link>
                        <hr/>
                    </div>
                    
                )
            })}
        </div>
    )
}



export async function getStaticProps(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return{
        props:{
            posts:data.slice(0,3),
        }
        
    }
}