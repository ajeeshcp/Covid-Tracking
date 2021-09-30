import { Grid, Paper } from "@mui/material";
import Barchart from "../charts/Barchart";
import Card from "./pageElements/Card";
import Doughnutchart from "../charts/Doughnut";
import { useEffect, useState } from "react";
import axios from "axios";



function Home() {

  const [covid, setCovid] = useState()
  const [covidArr, setcovidArr] = useState([])

  const [vaccine, setVaccine] = useState([])

  useEffect(() => {

    axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
    .then((res) => {
      setcovidArr([...[res.data.totalCases,res.data.activeCases,res.data.recovered,res.data.deaths]])
      setCovid(res.data)
    })

    axios.get("https://data.covid19india.org/v4/min/data.min.json").then((res) => {
      // console.log(res.data);

      const covidArray =Object.values(res.data)

      const vacc1 = covidArray.map((item) => {
        return item.total.vaccinated1;
      })

      const vacc2 = covidArray.map((item) => {
        return item.total.vaccinated2;
      })
      const vaccinesum1 = vacc1.reduce((prev,next) => {
        return prev+next ;
      })
      const vaccinesum2 = vacc2.reduce((prev,next) => {
        return prev+next ;
      })
      setVaccine([...[vaccinesum1,vaccinesum2]]) 

    })

    

  }, [])

  
  return (
    <div>
      <h2 style={{color:"#f50057"}}><span style={{color:"#4dabf5"}}>India</span> Updates ..</h2>
      <Card covid={covid} />
      <Grid container spacing={2} columns={12}>
              <Grid item xs={12} md={6}A lg={6}>
                  <Paper sx={{marginTop:"2rem",padding:"2rem",backgroundColor:"#eeeeee"}}>
                      <Barchart label="India covid status" arr={["Confirmed","Active","Recovered","Death"]} arrcount={covidArr} />
                  </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                  <Paper sx={{marginTop:"2rem",padding:"2rem",backgroundColor:"#eeeeee"}}>
                   
                      <Doughnutchart vaccine={vaccine} />
                  </Paper>
              </Grid>
    
     
      </Grid>
    </div>
  
  )
}

export default Home;
