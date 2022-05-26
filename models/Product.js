import {Schema, model, models} from 'mongoose';

const ProductSchema = new Schema({
   title : {
      type : String,
      required : [true, 'Product name is required'],
      maxlength : 60
   },
   desc : {
      type : String,
      required : [true, 'Product description is required'],
      maxlength : 200
   },
   img : {
      type : String,
      required : [true, 'Product image is required']
   },
   prices : {
      type : [Number],
      required : [true, 'Product price is required']
   },
   extraOptions : {
      type : [{
         text : {type : String, required : true}, 
         price : {type : Number, required : true}
      }]
   }
},{
   timestamps : true
}); 

export default models.Product || model('Product', ProductSchema);
