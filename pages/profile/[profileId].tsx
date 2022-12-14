import Router from 'next/router';
import { listeners } from 'process';
import Appbar from '../../components/navbar';
import UserList from '../users'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { alignProperty } from '@mui/material/styles/cssUtils';
import { textAlign } from '@mui/system';
import Navbar from '../../components/navbar';
import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { redirect } from 'next/dist/server/api-utils';
import { hasCookie } from 'cookies-next'
import { useRouter } from 'next/router';
import Navbarlogin from '../../components/navbarlogin';
import Restriction from '../../components/restriction'
import Item from '@mui/material/ListItem'
import ProfilePage from '../../components/profilepage';



export default function Profile({ profile }) {

    return (
        <>
            <Navbarlogin />
            <ProfilePage profile={profile} />
        </>

    )
}

export async function getStaticPaths() {

    const response = await fetch
        ('https://638aa9827220b45d22805a6a.mockapi.io/data'
        )
    const data = await response.json()

    const paths = data.map(function (profile) {
        return {
            params: {
                profileId: `${profile.id}`
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { params } = context
    const { data } = await axios.get
        (`https://638aa9827220b45d22805a6a.mockapi.io/data/${params.profileId}`
        )


    return {
        props: {
            profile: data,
        },
    }

}

