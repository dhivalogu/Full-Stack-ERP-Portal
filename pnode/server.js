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
const elogin = require("./routes/employee/login"); 
app.use("/employee/login", elogin);
const edetails = require("./routes/employee/details"); 
app.use("/employee/details", edetails);
const eupdate = require("./routes/employee/update"); 
app.use("/employee/update", eupdate);
const eleavedata = require("./routes/employee/leavedata"); 
app.use("/employee/leavedata", eleavedata);
const eleaveapply = require("./routes/employee/applyleave"); 
app.use("/employee/applyleave", eleaveapply);
const payslip = require("./routes/employee/payslip"); 
app.use("/employee/payslip", payslip);
const leavebal = require("./routes/employee/leavebal"); 
app.use("/employee/leavebal", leavebal);
const vupdate = require("./routes/vendor/update"); 
app.use("/vendor/update", vupdate);
const vinvoicelist = require("./routes/vendor/invoicelist"); 
app.use("/vendor/invoicelist", vinvoicelist);
const vinvoice = require("./routes/vendor/invoice"); 
app.use("/vendor/invoice", vinvoice);
const vpoc = require("./routes/vendor/newpo"); 
app.use("/vendor/newpo", vpoc);
const mlogin = require("./routes/maintenance/login"); 
app.use("/maintenance/login", elogin);
const efnf = require("./routes/employee/fnf"); 
app.use("/employee/fnf", efnf);
const epayroll = require("./routes/employee/payroll"); 
app.use("/employee/payroll", epayroll);
const ecn = require("./routes/employee/checknotice"); 
app.use("/employee/cn", ecn);
const enotice = require("./routes/employee/notice"); 
app.use("/employee/notice", enotice);
const mnotifylist = require("./routes/maintenance/notification_list"); 
app.use("/maintenance/nlist", mnotifylist);
const morderlist = require("./routes/maintenance/order_list1"); 
app.use("/maintenance/olist", morderlist);
const mnview = require("./routes/maintenance/notification_detail"); 
app.use("/maintenance/nview", mnview);
const morderdisplay = require("./routes/maintenance/order_display"); 
app.use("/maintenance/odetail", morderdisplay);
const mnotifcreate = require("./routes/maintenance/notification_create"); 
app.use("/maintenance/ncreate", mnotifcreate);
const mordercreate = require("./routes/maintenance/order_create"); 
app.use("/maintenance/ocreate", mordercreate);
const morderedit = require("./routes/maintenance/order_edit"); 
app.use("/maintenance/oedit", morderedit);
const mnotifedit = require("./routes/maintenance/notif_edit"); 
app.use("/maintenance/nedit", mnotifedit);
const fcm = require("./routes/maintenance/fcm"); 
app.use("/maintenance/fcm", fcm);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })	

app.listen(port, () => {
    console.log(`Our app listening at http://localhost:${port}`)
  })