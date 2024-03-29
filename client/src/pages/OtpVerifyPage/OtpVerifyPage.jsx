import React, {useState , useEffect} from 'react'
import OtpVerify from '../../components/OtpVerify/OtpVerify'
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import { onAuthStateChanged } from "firebase/auth"; 

const OtpVerifyPage = () => {
    const [user, setUser] = useState(null);

    const firebaseConfig = {
        apiKey: "AIzaSyC06Yv1WqdisG1I6XKWVr5vEDG20oVtn3A",
        authDomain: "otp-verify-d92a3.firebaseapp.com",
        projectId: "otp-verify-d92a3",
        storageBucket: "otp-verify-d92a3.appspot.com",
        messagingSenderId: "734322643587",
        appId: "1:734322643587:web:5bbd584ea44abd5ea181b6",
        measurementId: "G-4GYY8ZW3KH"
      };
    // Initialize firebase
    firebase.initializeApp(firebaseConfig);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged( firebase.auth(), (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
          })
        return () => unSubscribe();
    }, [])



  return (
    <OtpVerify auth = {firebase.auth()}/>
  )
}

export default OtpVerifyPage