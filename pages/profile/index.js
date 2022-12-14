import Link from "next/link"
import Navbar from "../../components/navbar"
import Navbarlogin from "../../components/navbarlogin"
import { getCookie, hasCookie } from "cookies-next"
import Box from '@mui/material/Box';
import Item from '@mui/material/ListItem'
import { Container } from "@mui/system";
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import '../../images/default_pic.png'
import Router from "next/router";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

 
export default function PostList({ profiles }) {



    return (
        <div>
            <Navbarlogin />
            <Grid container spacing={5}>
                {profiles.map(function (profile) {

                    return (
                        <Grid item md={4} lg={3} xs={12}>
                
                            <Box component="div" key={profile.id}>
                                <Item>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {profile.username}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" maxWidth={100}>
                                                {profile.firstname} {profile.middlename}
                                                <br />
                                                {profile.lastname}<br />
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => { Router.push(`profile/${profile.id}`) }}>View Details</Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Box>
                        </Grid>

                    )
                })}


            </Grid>

        </div>
    )
}


export async function getServerSideProps() {


    const response = await fetch('https://638aa9827220b45d22805a6a.mockapi.io/data')
    const data = await response.json()

    return {
        props: {
            profiles: data
        }

    }

}