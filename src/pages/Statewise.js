import { Grid, Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Barchart from '../charts/Barchart'
import Tablesection from './pageElements/Tablesection'


function Statewise() {

    const [chartLabel, setchartLabel] = useState([]);
    const [chartArr, setchartArr] = useState([])
    const [tablecontents, setTableContents] = useState([])

    useEffect(() => {
        axios.get("https://data.covid19india.org/v4/min/data.min.json").then((res) => {

            const covidArray1 =Object.keys(res.data)
            setchartLabel(covidArray1.filter((item) => item!=="TT")) 
            const covidArray2 =Object.values(res.data)

            setchartArr(covidArray2.map((item) =>{
                if(item.total.confirmed<30000000){
                    return item.total.confirmed
                }else {
                    return ""
                }
            }))

           
        })

        axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
        .then((res) => {
            
            setTableContents(res.data.regionData)
        })

    }, [])

    return (
        <div>
             <h2 style={{color:"#f50057"}}><span style={{color:"#4dabf5"}}>Statewise</span> Updates ..</h2>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper sx={{marginTop:"1rem",padding:"2rem",backgroundColor:"#eeeeee"}}>
                        <Barchart arr={chartLabel} arrcount={chartArr} label="Total confirmed cases"/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper sx={{marginTop:"1rem",padding:"1rem",backgroundColor:"#eeeeee"}}>
                        <Tablesection tablecontents={tablecontents} 
                        tableHeading={["State","Active","Recovered","Deceased","Total Infected"]}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Statewise
