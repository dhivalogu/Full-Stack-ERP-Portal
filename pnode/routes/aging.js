const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')
router.use(bodyparser.json())
router.use(bodyparser.urlencoded())
const fetch = require('node-fetch')
const base64 = require('base-64')
const xml2js = require('xml2js')
const parser = xml2js.Parser()
const username = 'abaper'
const password = 'abap@123'

router.get('/', async (req, res) => {

    const user_id=req.query.user_id;
    const password=req.query.password

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_AGING_GETDETAILS_DL>
          <CUSTOMER_ID>0000000006</CUSTOMER_ID>
          <DATE>2021-03-28</DATE>
          <IT_FINAL>
       
          </IT_FINAL>
       </urn:ZBAPI_AGING_GETDETAILS_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

 const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_aging_getdetails_dl/100/zbapi_aging_getdetails_dl/zbapi_aging_getdetails_dl",
   {

      method: "POST",
      mode :'cors',
      cache :'no-cache',
      credentials:'include',
      headers:{
         'Content-Type':'text/xml',
         'Authorization':'Basic '+ base64.encode(username + ':' + password)
      },
      redirect:'follow',
      referrerPolicy:'no-referrer',
      body:ReqObj

   }).then(res=> res.text());

   data =parser.parseString(response, (err,data) => {
         res_data = data['soap-env:Envelope']['soap-env:Body'][0]['n0:ZBAPI_AGING_GETDETAILS_DLResponse'][0]['IT_FINAL'][0]['item'];
         console.log(res_data)
         res.send(res_data);
         
    })

})

module.exports = router