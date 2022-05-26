import {Schema, model, models} from 'mongoose';

const OrderSchema = new Schema({
   customer : {
      type : String,
      required : true
   },
   address : {
      type : String,
      required : true
   },
   total : {
     type : Number,
     required : true
   },
   status : {
      type : Number,
      default : 0
   },
   method : {
    type : Number,
    required : true
 }
},{
   timestamps : true
}); 

export default models.Order || model('Order', OrderSchema);
