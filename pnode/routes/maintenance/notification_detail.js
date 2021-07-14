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
    const id=req.body.id;
   
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_NOTIFICATION_DETAIL_DL>
          <P_NOTIFY_NO>${id}</P_NOTIFY_NO>
       </urn:ZBAPI_NOTIFICATION_DETAIL_DL>
    </soapenv:Body>
 </soapenv:Envelope>`

   // Sending Response to the PIPO system
   console.log(ReqObj);
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_NOTILIST_DL&receiverParty=&receiverService=&interface=SI_NOTIDETAIL_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_NOTIFICATION_DETAIL_DL.Response'][0]['HEADER'][0];
         res_data1 = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_NOTIFICATION_DETAIL_DL.Response'][0]['TEXT'][0];
         fin_data =Object.assign(res_data,res_data1);
         console.log(fin_data)
         console.log("hi");
         const final={
             'Notification No' : fin_data["NOTIF_NO"],
             'Maintenance Planning Plant' :fin_data["PLANPLANT"],
             'Equipment No':fin_data["EQUIPMENT"],
             'Short Text':fin_data["SHORT_TEXT"],
             'Equipment':fin_data["EQUIDESCR"],
             'Start Date':fin_data["STRMLFNDATE"],
             'Time':fin_data["STRMLFNTIME"],
             'Notification Type':fin_data["NOTIF_TYPE"],
             'Priority Type':fin_data["PRIOTYPE"],
             'Priority':fin_data["PRIORITY"],
             'Notification Date':fin_data["NOTIF_DATE"],
             'Required End Date':fin_data["DESENDDATE"],
             'Order ID':fin_data["ORDERID"],
             'Maintenance Plant':fin_data["MAINTPLANT"],
             'Cost Center':fin_data["COSTCENTERSTRMLFNTIME"],
             'Functional Location':fin_data["FUNCT_LOC"],
             'Work Center':fin_data["WORK_CNTR"]



         };
         res.send(final);
         
    })
    
   //  Sending Response

})

module.exports = router