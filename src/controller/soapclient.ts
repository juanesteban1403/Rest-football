const soap = require('soap');
import getCoachName from "../mock/getcoachnames";
import clientPromise from "index";

clientPromise.AllTeamCoachNames(getCoachName,function(err,result){
    if (err) console.log(err);
    console.log(result);
    return result;
})


/* const [allteamcoachnames] = soap.createClientAsync(url)
    .then((client:any) =>{
        return client.AllTeamCoachNames(getCoachName);
    })
    .then((result:any)=>{
        console.log(result)
    }); */
 /* const   allteamcoachnames=(async () => {
        const client = await soap.createClientAsync(url);
        const response  = await client.AllTeamCoachNames(getCoachName);
        return response;
        })(); */

/* const allteamcoachnames =  soap.createClient(url, function(err:any, client:any) {
    client.AllTeamCoachNames(getCoachName, function(err:any, result:any) {
        
        return result;
    });
}); */


export default allteamcoachnames;


