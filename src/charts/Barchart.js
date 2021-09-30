import React from 'react'
import {Bar} from "react-chartjs-2"



function Barchart(props) {
    
    return (
       <Bar
            data={{
                labels:props.arr,
                    datasets: [{
                      label: props.label,
                      data: props.arrcount,
                      backgroundColor: [
                       "#00acc1",
                       "#ffa726",
                       "#00c853",
                       "#f4511e"
                      ],
                      borderColor: [
                       "#d7ccc8"
                      ],
                      borderWidth: 1,
                      borderRadius:7
                      
                    }]
            }}
            height={300}
            width={200}
            options={
               
                {
                maintainAspectRatio:false,
                
                } 
            }
       />
    )
}

export default Barchart
