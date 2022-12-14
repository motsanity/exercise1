import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Content(props){
    return(
        <Box
            sx={{
                marginTop: 2,
                alignItems: 'center',
                backgroundColor: ""
            }}
            >
            <Typography component="h1" variant="h5" sx={{mb: 2}}>
                {props.name}
            </Typography>
        </Box>
    )
}