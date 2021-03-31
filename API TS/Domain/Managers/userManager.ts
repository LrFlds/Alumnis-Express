import { extendedRequest } from './../../Interfaces/extendedRequest';
import { UserRepository } from './../Repositories/user';
import {Response} from 'express';


export class UserManager{

    private userRepository:UserRepository = new UserRepository();

    public async getAllUser(req:extendedRequest,res:Response){
        const users = await this.userRepository.getAllItem();
        res.status(200).send({message:users})
    }

}