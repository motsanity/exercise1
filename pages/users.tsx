
import User from '../components/users'
import axios from 'axios'

export default function UserList({users}){

    return (
        <>
            <h1>list</h1>
            {users.map(function(user){
                return(
                    <div key={user.id}>
                        <p>{user.email}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
    
}

export async function getStaticProps(){
    const {data} = await axios.get ('https://638aa9827220b45d22805a6a.mockapi.io/userData')
    

    return{
        props: {
            users: data,
        }
        
    }
}

