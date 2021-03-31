import { PostController } from './../Controllers/postController';
import * as express from 'express';


export class PostRoute{
    private baseUrl: String ='/post'
    private postController: PostController = new PostController();

    public postRoutes(app:any){
        app.route(this.baseUrl).get(this.postController.getAllPost)
    }

}