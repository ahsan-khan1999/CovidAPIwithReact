/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from '@testing-library/react';
import CountUp from 'react-countup'
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent:'center',
        
    //   marginLeft:400,
      display:'flex',
      flexDirection:'row',
      '& > *': {
        margin: theme.spacing(8),
        width: theme.spacing(32),
        height: theme.spacing(25),
        backgroundColor:'lightGrey',
        textAlign:'center'
        
      },
    },
  }));
export default function Card({ data:{confirmed,recovered,deaths} }) {
    const classes = useStyles();
    // console.log(confirmed,recovered,deaths)

    if(!confirmed || !recovered || !deaths){
        return 'Loading ......'
    }
    // else{
    //     console.log(confirmed.value)
    // }
    return (
        <div className={classes.root}>
      <Paper elevation={3}>
          <h2 style={{textAlign:'center'}}>Confirmed Cases</h2>
          <br />
        <CountUp start={0} end={confirmed.value} separator=',' style={{fontWeight:'bold' , fontSize:24 }} />
            
        

      </Paper>
      <Paper elevation={3}>
          <h2 style={{textAlign:'center'}}>Recovered Cases</h2>
          <br />
        <CountUp start={0} end={recovered.value} separator=',' style={{fontWeight:'bold' , fontSize:24 }}/>
            
        

      </Paper>
      <Paper elevation={3} >
          <h2 style={{textAlign:'center'}}>Total Deaths</h2>
          <br />
        <CountUp start={0} end={deaths.value} separator=',' style={{fontWeight:'bold' , fontSize:24 }}/>
            
        

      </Paper>
    </div>
    )
}
