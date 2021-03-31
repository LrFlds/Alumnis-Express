import * as mongoose from 'mongoose';
import { Dbconnexion } from './../Data/dbConnexion';



export class CRUD{
    private Dbconnexion = new Dbconnexion();
    protected interFace;
    protected model;

    constructor(model){
        this.model=model;
    }

        public async getAllItem(){
            const items = await this.model.find({});
        }
}