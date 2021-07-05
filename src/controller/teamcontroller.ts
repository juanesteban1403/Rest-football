import { Request,Response } from "express";
import soap from "soap";
import getCoachName from "../mock/getcoachnames";
import allteamcoachnames from "./soapclient"
const url:string = 'https://ws.footballpool.dataaccess.eu/info.wso?WSDL';
import client from "../index";

const teamCoachName  = (request:Request, response:Response) =>{
    console.log(client)
    /* const clientPromise = new Promise((resolve,reject)=>{
        soap.createClient(url,function(err,client){
            if(err) console.log(err)
            console.log(client.describe());
            return  client;
        })
    }) */
    /* Get Team Choach Name */

    const client1 = soap.createClientAsync(url)
    .then((instance) => {
        client = instance
    })
    .then(() => {
        return client.AllTeamCoachNames(getCoachName);
    })
    response.send(JSON.stringify(client1))

    /* soap.createClient(url, function(err:any, client:any) {
        if (err) console.log(err);

        client.AllTeamCoachNames(getcoachnames, function(err:any, result:any) {
            if (err) console.log(err);
            response.send(JSON.stringify(result));
            return ;
        });
    });  */ 
    /* const clientPromise = new Promise((resolve,reject)=>{
        soap.createClient(url,function(err,client){
            if(err) console.log(err)
            console.log(client.describe());
            return  client;
        })
    }).then(client) clientPromise.AllTeamCoachNames(getCoachName,function(err,result){
        if (err) console.log(err);
        console.log(result);
        return result;
    })*/

};

export default teamCoachName;