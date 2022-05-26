import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

dbConnect();

export default async (req, res) => {
  const {method,body} = req;

  if(method === 'GET') {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({errorMessage : 'Internal server error'});
      console.log(error.message)
    }
  }

  if(method === 'POST') {
    try {
      const product = await new Product(body).save();
      res.status(200).json({product, successMessage : 'New Product was successfully created'});
    } catch (error) {
      res.status(500).json({errorMessage : 'Internal server error'});
    }
  }
  
}