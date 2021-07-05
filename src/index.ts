import getCoachName from "./mock/getcoachnames";
import app from "./app";

var soap = require('soap');
var url:string = 'https://ws.footballpool.dataaccess.eu/info.wso?WSDL';
const client1= soap.createClientAsync(url).then((client:any) => {
    return client.AllTeamCoachNames(getCoachName);
  }).then((result:any) => {
    console.log(result);
  });
/*   var url = 'https://ws.footballpool.dataaccess.eu/info.wso?WSDL';

  soap.createClient(url, function(err:any, client:any) {
      client.AllTeamCoachNames(getcoachnames, function(err:any, result:any) {
          console.log(JSON.stringify(result));
      });
  }); */
function main(){
    app.listen(app.get('port'));
}

main();