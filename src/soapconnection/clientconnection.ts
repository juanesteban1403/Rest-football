const soap = require('soap');
const url:string =`https://ws.footballpool.dataaccess.eu/info.wso?WSDL`;


const soapClient =()=>{
    try {
        soap.createClient(url, function(err:any, client:any) {
            if (client) {
                return client;
            }else {
                return err;
            } 
        });
    }catch (error) {
        console.log(error)
    };
}

export default soapClient;