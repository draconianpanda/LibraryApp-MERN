import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AddCardIcon from '@mui/icons-material/AddCard';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4' align='left'>Library App</Typography>
                <Button variant='outlined'>
                    <Link to={'/add'}  style={{textDecoration:'none',color:'white'}}><AddCardIcon/></Link>
                </Button>
                <Button variant='outlined'>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}><VisibilityIcon/></Link>
                </Button>                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar