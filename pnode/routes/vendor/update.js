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

// Home Soap API Router
router.get('/', async (req, res) => {

    const user_id=req.query.user_id;
    const country=req.query.country
    const postal=req.query.postal
    const region=req.query.region
    const fname=req.query.fname
    const lname=req.query.lname
    const city=req.query.city
    const street=req.query.street
    const mobile=req.query.mobile

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_VENDOR_UPDATE_DL>
          <CITY>${city}</CITY>
          <COUNTRY>${country}</COUNTRY>
          <ID>${user_id}</ID>
          <NAME1>${fname}</NAME1>
          <NAME2>${lname}</NAME2>
          <PHONE_NUMBER>${mobile}</PHONE_NUMBER>
          <POSTAL_CODE>${postal}</POSTAL_CODE>
          <REGION>${region}</REGION>
          <STREET>${street}</STREET>
       </urn:ZBAPI_VENDOR_UPDATE_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_vendor_update_dl2/100/zbapi_vendor_update_dl2/zbapi_vendor_update_dl2",
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

   // Consoling the response object from pipo
 
   
   // Parsing the reponse object for the response data from pipo
   webservice_data =parser.parseString(response, (err,data) => {
         res_data = data['soap-env:Envelope']['soap-env:Body'];
         console.log(res_data)
         console.log("hi");
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router