import React, {  useCallback, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import backimage from './wave.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from '../AboutUs/About'
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop:'50px'
    },
    [theme.breakpoints.up('md')]: {
      marginTop:'60px'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop:'60px'
    },
  },
  mainText:{
    fontFamily:'"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    textShadow: '2px 2px 5px red',
    border:'red',
    [theme.breakpoints.up('xs')]: {
      fontSize:'5em',
      // color: 'green'
    },

    [theme.breakpoints.up('sm')]: {
      fontSize:'4em',
      // color: 'blue'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize:'7em',
      // color: 'red'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'9em'
    },
  }
}));


function Home() {
  const classes = useStyles();
const history = useHistory();
const F_Walkin = useCallback(() => history.push('/fresherswalkin'), [history]);
const E_Walkin = useCallback(() => history.push('/experiencewalkin'), [history]);
  return(
    <Grid container >
      <Grid container style={{height:'100vh', width:"100%" ,backgroundImage:`url(${backimage})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover', backgroundPosition:'center'}}>
        <Typography className={classes.mainText}>WELCOME TO SELFLESS FAMILY</Typography>
      </Grid>
      <div style={{height:'100vh',width:"100%", padding:'20px'}}>
        <Typography variant='h3' >Our Happy Students</Typography>
      </div>
      {/* TESTING ROUTING BUTTONS */}
      {/* <Button variant="contained" color="primary" onClick={()=> F_Walkin()}>
        Primary
      </Button>
      <Button variant="contained" color="primary" onClick={()=> E_Walkin()}>
        Primary
      </Button> */}

    </Grid>

  )  

}


export default Home;