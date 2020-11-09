import React from 'react'
import { List, ListItem, ListItemText, AppBar, Button, Toolbar, IconButton, Container } from "@material-ui/core"
import {Home} from '@material-ui/icons'
import {navBarStyles} from './navBarStyles'

function NavBar() {
    const navLinks = [
        {title: 'Home', path: '/', icon: Home},
        {title: 'Storage', path: '/storage'},
        {title: 'Editor', path: '/editor'},
    ]
    const classes = navBarStyles()
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
            <Container className={classes.container}>
                <IconButton edge='start' aria-label='home' className={classes.icon}>
                    <Home fontSize='large'/>
                </IconButton>
                <List component='nav' aria-labelledby='main navigation' className={classes.container}>
                    {navLinks.map(({title, path})=>(
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title}/>
                            </ListItem>
                        </a>
                    ))}
                </List>
                <Button className={classes.btn} variant='contained'>Logout</Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
