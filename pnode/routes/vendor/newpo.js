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
    COMPANY_CODE=req.query.COMPANY_CODE;
    DELIVERY_DATE=req.query.DELIVERY_DATE;
    DOC_DATE=req.query.DOC_DATE;
    LOCATION=req.query.LOCATION;
    MATERIAL=req.query.MATERIAL;
    PLANT=req.query.PLANT
    PURCHASE_GRP=req.query.PURCHASE_GRP;
    PURCHASE_ORG=req.query.PURCHASE_ORG;
    QUANTITY=req.query.QUANTITY;
    SHORT_TEXT=req.query.SHORT_TEXT;
    console.log(user_id);
    console.log(COMPANY);
    
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_PO_CREATE_DL>
          <COMPANY_CODE>${COMPANY_CODE}</COMPANY_CODE>
          <DELIVERY_DATE>${DELIVERY_DATE}</DELIVERY_DATE>
          <DOC_DATE>${DOC_DATE}</DOC_DATE>
          <LOCATION>${LOCATION}</LOCATION>
          <MATERIAL>${MATERIAL}</MATERIAL>
          <PLANT>${PLANT}</PLANT>
          <PURCHASE_GRP>${PURCHASE_GRP}</PURCHASE_GRP>
          <PURCHASE_ORG>${PURCHASE_ORG}</PURCHASE_ORG>
          <QUANTITY>${QUANTITY}</QUANTITY>
          <!--Optional:-->
          
          <SHORT_TEXT>${SHORT_TEXT}</SHORT_TEXT>
          <VENDORID>${user_id}</VENDORID>
       </urn:ZBAPI_PO_CREATE_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_po_create_dl/100/zbapi_po_create_dl/zbapi_po_create_dl",
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

   webservice_data =parser.parseString(response, (err,data) => {
         res_data = data['soap-env:Envelope']['soap-env:Body'][0];
         console.log(res_data)
         res.send(res_data);
         
    })
    

})

module.exports = router