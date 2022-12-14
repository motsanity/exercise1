import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Fonts from '../components/fonts'
import Avatar from '@mui/material/Avatar';

export default function ProfilePage({ profile }) {
    return (
        <Container component="main" maxWidth="xs" sx={{ textAlign: "center", pt: 2, bgcolor: "#1A5276 ", borderRadius: 2, color:"white" }}>
            <Box
                sx={{
                    marginTop: 2,
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5" sx={{
                    pb: 2, textAlign:
                        "center"
                }}>
                    PROFILE INFORMATION
                    <hr/>

                </Typography>
                <Typography component="h1" variant="h5" sx={{
                    pb: 2, textAlign:
                        "left"
                }}>
                    <Avatar alt={profile.username} src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" /><br/>
                    id: {profile.id}<br />
                    <span style={{fontSize:15}}>USERNAME:</span> {profile.username}<br/>
                    <span style={{fontSize:15}}>FIRST NAME:</span> {profile.firstname}<br/>
                    <span style={{fontSize:15}}>MIDDLE NAME:</span> {profile.middlename}<br/>
                    <span style={{fontSize:15}}>LAST NAME:</span> {profile.lastname}<br/>
                    <span style={{fontSize:15}}>EMAIL:</span> {profile.email}<br/>
                    <span style={{fontSize:15}}>PHONE: +63</span> {profile.phone}<br/>

                </Typography>
            </Box>
        </Container>
    )
}