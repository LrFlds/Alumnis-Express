import { extendedRequest } from './../../Interfaces/extendedRequest';
import { PostRepository } from '../Repositories/postRepository';
import {Response} from 'express';


export class PostManager{

    private postRepository:PostRepository = new PostRepository();

    public async getAllPosts(req:extendedRequest,res:Response){
        const posts = await this.postRepository.getAllItem();
        res.status(200).send({message:posts})
    }

}