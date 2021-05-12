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
    

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_EMPLEAVEDATA_DL>
          <!--You may enter the following 3 items in any order-->
          <ID>${user_id}</ID>
          <IT_LEAVEBAL>
             <!--Zero or more repetitions:-->
            
          </IT_LEAVEBAL>
          <IT_LEAVEDATA>
          </IT_LEAVEDATA>
       </urn:ZBAPI_EMPLEAVEDATA_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

 const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_LEAVEDATA_DL&receiverParty=&receiverService=&interface=SI_LEAVEDATA_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_EMPLEAVEDATA_DL.Response'][0]['IT_LEAVEDATA'][0]['item'];
         console.log(res_data)
         res.send(res_data);
         
    })

})

module.exports = router