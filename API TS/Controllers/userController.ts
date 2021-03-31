import { Response } from 'express';
import { extendedRequest } from './../Interfaces/extendedRequest';
import { UserManager } from './../Domain/Managers/userManager';


export class UserController{

    private userManager: UserManager = new UserManager();

    public getAllUser=(req:extendedRequest,res:Response)=>{
        this.userManager.getAllUser(req,res);
    }

}