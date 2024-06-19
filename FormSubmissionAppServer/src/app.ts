import express from 'express';
import bodyParser from 'body-parser';
import { baseRouter } from './routes';
import cors from "cors";

class AppClass{
    public app:express.Application;
    constructor(){
        this.app = express();
        this.config();
    }
    config(){
        this.app.use(bodyParser.json({limit:'50mb'}));
        this.app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}));
        this.app.use(cors());

        this.app.use(function(req,res,next){
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
            next();
        })
        this.app.use('/', baseRouter);
        this.app.use((req,res,next)=>{
            res.status(404).send({message:"Requested URL was not found"});
        })
    }

}
export default new AppClass().app;
