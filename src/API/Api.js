/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

export const GetData =async (country) => {

    let data=''
    if(!country || country === 'Global'){
    const res = await fetch('https://covid19.mathdro.id/api');
    data = await res.json()
}
    else{
        const res = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
        data = await res.json()
    }

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
export const getCountries = async () => {
    const res = await fetch('https://covid19.mathdro.id/api/countries');
    let {countries} = await res.json();

    
    return countries.map((country) => country.name);
    
}