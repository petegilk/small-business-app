import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

const cookies = cookie.parse(document.cookie)

const Navigation = () => {

  return (
    <AppBar position="relative" color="secondary">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">

                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {
                        cookies['loggedIn'] ?
                        <li className="nav-list-item">
                        <Link to="/addlisting">Add</Link></li>
                        : null
                    }
                    {
                        cookies['loggedIn'] ?
                        <li className="nav-list-item">
                        <Link to="/login" onClick={()=>{
                            document.cookie = "loggedIn= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                        }} >Logout</Link></li>
                        :
                        <li className="nav-list-item">
                        <Link to="/login">Login</Link></li>
                    }
                </ul>
            </Toolbar>
        </AppBar>
  )
}

export default Navigation