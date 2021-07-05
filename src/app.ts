import express, {Application} from 'express';
import morgan from 'morgan';
import soapClient  from './soapconnection/clientconnection';
import routes from './routes/route'

class Server {
    app: any;
    port: number;


    constructor() {
        this.app  = express();
        this.port = 3000;




        // Middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    soapConnect() {
        soapClient();
    }

    middlewares() {

        // Devmiddleware
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use('/api/v1.0',routes);
    }

    listen() {
        this.app.listen( this.port, () => {
           
        });
       
    }

}

module.exports = Server;