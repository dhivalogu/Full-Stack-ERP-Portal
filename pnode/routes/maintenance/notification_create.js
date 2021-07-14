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

   var no='';
    const notifType=req.body.notifType;
    const equipment=req.body.equipment;
    const priority=req.body.priority;
    const plant=req.body.plant;
    const plantGroup=req.body.plantGroup;
    const reportedBy=req.body.reportedBy;
    const shortText=req.body.shortText;
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_NOTIFICATION_CREATE_DL>
          <NOTI_HEADER>
             
             <EQUIPMENT>${equipment}</EQUIPMENT>
             
             <SHORT_TEXT>${shortText}</SHORT_TEXT>
             <PRIORITY>${priority}</PRIORITY>
             
             <PLANPLANT>${plant}</PLANPLANT>
             <PLANGROUP>${plantGroup}</PLANGROUP>
            
             <REPORTEDBY>${reportedBy}</REPORTEDBY>
             
          </NOTI_HEADER>
          <NOTI_TYPE>${notifType}</NOTI_TYPE>
       </urn:ZBAPI_NOTIFICATION_CREATE_DL>
    </soapenv:Body>
 </soapenv:Envelope>`
    console.log(ReqObj);
   // Sending Response to the PIPO system
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHIVA&receiverParty=&receiverService=&interface=SI_NOTIFCREATE_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_NOTIFICATION_CREATE_DL.Response'][0]['NOTI_HEADER_SAVE'][0]['NOTIF_NO'][0];
         console.log(res_data);
         res.send(res_data);
         no=res_data;
         
    })

    const response1= await fetch("https://fcm.googleapis.com/fcm/send",
   {

      method: "POST",
      headers:{
         'Content-Type':'application/json',
         'Authorization':'key=AAAAzjOVBak:APA91bE-LvvtNk1iMjpmxpSc6T0FEQJMPADpN5GyCXfUSXd4TVjGcptI358qzmkbNy-VoSr5p5ImcghKVLDIctCD9A3rYmk3qnCmLRQCr6TbUn-1naie_oV8ZxGwOO4qp9g1VJFgUsCO'
      },
      body:JSON.stringify({
         "notification": {
             "body": no,
             "title": "Notification Created"
         },
         "priority": "high",
         "data": {
             "clickaction": "FLUTTERNOTIFICATIONCLICK",
             "id": "1",
             "status": "done"
         },
         "to": "/topics/all"
     })

   }).then(res=> res.text());
   console.log(response1);
   res.send(response1);
    
   //  Sending Response

})

module.exports = router