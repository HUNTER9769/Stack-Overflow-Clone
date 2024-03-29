import {BrowserRouter as Router,  Route , Link, } from 'react-router-dom';
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box } from '@mui/material';
import ReactDOM from "react-dom";
import React from "react";
import { useDispatch } from 'react-redux';
import { useEffect , useState} from 'react';

import User from './pages/Users/User';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import ChatbotFloater from './components/ChatBotFloater/ChatbotFloater';
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app'
// import { onAuthStateChanged } from "firebase/auth"; 





function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  console.log(lat)
  console.log(long)
  const [data, setData] = useState([]);
  // const [currentuser, setCurrentUser] = useState(null);
  const todays_date = new Date();
  const hour_now = todays_date.getHours()
  const dispatch = useDispatch()
  // const firebaseConfig = {
  //   apiKey: "AIzaSyC06Yv1WqdisG1I6XKWVr5vEDG20oVtn3A",
  //   authDomain: "otp-verify-d92a3.firebaseapp.com",
  //   projectId: "otp-verify-d92a3",
  //   storageBucket: "otp-verify-d92a3.appspot.com",
  //   messagingSenderId: "734322643587",
  //   appId: "1:734322643587:web:5bbd584ea44abd5ea181b6",
  //   measurementId: "G-4GYY8ZW3KH"
  // };
  // // Initialize firebase
  // firebase.initializeApp(firebaseConfig);

  


  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(`${process.env.REACT_APP_OPENWEATHER_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      });
    }

    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
    
    // const unSubscribe = onAuthStateChanged(firebase.auth(), (user) => {
    //   console.log(user);
    //   setCurrentUser(user);
      
    // })
    // return () => unSubscribe( )

    console.log("Datain useffect: ",data)
    console.log('Url:',process.env.REACT_APP_OPENWEATHER_API_URL)
    console.log("KEy", process.env.REACT_APP_OPENWEATHER_API_KEY)

    
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch, lat, long])

  console.log('Data out of useeffect:',data)


  
  return (
    <div className="App">
      
      <Container >
      
        <Router>
          
            
            <Navbar data = {data} hour_now = {hour_now} />

            <AllRoutes />

            <ChatbotFloater style={{zIndex: 6}}/>

        </Router>

      </Container>
      
    </div>
  );
}

export default App;

