
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import chatRoutes from './routes/chatbot_routes.js'
import stripeRoutes from './routes/stripe_routes.js'

const app = express();
dotenv.config();
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})


//
// app.get("/home", (req, res) => {
//     let lat;
//     let long;
//     // geolocator = navigator.geolocation.getCurrentPosition(function(position) { lat = position.coords.latitude; long = position.coords.longitude;
//     // })
//     navigator.geolocation.getCurrentPosition(function(position) {
//         lat = position.coords.latitude;
//         long = position.coords.longitude;
//         console.log(lat, long)
//     })
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a61f27c463337d57f7a338a3cb1dc47f`)
//     .then(res=> res.json(res.data))
//     .catch(err => res.send(err))
//   })
//
app.use('/', chatRoutes)
// app.use('/', stripeRoutes)

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000; 

const DATABASE_URL = process.env.CONNECTION_URL 

mongoose.connect( DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)}))
    .catch((err) => console.log(err.message))
