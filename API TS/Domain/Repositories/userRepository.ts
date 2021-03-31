import { extendedRequest } from '../../Interfaces/extendedRequest';
const model = require('../Models/userModel');
import { CRUD } from './crud';


export class UserRepository extends CRUD {

    constructor(){
        super(model)
    }



}