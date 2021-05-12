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
router.get('/', async (req, res) => {

    const user_id=req.query.user_id;
    const start_date=req.query.START_DATE;
    const end_date=req.query.LAST_DATE;
    const type=req.query.LEAVE_TYPE;
    const hours=req.query.HOURS;
      console.log(start_date);
      console.log(end_date);
      console.log(type);
      console.log(hours);
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_EMPLEAVECREATE_DL>
          <!--You may enter the following 5 items in any order-->
          <END_DATE>${end_date}</END_DATE>
          <HOURS>${hours}</HOURS>
          <ID>${user_id}</ID>
          <LEAVE_TYPE>${type}</LEAVE_TYPE>
          <START_DATE>${start_date}</START_DATE>
       </urn:ZBAPI_EMPLEAVECREATE_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   console.log(ReqObj);
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_LEAVECREATE_DL&receiverParty=&receiverService=&interface=SI_LEAVECREATE_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_EMPLEAVECREATE_DL.Response'][0]['RETURN'][0]['MESSAGE'];
         console.log(res_data)
         console.log("hi");
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router