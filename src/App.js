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
      {/* <ListCountires /> */}
      <Graph />
      
    </div>
  );
}

export default App;
