/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { getDailyData } from '../API/Api'
import { Line, Bar } from 'react-chartjs-2'
import '../App.css'
export default function Graph({ data :{confirmed,recovered,deaths}, country }) {
    // console.log
    let [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        async function getData() {

            setDailyData(await getDailyData());

        }

        getData();
    }, [])

    const lineChart = (
        dailyData ? (
            <Line data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [{
                    data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
                    label: 'Infected',
                    borderColor: 'green',
                    fill: true

                }, {
                    data: Object.values(dailyData.map((data, i) => dailyData[i].deaths.total)),

                    label: 'Deaths',
                    borderColor: 'green',
                    backgroundColor: 'yellow',
                    fill: true
                }]
            }}
            />
        ) : null
    );
    const BarChart = (
        confirmed || recovered || deaths ? (
            <Bar data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['Red','blue','yellow'],
                    data:[confirmed.value,recovered.value,deaths.value],
                }]
            }}
            options={{
                legend:false,
                title:{display:true,text:`Current Stats in ${country}`},
            }}
            >

            </Bar>
        ) : null
    )


    return (
        <div style={{ width: '60%', marginLeft: '19%' }}>
            {
                !country || country === 'Global' ? lineChart :BarChart
            }
        </div>
    )
}
