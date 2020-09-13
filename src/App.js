/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import ListCountires from './Components/ListCountires';
import Graph from './Components/Graph';
import {GetData} from './API/Api'

function App() {
  const [data,setData] = useState({});
  const [country,setCountry] = useState('');

  async function handleCountryChange(country){
    let data = await GetData(country);
    setData(data);
    setCountry(country);
    console.log(data);
  }

  useEffect(() => {
    async function getData(){
      let data = await GetData();
      // console.log(data)
      setData(data);
     
    }
    getData();
  },[])

  return (
    <div >
      <Card data={data}/>
      <ListCountires handleCountryChange={handleCountryChange}/>
      <Graph data={data} country={country}/>
      
    </div>
  );
}

export default App;
