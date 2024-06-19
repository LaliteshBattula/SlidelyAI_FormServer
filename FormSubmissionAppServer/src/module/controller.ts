import { Router, Request, Response } from 'express';
import * as fs from 'fs';

let data=JSON.parse(fs.readFileSync('src/data/db.json','utf-8'));
interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

class ControllerClass {
    constructor() { }

    public pingResponse = (req:Request, res: Response) => {
        res.status(200).send(true);
    }

    public submitResponse = (req:Request, res: Response) => {
        let newid=data[data.length-1]?.id+1;
        let newSubmission: Submission=Object.assign({id:newid},req.body);
        data.push(newSubmission);
        fs.writeFile('src/data/db.json',JSON.stringify(data),(err)=>{
            res.status(201).json({
                status:"success",
                data:newSubmission
            })
        });        
    }

    public readResponse = (req:Request, res: Response) => {        
        let index = parseInt(req.query.index as string, 10);
        let reqData=data.find((data:any)=>data.id===index);
        if(reqData){
            res.status(200).json({
                status:"success",
                data:reqData
            });
        }
        else {
            res.status(404).send({ error: 'Data not found' });
        }
    }

    public removeResponse = (req:Request,res:Response) => {
        let index:number=parseInt(req.query.index as string, 10);
        let reqData=data.find((data:any)=>data.id===index);        
        let ind=data.indexOf(reqData);
        data.splice(ind,1);
        fs.writeFile('src/data/db.json',JSON.stringify(data),(err)=>{
            res.status(200).json({
                status:"success",
                data:null
            })
        });
    }

    public emailResponse = (req:Request,res:Response) => {
        let mail:any=req.query.email;
        let reqData=data.find((data:any)=>data.email===mail);                
        if(reqData){
            res.status(200).json({
                status:"success",
                data:reqData
            });
        }
        else {
            res.status(404).send({ error: 'Data not found' });
        }
    }
}

export const controller=new ControllerClass();