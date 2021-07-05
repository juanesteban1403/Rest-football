import app from "./app";

function main(){
  /* Calls main fuction from app express */
    app.listen(app.get('port'));
}

main();