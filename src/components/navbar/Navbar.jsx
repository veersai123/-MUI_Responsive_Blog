/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, styled ,InputBase,Menu,MenuItem} from '@mui/material'
import {Facebook,Instagram,Twitter,Menu as MenuIcon} from '@mui/icons-material';

import { Link } from 'react-router-dom';
function Navbar() {
    const StyledTool=styled(Toolbar)({
        justifyContent:"space-between"
    })
    const SocialBox=styled(Box)({
        display:'flex',
        gap:'10px'
    })
    const MenuBox=styled(Box)({
        display:'flex',
        gap:'30px'
    })
    const MenuItems=[
    {name:"Home",Link: "/"},
    {name:"Menu",Link: "#"},
    {name:"About",Link: "#"},
    {name:"Contact",Link: "#"},
]
const SearchBox=styled(Box)({
    display:'flex',
    gap:'10px'
})
const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{backgroundColor:"black"}}>
        <StyledTool>
            <SocialBox><Facebook/><Instagram/><Twitter/> </SocialBox>
            <MenuBox sx={{display:{xs:"none",sm:"none",md:"flex"}}}>
            {MenuItems.map((item)=>(
                <Typography sx={{cursor:'pointer',fontSize:'14px'}}>{item.name}</Typography>
            ))}
            </MenuBox>
            <SearchBox>
            <InputBase placeholder='search' sx={{color:"white"}}/>
            <MenuIcon sx={{color:'white',display:{xs:"block",sm:"block",md:"none"}}}
                onClick={() => SetOpen(!open)}
            />
            </SearchBox>
        </StyledTool>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
      >
      <Box sx={{width:350,height:"90vh"}}>
            {MenuItems.map((item)=>(
                <MenuItem  sx={{cursor:'pointer',fontSize:'14px'}}>{item.name}</MenuItem>
            ))}
      </Box>
      </Menu>

    </AppBar>
  )
}

export default Navbar