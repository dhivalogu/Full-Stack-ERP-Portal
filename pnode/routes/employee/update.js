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
    const country=req.query.country
    const postal=req.query.postal
    const dob=req.query.dob
    const fname=req.query.fname
    const lname=req.query.lname
    const city=req.query.city
    const street=req.query.street
    const mobile=req.query.mobile
    const fullname= fname +' '+lname

    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_EMPDETAILS_EDIT_DL>
          <!--You may enter the following 9 items in any order-->
          <CITY>${city}</CITY>
          <COUNTRY>${country}</COUNTRY>
          <DOB>${dob}</DOB>
          <ID>${user_id}</ID>
          <LNAME>${lname}</LNAME>
          <NAME>${fullname}</NAME>
          <PHONE_NUMBER>${mobile}</PHONE_NUMBER>
          <POSTAL_CODE>${postal}</POSTAL_CODE>
          <STREET>${street}</STREET>
       </urn:ZBAPI_EMPDETAILS_EDIT_DL>
    </soapenv:Body>
 </soapenv:Envelope>`
   console.log(ReqObj);
   // Sending Response to the PIPO system
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMPEDIT_DL&receiverParty=&receiverService=&interface=SI_EMPEDIT_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_EMPDETAILS_EDIT_DL.Response'][0]['RETURN'][0]['MESSAGE'];
         console.log(res_data)
         console.log("hi");
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router