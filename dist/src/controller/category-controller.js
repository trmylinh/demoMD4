"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../model/Category");
class CategoryController {
    constructor() {
        this.findAll = async (req, res) => {
            let Categories = await Category_1.Category.find();
            return res.status(200).json(Categories);
        };
        this.save = async (req, res) => {
            let Category = req.body;
            Category = await Category.create(Category);
            return res.status(201).json(Category);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map