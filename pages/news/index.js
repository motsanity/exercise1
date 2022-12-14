import axios from "axios"



export default function List({articles}){

    return(
        <>
        <h1>this is a list</h1>
        {articles.map(article =>{
            <div key={article.id}>
                <h4>{article.id}</h4>
                <h4>{article.title}</h4>
                <h4>{article.category}</h4>
            </div>
        })}
        </>
    )
}


export async function getServerSideProps(){
    const {data} = await axios.get ('http://localhost:4000/news')
    

    return{
        props: {
            articles: data,
            
        },
    }   
}