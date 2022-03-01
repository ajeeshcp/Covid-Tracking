import { FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DistrictTable from './pageElements/DistrictTable';


function Districtwise() {

    const [statelist, setStatelist] = useState([])
    const [tableContent, settableContent] = useState([])

    
    const handleStateChange = (e) => {
        const indexNum = e.target.value ;
        axios.get("https://data.covid19india.org/v4/min/data.min.json").then((res) => {
            
            
            const disObj = Object.values(res.data)[indexNum].districts ;
            const arrayOfObj = Object.entries(disObj);
            settableContent(arrayOfObj)  /// this is the district data that we want 
            
            
        })
    }


    useEffect(() => {
        axios.get("https://data.covid19india.org/state_district_wise.json").then((res) =>{
            const covidArray1 =Object.keys(res.data)
            setStatelist(covidArray1.filter((item) => item!=="State Unassigned"))
            
            

        })
    }, [])

    return (
        <div>
            
                <Grid container spacing={2} sx={{marginTop:"0.5rem",display:"flex",alignItems:"center"}}>
                    <Grid item xs={6} md={6} lg={4}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select state</InputLabel>
                            <Select
                               color="primary"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                
                                label="select state"
                                onChange={handleStateChange}
                            
                            >
                                {
                                    statelist.map((item,index) =>{
                                        return <MenuItem value={index}>{item}</MenuItem>
                                    })
                                }
                                
                               
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper sx={{marginTop:"2rem",padding:"1rem",backgroundColor:"#eeeeee"}}>
                            <DistrictTable tableHeading={["District","Confirmed","Deceased","Recovered","Vaccine 1","Vaccine 2"]} 
                            tablecontents={tableContent}
                            />
                        </Paper>
                    </Grid>
                </Grid>
           
            
        </div>
    )
}

export default Districtwise
