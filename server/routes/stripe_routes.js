import express from 'express'
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51Oqvo3SBjwMGdqLwS4R9aIQgCXvHnmyxOmP20pp3rWYggIzFBzzadqd2rtcfzoZmcd5KtHlyQ9HPBWTm0P75WMIe00dTyEKbCz');

const router = express.Router()

router.post('/payment-subscription-session', async(req, res) =>  { 
    const { products } = req.body;

    const lineItems = products.map((product) => ({
        price_data : {
            currency: "usd",
            product_data: {
                name: product.name
            },
            unit_amount: Math.round(product.price*100)
        }
        ,quantity: product.quantity
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items:[
            {
              price: 100,
              quantity: 1,
            },
          ],
        mode:"subscription",
        success_url: "http://localhost:3000/AskQuestion",
        cancel_url: "http://localhost:3000/"
    })

    res.json({id:session.id})
})


export default router