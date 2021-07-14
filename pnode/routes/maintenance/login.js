const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')
router.use(bodyparser.json())
router.use(bodyparser.urlencoded())
const fetch = require('node-fetch')
const base64 = require('base-64')
const xml2js = require('xml2js')
const parser = xml2js.Parser()
const username = 'POUSER'
const password = 'Tech@2021'
router.post('/', async (req, res) => {

    const user_id=req.body.user_id;
    const pass=req.body.pass;
    console.log(user_id);
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_EMPDETAILS_DL>
          <!--You may enter the following 3 items in any order-->
          <ID>${user_id}</ID>
          <PASSWORD>${pass}</PASSWORD>
          <IT_FINAL>
            
          </IT_FINAL>
       </urn:ZBAPI_EMPDETAILS_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

 const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMPLOYEEDETAILS_DL&receiverParty=&receiverService=&interface=SI_EMPDETAILS_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_EMPDETAILS_DL.Response'][0]['FLAG'][0];
         console.log(res_data)
         res.send(res_data);
         
    })

})

module.exports = router