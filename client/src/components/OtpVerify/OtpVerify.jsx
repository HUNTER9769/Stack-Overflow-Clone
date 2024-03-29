import React, { useEffect } from 'react'
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const OtpVerify = ({auth}) => {
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start(".otp-container", {
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      signInSuccessUrl:
        "/ChatPage",
      privacyPolicyUrl: "/",
    });
  });

  return (
    <div style={{ marginTop: "200px" }} className='otp-container'></div>
  )
}

export default OtpVerify