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

router.get('/', async (req, res) => {

    const user_id=req.query.user_id;
    const seq=req.query.seq;
    
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_EMPPAYSLIPHTML_DL>
          <!--You may enter the following 3 items in any order-->
          <ID>${user_id}</ID>
          <SEQ>${seq}</SEQ>
          <IT_PAYSLIP_HTML>
             <!--Zero or more repetitions:-->
            
          </IT_PAYSLIP_HTML>
       </urn:ZBAPI_EMPPAYSLIPHTML_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

 console.log(ReqObj);
 const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_PAYSLIP_DL&receiverParty=&receiverService=&interface=SI_PAYSLIP_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_EMPPAYSLIPHTML_DL.Response'][0]['IT_PAYSLIP_HTML'][0]['item'];
         console.log(res_data)
         res.send(res_data);
         
    })

})

module.exports = router