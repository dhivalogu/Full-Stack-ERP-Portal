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

   
    const DURATION_NORMAL=req.body.DURATION_NORMAL;
    const EQUIPMENT=req.body.EQUIPMENT;
    const PRIORITY1=req.body.PRIORITY1;
    const ORDER_TYPE=req.body.ORDER_TYPE;
    const shortText=req.body.shortText;
    const NOTIF_NO=req.body.NOTIF_NO;
    const order_no=req.body.order_no;
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_ORDEREDIT_DL>
 
   
          <DURATION_NORMAL>${DURATION_NORMAL}</DURATION_NORMAL>
     
          <EQUIPMENT>${EQUIPMENT}</EQUIPMENT>
      
          <NOTIF_NO>${NOTIF_NO}</NOTIF_NO>
        
          <ORDER_NO>${order_no}</ORDER_NO>
       
          <ORDER_TYPE>${ORDER_TYPE}</ORDER_TYPE>
      
      
          <PRIORITY1>${PRIORITY1}</PRIORITY1>
         
         
          <RETURN>
             
          </RETURN>
       
          <SHORT_TEXT>${shortText}</SHORT_TEXT>
       </urn:ZBAPI_ORDEREDIT_DL>
    </soapenv:Body>
 </soapenv:Envelope>`
    console.log(ReqObj);
   // Sending Response to the PIPO system
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHIVA&receiverParty=&receiverService=&interface=SI_ORDEREDIT_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_ORDEREDIT_DL.Response'][0]['MESSAGE'][0];
         console.log(res_data);
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router