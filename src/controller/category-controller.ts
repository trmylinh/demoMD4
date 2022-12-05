import {Response,Request} from "express";

import {Category} from "../model/Category";
class CategoryController{
    findAll = async (req: Request, res: Response)=>{
        let Categories = await Category.find();
        return res.status(200).json(Categories);
    }

    save = async (req: Request, res: Response)=>{
        let Category = req.body;
        Category = await Category.create(Category);
        return res.status(201).json(Category);
    }
}
export default new CategoryController();