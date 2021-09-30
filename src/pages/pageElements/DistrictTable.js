import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    tableheadings:{
      backgroundColor:"#c5cae9",fontFamily:"Poppins, sans-serif"
    },
    tablehead:{
      fontWeight:"550",fontSize:"15px"
    },
    tablecontent:{
      fontFamily:"Poppins, sans-serif"
    }
})



function DistrictTable(props) {
   
  const tablecontents =props.tablecontents
  const classes = useStyles()
  const tableHeading = props.tableHeading 
  

  return (
    
    <TableContainer component={Paper} >
      <Table aria-label="simple table" >
        <TableHead className={classes.tableheadings} >
            <TableRow>
              {
                tableHeading.map((item) => {
                  return (
                      <TableCell className={classes.tablehead} >{item}</TableCell>
                  )
                })
              }
                
              
            </TableRow>
        </TableHead>
        <TableBody >
            {tablecontents.map((row) => (
              <TableRow
                key={row.region}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                  <TableCell component="th" scope="row" sx={{fontFamily:"Poppins, sans-serif"}}>
                    {row[0]}
                  </TableCell>
                  <TableCell >{row[1].total.confirmed}</TableCell>
                  <TableCell>{row[1].total.deceased}</TableCell>
                  <TableCell>{row[1].total.recovered}</TableCell>
                  <TableCell>{row[1].total.vaccinated1}</TableCell>
                  <TableCell>{row[1].total.vaccinated2}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DistrictTable
