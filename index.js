let express = require('express')
let app = express()
let cors = require('cors')
require('./dbconnect')

// require the router's student
const studentRoutes = require('./router/student');

// middlewares
app.use(express.json())
app.use(cors())

// path
app.use('/',studentRoutes)

// code runnig on port 1000
app.listen(1000,()=>{
    console.log("server start")
})