import {NextResponse} from 'next/dist/server/web/spec-extension/response'
import axios from 'axios'
import { getCookie } from 'cookies-next'

export default function middleware(req){
    
    let verify = req.cookies.get("token")
    const token = verify.value
    let url =req.url
    


     if(!verify && url.includes(`http://localhost:3000/profile/${token}`)){
         return NextResponse.redirect("http://localhost:3000/login")
     }

     else if(verify && url.includes("http://localhost:3000/login")){
         return NextResponse.redirect(`http://localhost:3000/profile/${token}`)
       
        
     }
}


