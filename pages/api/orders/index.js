import dbConnect from '../../../utils/dbConnect';
import Order from '../../../models/Order';

dbConnect();

export const handler = (req, res) => {
 const {method, body} = req;

 if(method === 'GET') {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json({errorMessage : 'Internal server error'});
        console.log(error.message)
      }
 }

 
 if(method === 'POST') {
    try {
        const order = await new Order(body).save();
        res.status(200).json({order, successMessage : 'New Order was successfully created'});
      } catch (error) {
        res.status(500).json({errorMessage : 'Internal server error'});
      }
}
}