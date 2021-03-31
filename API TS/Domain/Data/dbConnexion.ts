import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';


export class Dbconnexion {

    private dotenvConfig = dotenv.config();
    private expandDotenv = dotenvExpand(this.dotenvConfig);
    private static connectionInstance: Dbconnexion;

    private constructor() {
        this.getConnexion();
    }

    public static getInstance(): Dbconnexion {
        if (!Dbconnexion.connectionInstance) {
            Dbconnexion.connectionInstance = new Dbconnexion();
            console.log("Je suis unique")
        }
        return Dbconnexion.connectionInstance;
    }
    public getConnexion = async () => {
        let promise = await mongoose.connect(`${process.env.CONNECTION_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true });
        return promise;
    }
}