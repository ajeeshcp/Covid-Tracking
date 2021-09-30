import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
    aboutWrapper:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"2rem",
        textAlign:"center",
        color:"#546e7a"
    },
    aboutImg:{
        width:"150px"
    } 
})

function About() {
    const classes = useStyle();
    return (
        <div className={classes.aboutWrapper}>
            <img className={classes.aboutImg} src="https://www.psycharchives.org/retrieve/096175aa-f7f2-4970-989d-d934c30b5551" alt="" />
            <div className="contents">
                <p>Covid tracking app created by Ajeesh</p>
                <span>All rights Reserved &copy; 2021</span>
            </div>
        </div>
    )
}

export default About
