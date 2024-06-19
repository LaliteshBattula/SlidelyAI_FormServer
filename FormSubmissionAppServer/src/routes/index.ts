import express from 'express';
import { controller } from '../module/controller';

export class BaseRouter{
    public router:express.Router=express.Router();
    constructor(){
        this.config();
    }
    public config():void{
        this.router.route('/ping').get(controller.pingResponse);
        this.router.route('/submit').post(controller.submitResponse);
        this.router.route('/read').get(controller.readResponse);
        this.router.route('/remove').delete(controller.removeResponse);
        this.router.route('/').get(controller.emailResponse);
    }
}
export const baseRouter=new BaseRouter().router;
