//XML
const getCoachName:string =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:foot="https://footballpool.dataaccess.eu">
   <soapenv:Header/>
   <soapenv:Body>
      <foot:AllTeamCoachNames/>
   </soapenv:Body>
</soapenv:Envelope>`

export default getCoachName;