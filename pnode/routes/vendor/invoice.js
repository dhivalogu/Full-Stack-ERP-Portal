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

router.post('/', async (req, res) => {

    const invno=req.body.invno;
    const user_id=req.body.user_id;
    const fisc_year=req.body.fisc_year;
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_INVOICE_PDF_DL>
          <HEADER>
            
          </HEADER>
          <ITEMS>
             
          </ITEMS>
          <P_FISC_YEAR>${fisc_year}</P_FISC_YEAR>
         <P_ID>${user_id}</P_ID>
         <P_INVOICE_NUMBER>${invno}</P_INVOICE_NUMBER>
         <P_OPTION>P</P_OPTION>
         <RETURN>

             
          </RETURN>
       </urn:ZBAPI_INVOICE_PDF_DL>
    </soapenv:Body>
 </soapenv:Envelope>`
console.log(ReqObj);
 const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_invoice_pdf_dl/100/zbapi_invoice_pdf_dl/zbapi_invoice_pdf_dl",
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
         res_data = data['soap-env:Envelope']['soap-env:Body'][0]['n0:ZBAPI_INVOICE_PDF_DLResponse'][0]['E_BASE64'][0];

         res.send(res_data);
         
    })

})

module.exports = router