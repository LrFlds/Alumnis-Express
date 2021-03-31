import { UserRoute } from './../Routes/userRoutes';
import * as express from 'express';
import * as cors from 'cors';


class App {
    public app: express.Application;
    public userRoutes:UserRoute = new UserRoute();
    constructor(){
        this.app = express();
        this.config();
        this.userRoutes.userRoutes(this.app);
    }
    private config(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true}));
        this.app.use(cors({
            origin:[''],
            credentials:true,
        }))
    }
}
 export default new App().app;
