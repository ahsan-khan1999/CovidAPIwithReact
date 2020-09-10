/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

export const GetData =async () => {

    const res = await fetch('https://covid19.mathdro.id/api');
    let data = await res.json()

    const modifiedData ={
        confirmed:data.confirmed,
        deaths:data.deaths,
        recovered:data.recovered,

    }
    return modifiedData;


}
export const getDailyData = async () => {
    const res = await fetch('https://covid19.mathdro.id/api/daily')
    let data = await res.json();
    return data
}