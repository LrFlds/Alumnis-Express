import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';


export class Dbconnexion {

    private dotenvConfig = dotenv.config();
    private expandDotenv = dotenvExpand(this.dotenvConfig);

    constructor(){
        this.getConnexion();
    }

    public getConnexion = () => {
        mongoose.connect(`${process.env.CONNECTION_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.once('open', () => {
            console.log('Connection Database okay');
        })
            .on('error', (error) => {
                console.log('Connection Failed' + error);
            });
    }
}