import { UserController } from './../Controllers/userController';
import * as express from 'express';
export class UserRoute{
    private baseUrl: String ='/user'
    private userController: UserController = new UserController();

    public userRoutes(app:any){
        app.route(this.baseUrl).get(this.userController.getAllUser)
    }

}