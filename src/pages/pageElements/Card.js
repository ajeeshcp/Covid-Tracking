import { Grid, Paper } from "@mui/material";
import React from "react";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';


const iconStyle = {
  fontSize: "5rem",
  position: "absolute",
  top: "1rem",
  right: "1rem",
  opacity: "0.1",
};



function Card(props) {

  const {covid} = props
  
    return (
        <Grid container spacing={2} mt="0.4rem">
         
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            sx={{
              height: "150px",
              backgroundColor: "#00acc1",
              paddingTop: "1rem",
              paddingLeft: "1rem",
              position: "relative",
            }}
            elevation={3}
          >
            <h2 style={{ color: "#fff" }}>
              {covid ? covid.totalCases : "Loading"} <span style={{ fontSize: "15px" }}></span>
            </h2>
            <span style={{ color: "#fff" }}>Total confirmed cases</span>
            <LocalHospitalRoundedIcon
              sx={iconStyle}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            sx={{
              height: "150px",
              backgroundColor: "#ffa726",
              paddingTop: "1rem",
              paddingLeft: "1rem",
              position: "relative",
            }}
            elevation={3}
          >
            <h2 style={{ color: "#111" }}>
            {covid ? covid.activeCases : "Loading"}<span style={{ fontSize: "15px" }}> ({covid ? covid.activeCasesNew : ""})</span>
            </h2>
            <span style={{ color: "#111" }}>Active Cases</span>
            <AddTaskRoundedIcon
              sx={iconStyle}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            sx={{
              height: "150px",
              backgroundColor: "#00c853",
              paddingTop: "1rem",
              paddingLeft: "1rem",
              position: "relative",
            }}
            elevation={3}
          >
            <h2 style={{ color: "#fff" }}>
            {covid ? covid.recovered : "Loading"} <span style={{ fontSize: "15px" }}>(+ {covid ? covid.recoveredNew : ""})</span>
            </h2>
            <span style={{ color: "#fff" }}>Total Recovered</span>
            <SentimentSatisfiedRoundedIcon
              sx={iconStyle}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Paper
            sx={{
              height: "150px",
              backgroundColor: "#f4511e",
              paddingTop: "1rem",
              paddingLeft: "1rem",
              position: "relative",
            }}
            elevation={3}
          >
            <h2 style={{ color: "#fff" }}>
            {covid ? covid.deaths : "Loading"} <span style={{ fontSize: "15px" }}>(+ {covid ? covid.deathsNew : ""})</span>
            </h2>
            <span style={{ color: "#fff" }}>Total Deceased</span>
            <SentimentDissatisfiedRoundedIcon
              sx={iconStyle}
            />
          </Paper>
        </Grid>
      </Grid>
    )
}

export default Card
