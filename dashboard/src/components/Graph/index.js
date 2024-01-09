import {Line} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import "./index.css"

  
const Graph=()=>{
    const UserData = [
        {
          id: 1,
          year: "12 Am",     
          userGain: 2000,
          userLost: 823,
        },
        {
          id: 2,
          year: "",
          userGain: 2500,
          userLost: 345,
        },
        {
          id: 3,
          year: "",
          userGain: 3500,
          userLost: 555,
        },
        {
          id: 4,
          year: "",
          userGain: 4500,
          userLost: 4555,
        },
        {
          id: 5,
          year: "",
          userGain: 20000,
          userLost: 234,
        },
        {
          id: 1,
          year: "",     
          userGain: 30000,
          userLost: 823,
        },
        {
          id: 2,
          year: "",
          userGain: 25000,
          userLost: 345,
        },
        {
          id: 3,
          year: "",
          userGain: 15000,
          userLost: 555,
        },
        {
          id: 4,
          year: "",
          userGain: 10000,
          userLost: 4555,
        },
        {
          id: 5,
          year: "",
          userGain: 13000,
          userLost: 234,
        },
        {
          id: 1,
          year: "",     
          userGain: 80000,
          userLost: 823,
        },
        {
          id: 2,
          year: "",
          userGain: 65000,
          userLost: 345,
        },
        {
          id: 3,
          year: "",
          userGain: 75000,
          userLost: 555,
        },
        {
          id: 4,
          year: "",
          userGain: 50000,
          userLost: 4555,
        },
        {
          id: 5,
          year: "",
          userGain: 43000,
          userLost: 234,
        },
        {
          id: 1,
          year: "",     
          userGain: 50000,
          userLost: 823,
        },
        {
          id: 2,
          year: "",
          userGain: 35000,
          userLost: 345,
        },
        {
          id: 3,
          year: "",
          userGain: 28000,
          userLost: 555,
        },
        {
          id: 4,
          year: "",
          userGain: 35000,
          userLost: 4555,
        },
        {
          id: 5,
          year: "now",
          userGain: 25000,
          userLost: 234,
        },
        {
          id: 1,
          year: "",     
          userGain: 18000,
          userLost: 823,
        },
        {
          id: 2,
          year: "",
          userGain: 20000,
          userLost: 345,
        },
        {
          id: 3,
          year: "",
          userGain: 25888,
          userLost: 555,
        },
        {
          id: 4,
          year: "",
          userGain: 15000,
          userLost: 4555,
        },
        {
          id: 5,
          year: "",
          userGain: 10000,
          userLost: 234,
        },
        {
          id: 1,
          year: "",     
          userGain: 15000,
          userLost: 823,
        },
        {
          id: 2,
          year: "",
          userGain: 3000,
          userLost: 345,
        },
        {
          id: 3,
          year: "",
          userGain: 5000,
          userLost: 555,
        },
        {
          id: 4,
          year: "",
          userGain: 2000,
          userLost: 4555,
        },
        {
          id: 5,
          year: "11:59Pm",
          userGain: 4300,
          userLost: 234,
        },
      ];

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
        
      });
    
    return(
    <div className="graphContainer">
        <Line className="linechart" width={1500} height={300} data={userData}/>
    </div>
)}

export default Graph