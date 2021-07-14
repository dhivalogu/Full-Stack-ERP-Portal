const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3200
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
const login = require("./routes/update"); 
app.use("/login", login);
const inquiry = require("./routes/inquiry"); 
app.use("/inquiry", inquiry);
const delivery = require("./routes/delivery"); 
app.use("/delivery", delivery);
const salesorder = require("./routes/salesorder"); 
app.use("/salesorder", salesorder);
const credit = require("./routes/credit"); 
app.use("/credit", credit);
const debit = require("./routes/debit"); 
app.use("/debit", debit);
const aging = require("./routes/aging"); 
app.use("/aging", aging);
const update = require("./routes/update"); 
app.use("/update", update);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })	

app.listen(port, () => {
    console.log(`Our app listening at http://localhost:${port}`)
  })