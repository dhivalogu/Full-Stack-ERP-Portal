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
router.post('/', async (req, res) => {

   

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_ORDERLIST_DL>
          <DISPLAY>
             <PAGELENGTH>50</PAGELENGTH>
             <SHOW_PAGE_NUMBER>1</SHOW_PAGE_NUMBER>
             <FORCE_REFRESH>?</FORCE_REFRESH>
          </DISPLAY>
          <IT_RANGES>
            
          </IT_RANGES>
          <IT_RESULT>
             
          </IT_RESULT>
          <RETURN>
             <!--Zero or more repetitions:-->
             
          </RETURN>
       </urn:ZBAPI_ORDERLIST_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   const response1= await fetch("https://fcm.googleapis.com/fcm/send",
   {

      method: "POST",
      headers:{
         'Content-Type':'application/json',
         'Authorization':'key=AAAAzjOVBak:APA91bE-LvvtNk1iMjpmxpSc6T0FEQJMPADpN5GyCXfUSXd4TVjGcptI358qzmkbNy-VoSr5p5ImcghKVLDIctCD9A3rYmk3qnCmLRQCr6TbUn-1naie_oV8ZxGwOO4qp9g1VJFgUsCO'
      },
      body:JSON.stringify({
         "notification": {
             "body": "Notification from postman",
             "title": "You have a new message."
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

   // Consoling the response object from pipo
 
   
   // Parsing the reponse object for the response data from pipo
   console.log(response1);
   res.send(response1);
    
   //  Sending Response

})

module.exports = router