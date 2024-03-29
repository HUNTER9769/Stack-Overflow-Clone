import React, { useState , useEffect} from 'react'
import './PaymentPage.css'
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

const PaymentPage = () => {


    const initPayment = async () => {
        const stripe = await loadStripe('pk_test_51Oqvo3SBjwMGdqLwItnUB2jGxUP6Snqd47731ldHocSTR4ZmkmAFwVwtxisRyoJcIQuuyIXKwYEdxTqOwuuo7QhU00T8xRWwSL');

        const body = {
            products: 
                {
                    name: "Basic",
                    price: 0,
                    quantity: 1
                },
                // {
                //     name: "Silver",
                //     price: 100 
                // },
                // {
                //     name: "Gold",
                //     price: 1000
                // }
            
        } 

        const headers = {
            "Content-Type": "application/json"
        }
        
        const response = await fetch('http://localhost:5000/payment-session', {
            method:"POST",
            headers:headers,            
            body:JSON.stringify(body)
        })

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        })

        if (result.error) {
            console.log(result.error);
        }
    }

  return (
    <div className="pricing-container">
        <div className="pricing-plan">
        <div className="plan-title">Basic</div>
        <div className="plan-price">Free</div>
        <ul className="plan-features">
            <br />
            <li>✅ 1 question / day</li>
            <br />
            <li>Limited Support</li>
        </ul>
        <br />
        <button onClick={initPayment} className="plan-button">Sign Up For Free</button>
        </div>

        <div className="pricing-plan">
        <div className="plan-title">Silver</div>
        <div className="plan-price">₹100/month</div>
        <ul className="plan-features">
            <br />
            <li>✅ 5 questions / day </li>
            <br />
            <li>✅ Phone &amp; Email Support</li>
        </ul>
        <br />
        <button onClick={initPayment} className="plan-button">Sign Up</button>
        </div>

        <div className="pricing-plan">
        <div className="plan-title">Gold</div>
        <div className="plan-price">₹1000/month</div>
        <ul className="plan-features">
            <br />
            <li>✅ Unlimited questions / day</li>
            <br />
            <li>✅ 24/7 Support</li>
        </ul>
        <br />
        <button onClick={initPayment} className="plan-button">Sign Up</button>
        </div>
    </div>
  )
}

export default PaymentPage