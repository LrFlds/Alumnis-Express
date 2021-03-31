import { Response } from 'express';
import { extendedRequest } from './../Interfaces/extendedRequest';
import { PostManager } from './../Domain/Managers/postManager';


export class PostController{

    private postManager: PostManager = new PostManager();

    public getAllPost=(req:extendedRequest,res:Response)=>{
        this.postManager.getAllPosts(req,res);
    }

}