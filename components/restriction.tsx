import { getCookie, hasCookie } from "cookies-next"
import Link from "next/link"
import Router from "next/router"

export default function Restriction(profile){

    const token = getCookie("token")
    const username = profile.username

    if(token === username){

        return(
            <><h1> match {token} {profile.username}</h1></>
        )

    }
    else
}