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

    const user_id=req.body.user_id;
    const date=req.body.date;

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_NOTICE_DL>
          <!--Optional:-->
          <P_DATE>${date}</P_DATE>
          <P_ID>${user_id}</P_ID>
       </urn:ZBAPI_NOTICE_DL>
    </soapenv:Body>
 </soapenv:Envelope>`
    console.log(ReqObj);
 const response= await fetch("http://SOLMAN.kaartech.com:8000/sap/bc/srt/rfc/sap/zbapi_notice_dl/100/zbapi_notice_dl/zbapi_notice_dl",
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
         res_data = data['soap-env:Envelope']['soap-env:Body'][0]['n0:ZBAPI_NOTICE_DLResponse'][0];
         console.log(res_data)
         res.send(res_data);
         
    })

})

module.exports = router