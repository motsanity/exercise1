import Register from "../components/register"
import Appbar from "../components/navbar"
import Profile from "./profile/[profileId]"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/ListItem'
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import Content from "../components/contentpage";




export default function Home(){
  return (
    <>
    <Appbar/>
        <Container component="main" maxWidth="xs" sx={{textAlign:"center", pt: 25}}>
            <Content name = "Contact Page"/>
        </Container>
    </>
    
  )
}
