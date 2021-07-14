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

// Home Soap API Router
router.post('/', async (req, res) => {

   
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_NOTIFICATION_GETLIST_DL>
          <!--You may enter the following 4 items in any order-->
          <NOTI_DATE>2021-01-01</NOTI_DATE>
          <PLANGROUP>010</PLANGROUP>
          <PLANPLANT>SA02</PLANPLANT>
          <LIST>
             
          </LIST>
       </urn:ZBAPI_NOTIFICATION_GETLIST_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   console.log(ReqObj);
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_NOTILIST_DL&receiverParty=&receiverService=&interface=SI_NOTILIST_DL&interfaceNamespace=http://dhiva.com/employee",
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
       console.log(data['SOAP:Envelope']['SOAP:Body'][0]);
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_NOTIFICATION_GETLIST_DL.Response'][0]['LIST'][0]['item'];
         console.log(res_data)
         console.log("hi");
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router