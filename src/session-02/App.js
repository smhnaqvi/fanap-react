import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import './App.css';

// import Post from "./components/Post";
import PostList from "./components/PostList";
import data from './request/posts.json';

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function App(props) {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Main Menu</Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
            <Container style={{marginTop: 50, marginBottom: 50}} maxWidth="md">
                <Grid container justify="center" spacing={3}>
                    <PostList data={data}/>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default App;
