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
    const address=req.query.address

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_CUSTOMER_UPDATE_DL>
          <ADRNR>${address}</ADRNR>
          <KUNNR>${user_id}</KUNNR>
          <LAND1>${country}</LAND1>
          <NAME1>${fname}</NAME1>
          <NAME2>${lname}</NAME2>
          <ORT01>${city}</ORT01>
          <PSTLZ>${postal}</PSTLZ>
          <REGIO>${region}</REGIO>
          <STRAS>${street}</STRAS>
          <TELF1>${mobile}</TELF1>
       </urn:ZBAPI_CUSTOMER_UPDATE_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_customer_update_dl/100/zbapi_customer_update_dl/zbapi_customer_update_dl",
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
         res_data = data['soap-env:Envelope']['soap-env:Body'][0]['n0:ZBAPI_CUSTOMER_UPDATE_DLResponse'][0]['FLAG'][0];
         console.log(res_data)
         console.log("hi");
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router