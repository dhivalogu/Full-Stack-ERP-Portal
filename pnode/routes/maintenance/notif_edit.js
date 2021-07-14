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

    const notifNo=req.body.notifNo;
    const notifType=req.body.notifType;
    const equipment=req.body.equipment;
    const priority=req.body.priority;
    const plant=req.body.plant;
    const shortText=req.body.shortText;
    const ReqObj = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZBAPI_NOTIFICATION_EDIT1_DL>
          
          <EQUIPMENT_NO>${equipment}</EQUIPMENT_NO>
          
          <NOTIFACTV>
            
          </NOTIFACTV>
          <!--Optional:-->
          <NOTIFACTV_X>
             
          </NOTIFACTV_X>
         
          <NOTIFCAUS>
             
          </NOTIFCAUS>
          
          <NOTIFCAUS_X>
             
          </NOTIFCAUS_X>
          
          <NOTIFHEADER1>
             
          </NOTIFHEADER1>
        
          <NOTIFHEADER_X>
            
          </NOTIFHEADER_X>
          
          <NOTIFITEM>
            
          </NOTIFITEM>
         
          <NOTIFITEM_X>
             
          </NOTIFITEM_X>
          <!--Optional:-->
          <NOTIFPARTNR>
             
          </NOTIFPARTNR>
          <!--Optional:-->
          <NOTIFPARTNR_X>
            
          </NOTIFPARTNR_X>
          <!--Optional:-->
          <NOTIFTASK>
             
          </NOTIFTASK>
          <!--Optional:-->
          <NOTIFTASK_X>
             
          </NOTIFTASK_X>
          <!--Optional:-->
          <NOTIF_NUMBER>${notifNo}</NOTIF_NUMBER>
          <!--Optional:-->
          <NOTIF_TYPE>${notifType}</NOTIF_TYPE>
          <!--Optional:-->
          <PLANT>${plant}</PLANT>
          <!--Optional:-->
          <PRIORITY>${priority}</PRIORITY>
          
          <RETURN>
             
          </RETURN>
          <!--Optional:-->
          <SHORTTEXT>${shortText}</SHORTTEXT>
       </urn:ZBAPI_NOTIFICATION_EDIT1_DL>
    </soapenv:Body>
 </soapenv:Envelope>`
    console.log(ReqObj);
   // Sending Response to the PIPO system
   const response= await fetch("http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_DHIVA&receiverParty=&receiverService=&interface=SI_NOTIFEDIT_DL&interfaceNamespace=http://dhiva.com/employee",
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
         res_data = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_NOTIFICATION_EDIT1_DL.Response'][0]['NOTIFHEADER_EXPORT'][0]['NOTIF_NO'][0];
         console.log(res_data);
         res.send(res_data);
         
    })
    
   //  Sending Response

})

module.exports = router