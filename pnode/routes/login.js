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
    const password=req.query.password

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_CUSTOMER_GETDETAILS>
          <IT_FINAL>
          </IT_FINAL>
          <PASSWORD>${password}</PASSWORD>
          <USER_ID>${user_id}</USER_ID>
       </urn:ZBAPI_CUSTOMER_GETDETAILS>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_customer_getdetails/100/zbapi_customer_getdetails/zbapi_customer_getdetails",
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
         res_data = data['soap-env:Envelope']['soap-env:Body'][0]['n0:ZBAPI_CUSTOMER_GETDETAILSResponse'][0]['IT_FINAL'][0]['item'];
         console.log(res_data)
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router