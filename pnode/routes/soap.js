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
const password = '2021@Tech'

// Home Soap API Router
router.get('/', async (req, res) => {

    const user_id = '0000000006'
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_CUSTOMER_GETDETAILS>
          <!--You may enter the following 3 items in any order-->
          <PASSWORD>?</PASSWORD>
          <USER_ID>${user_id}</USER_ID>
          <IT_FINAL>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <KUNNR>?</KUNNR>
                <!--Optional:-->
                <LAND1>?</LAND1>
                <!--Optional:-->
                <NAME1>?</NAME1>
                <!--Optional:-->
                <NAME2>?</NAME2>
                <!--Optional:-->
                <ORT01>?</ORT01>
                <!--Optional:-->
                <PSTLZ>?</PSTLZ>
                <!--Optional:-->
                <REGIO>?</REGIO>
                <!--Optional:-->
                <SORTL>?</SORTL>
                <!--Optional:-->
                <STRAS>?</STRAS>
                <!--Optional:-->
                <TELF1>?</TELF1>
                <!--Optional:-->
                <TELFX>?</TELFX>
                <!--Optional:-->
                <ADRNR>?</ADRNR>
                <!--Optional:-->
                <FLAG>?</FLAG>
             </item>
          </IT_FINAL>
       </urn:ZBAPI_CUSTOMER_GETDETAILS>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_CUSTDETAILS&receiverParty=&receiverService=&interface=SI_CUSTOMER_DETAILS&interfaceNamespace=http://dhiva.com/customer",
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
 
   
   // PArsing the reponse object for the response data from pipo
   pipo_data =parser.parseString(response, (err,data) => {
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_CUSTOMER_GETDETAILS.Response'][0]['IT_FINAL'][0]['item'][1];
         console.log(res_data)
    })

   //  Sending Response

})

module.exports = router