/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import {getDailyData} from '../API/Api'
import {Line} from 'react-chartjs-2'
import '../App.css'
export default function Graph() {

    let [dailyData,setDailyData] = useState([]);
    useEffect(()=>{
        async function getData(){
            
            setDailyData(await getDailyData());
             
        }
        
        getData();
    },[])

    const lineChart = (
        dailyData ? (
            <Line data={{
                labels :dailyData.map(({reportDate }) => reportDate),
                datasets :[{
                    data:dailyData.map(({totalConfirmed}) => totalConfirmed),
                    label:'Infected',
                    borderColor:'green',
                    fill:true

                },{
                    data:Object.values(dailyData.map((data,i) => dailyData[i].deaths.total)),
                        
                    label:'Deaths',
                    borderColor:'green',
                    backgroundColor:'yellow',
                    fill:true
                }]
            }}
            />
        ) : null
    );

    console.log(dailyData)
    return (
        <div style={{width:'60%' ,marginLeft:'19%'}}>
            {
                lineChart
            }
        </div>
    )
}
