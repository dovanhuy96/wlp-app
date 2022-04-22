import express, {Application, Response, Request} from 'express';
import bodyParser from 'body-parser';
import sequelizeConnection from './src/models/sequelize';

export default function wlpApp() {
    const app: Application = express();
    sequelizeConnection
        .authenticate()
        .then(() => {
            console.log("sequelizeConnection connected!")
        })
        .catch(() => {
            // throw "error";
            console.log("eerrr");
            
        });
    
    const PORT = process.env.PORT || 5000;
    
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))
    
    // parse requests of content-type - application/json
    app.use(bodyParser.json())
    
    // app.use('', todoApi);
    
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World! - Do Van Huy')
    });
    
    
    app.listen(PORT, () => {
        console.log("port 5000 is listening!");
    })


    // return app;
}
wlpApp();