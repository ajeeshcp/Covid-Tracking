import React from 'react'
import {Doughnut} from "react-chartjs-2"

function Doughnutchart(props) {
    
    return (
        <Doughnut
        data={
            {
  
                labels:["First Dose","Second Dose"],
                    datasets: [{
                      label: 'India Vaccination status',
                      data:props.vaccine,
                      backgroundColor: [
                       "#00acc1",
                       "#f4511e"
                      ],
                      borderColor: [
                       "#111"
                      ],
                      borderWidth: 1,
                      borderRadius:3,
                      
                    }]
            
            
            }
        }
            height={300}
            width={200}
            options={
                
                {
                    maintainAspectRatio:false
                   
                }
                
            }
        />
    )
}

export default Doughnutchart
