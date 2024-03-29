import React, { useState } from 'react';
import Button from '@mui/material/Button';


//OpenWeather api weather codes
const thunderStormStart = 200
const thunderStormEnd = 232

const DrizzleStart = 300
const DrizzleEnd = 321

const RainStart = 500
const RainEnd = 531

const AtmosphereStart = 701
const AtmosphereEnd = 781
//

const day_start = 0; 
const day_end = 11; 

const night_start = 12;
const night_end = 23;

function checkRange(value, start, end) {
  return value >= start && value <= end;
}


function ColorToggleButton(props) {
  const [isBlack, setIsBlack] = useState(false);
  const parent_dom = document.getElementById('root')
  console.log('props.hours_now: ', props.hour_now)


  const appclass = document.getElementsByClassName("App");
  const navclass = document.getElementsByClassName("main-nav");
  const textclass = document.querySelectorAll(".dark-theme");
//   console.log('classcollection:',classcollection)

  const toggleBackgroundColor = () => {
    if (isBlack || props.data.length == 0 ) {
      appclass[0].style.backgroundColor = 'white';
      navclass[0].style.backgroundColor = 'white';
      textclass.forEach(text => {
        text.style.color = 'black';

      });


    } else if (checkRange(props.data.weather[0].id, AtmosphereStart, AtmosphereEnd) && checkRange(props.hour_now, day_start, day_end)) {
      console.log(checkRange(props.data.weather[0].id, AtmosphereStart, AtmosphereEnd))
      console.log('props.hours_now: ', props.hour_now)
      appclass[0].style.backgroundColor = '#808080';
      navclass[0].style.backgroundColor = '#808080';
      textclass.forEach(text => {
        text.style.color = 'white';
      });
    } else if (checkRange(props.data.weather[0].id, AtmosphereStart, AtmosphereEnd) && checkRange(props.hour_now, night_start, night_end)) {
      console.log(checkRange(props.data.weather[0].id, AtmosphereStart, AtmosphereEnd))
      console.log('props.hours_now: ', props.hour_now)
      appclass[0].style.backgroundColor = '#000000';
      navclass[0].style.backgroundColor = '#000000';
      textclass.forEach(text => {
        text.style.color = 'white';
      });
    }
  
    setIsBlack(!isBlack);
  };

  return (
    <Button variant='outlined' style={{
        height: '36px',
        margin: '0px 3px',
        fontSize: 'small',
        fontWeight: '500',
        textDecoration: 'none',
        color: 'rgb(69, 69, 69)',
        transition: '0.2s',
        zIndex:6, 
        position: "fixed", 
        top: "15px", 
        right: "10px", 
        padding: '7px 13px', 
        border: 'solid 1px blue', 
        borderRadius: '3px', 
        backgroundColor: '#e7f8fe',
        cursor: 'pointer'}} onClick={toggleBackgroundColor}>
      Theme
    </Button>
  );
}

export default ColorToggleButton;