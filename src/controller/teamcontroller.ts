import { Request,Response } from "express";
const soap =require("soap") ;
import getCoachName from "../mock/getcoachnames";
const url:string = 'https://ws.footballpool.dataaccess.eu/info.wso?WSDL';


const teamCoachName  = (request:Request, response:Response) =>{
    try{
        soap.createClient(url, function(err:any, client:any){
            if(err){ response.json(500).json(err); console.log(err);}
            if(client){
            client.AllTeamCoachNames(getCoachName, function(err:any,result:any){
                if (err) { response.json(500).json(err); console.log(err);}
                response.status(200).json(result)

            })
        }
        })
    }
    catch(error){
        response.status(500).json(error); console.log(error);
    }

};

export default teamCoachName;