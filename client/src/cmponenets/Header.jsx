import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledHeader= styled(AppBar)`
background: #f5f5dc;
height: 70px;

`;
const MenuDesign= styled(Menu)`
color: #000000;

`;

const Image=styled('img')({
  height: 55,
  margin:'auto'

})
const Header = () => {
  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <div>
      <StyledHeader position="static">
        <Toolbar>
            <MenuDesign/>
            <Image src={url} alt="logo" />
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header
