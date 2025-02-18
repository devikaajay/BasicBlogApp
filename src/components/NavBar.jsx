
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
          <Button color="inherit">
                <Link to='/home' style={{textDecoration:'none', color:'white'}}>Home</Link>
          </Button>&nbsp;&nbsp;
          <Button color="inherit">
                <Link to='/add' style={{textDecoration:'none', color:'white'}}>Add Blog</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
