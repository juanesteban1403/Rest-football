import express, {Application} from 'express';
import morgan from 'morgan';


const app: Application = express ();

import routes from './routes/route'

//Settings
app.set('port',3000)

//middleware
app.use(morgan('dev'))

//routes

app.use('/api/v1.0',routes)



export default app;