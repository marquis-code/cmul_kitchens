import dbConnect from '../../../utils/dbConnect';
import Order from '../../../models/Order';

dbConnect();

export const handler = (req, res) => {
 const {method, body} = req;
 const {id} = req.query;

 if(method === 'GET') {
    try {
        const order = await Order.findById(id);
    
        if(!order) { return res.status(400).json({errorMessage : 'Order with Id was not found'})}
    
        res.status(200).json(order);
    
       } catch (error) {
         res.status(500).json({errorMessage : 'Internal server error'});
         console.log(error.message);
       }
 }

 
 if(method === 'PUT') {
    try {
        const order = await Order.findByIdAndUpdate(id,  {$set : body}, {new : true});

        if(!order) { return res.status(400).json({errorMessage : 'Order with Id was not found'})}
            
       res.status(200).json({order, successMessage : 'Order was successfully Updated'});
      } catch (error) {
        res.status(500).json({errorMessage : 'Internal server error'});
      }
}

if(method === 'DELETE') {
    try {
        const order = await Order.findByIdAndDelete(id);

        if(!order) { return res.status(400).json({errorMessage : 'Order with Id was not found'})}
            
        res.status(200).json({data : {}, successMessage : 'Order was successfully deleted'});
      } catch (error) {
        res.status(500).json({errorMessage : 'Internal server error'});
      }
}

}