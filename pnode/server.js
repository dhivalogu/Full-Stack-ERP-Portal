const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3200
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
const login = require("./routes/customer/login"); 
app.use("/login", login);
const inquiry = require("./routes/customer/inquiry"); 
app.use("/inquiry", inquiry);
const delivery = require("./routes/customer/delivery"); 
app.use("/delivery", delivery);
const salesorder = require("./routes/customer/salesorder"); 
app.use("/salesorder", salesorder);
const credit = require("./routes/customer/credit"); 
app.use("/credit", credit);
const debit = require("./routes/customer/debit"); 
app.use("/debit", debit);
const aging = require("./routes/customer/aging"); 
app.use("/aging", aging);
const update = require("./routes/customer/update"); 
app.use("/update", update);
const vlogin = require("./routes/vendor/vlogin"); 
app.use("/vendor/login", vlogin);
const vdetails = require("./routes/vendor/vendordetails"); 
app.use("/vendor/details", vdetails);
const vaging = require("./routes/vendor/aging"); 
app.use("/vendor/aging", vaging);
const vcredit = require("./routes/vendor/credit"); 
app.use("/vendor/credit", vcredit);
const vdebit = require("./routes/vendor/debit"); 
app.use("/vendor/debit", vdebit);
const vrfq = require("./routes/vendor/rfq"); 
app.use("/vendor/rfq", vrfq);
const vgoods = require("./routes/vendor/goods"); 
app.use("/vendor/goods", vgoods);
const vpo = require("./routes/vendor/po"); 
app.use("/vendor/po", vpo);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })	

app.listen(port, () => {
    console.log(`Our app listening at http://localhost:${port}`)
  })