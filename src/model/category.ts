
import {Schema, model} from 'mongoose'
export interface ICategory{
    name ?: string;
I
}

const CategorySchema = new Schema<ICategory>({
    name : String,

})

const Category = model<ICategory>('Category', CategorySchema);
export {Category}

