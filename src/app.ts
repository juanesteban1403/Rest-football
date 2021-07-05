import express, {Application} from 'express';
import morgan from 'morgan';
import routes from './routes/route'


//Application
const app: Application = express ();



//Settings
app.set('port',3000)

//middleware debug
//app.use(morgan('dev'))

//routes

app.use('/api/v1.0',routes)



export default app;