const express = require('express')
const app = express()
const port = 3200
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
const login = require("./routes/login"); 
app.use("/login", login);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })	

app.listen(port, () => {
    console.log(`Our app listening at http://localhost:${port}`)
  })