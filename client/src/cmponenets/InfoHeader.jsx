import React from 'react'
import { Box, Typography, styled } from '@mui/material';


const Container=styled(Box)(({ theme })=>({
    background: 'f44336',
    color: '#fff',
    display: 'flex',
    alignItems:'center',
    height:'48',
    marginBottom:'30px',

    [theme.breakpoints.down('md')]:{
        diaplay:'none'
    }

}));
const Image= styled('img')({
    height:34,
    paddingTop:8,
    '&:last-child':{
       margin:'0 50px 0 20px' 
    }
})

const Text=styled(Typography)`
    font-size:18px;
    font-weight:300;
    margin-left:50px;
    padding-top:10px


`;

const InfoHeader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';    
  return (
    <Container>
        <Text>
            For the best experience use inshorts app on your smartphone. 
        </Text>
        <Box style={{display: 'flex', marginLeft:'auto'}}>
            <Image src={appleStore} alt="applestore" />
            <Image src={googleStore} alt="googlestore" />
        </Box>
    </Container>
  )
}

export default InfoHeader; 