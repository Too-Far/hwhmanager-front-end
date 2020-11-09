import React from 'react'
import {homeStyles} from './homeStyles'

//Todo: Change each div to logo for appropriate Service and make into a clickable link.

function Home() {
    const classes = homeStyles()
    return (
        <div className={classes.body}>
            <div className={classes.innerWrap}>
            <div className={classes.box}>Check Check</div>
            <div className={classes.box}>Check Two</div>
            <div className={classes.box}>Check Three</div>
            <div className={classes.box}>Check Four</div>
            <div className={classes.box}>Check Five</div>
            </div>
            <div className={classes.bottomWrap}>
                <div className={classes.box}>Check Bottom</div>
                <div className={classes.box}>Check Bottom Two</div>
                <div className={classes.box}>Check Bottom Three</div>
            </div>      
        </div>
    )
}

export default Home
