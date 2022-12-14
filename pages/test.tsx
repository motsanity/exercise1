import { setCookie, getCookie, getCookies, deleteCookie } from "cookies-next"


export default function Test({users}){

    return (
        <>
            <h1>user details test</h1>
            {users.map(function(user){
                return(
                    <div key={user.id}>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                        <p>{user.email}</p>
                        <p>{user.firstname}</p>
                        <p>{user.middlename}</p>
                        <p>{user.lastname}</p>
                        
                        <hr/>
                        
                    </div>
                )
            })
            }
        </>
        
    )
    
 }

export async function getStaticProps(){
    const response = await fetch ('https://638aa9827220b45d22805a6a.mockapi.io/userData')
    const data = await response.json()

    return{
        props:{
            users:data,
        }
        
    }
}
