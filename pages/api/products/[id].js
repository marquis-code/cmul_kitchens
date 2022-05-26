import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

dbConnect();

export default async (req, res) => {
  const {id} = req.query;
  const {method, body} = req;

  if(method === 'GET') {
   try {
    const product = await Product.findById(id);

    if(!product) { return res.status(400).json({errorMessage : 'Product with Id was not found'})}

    res.status(200).json(product);

   } catch (error) {
     res.status(500).json({errorMessage : 'Internal server error'});
     console.log(error.message);
   }
  }

  if(method === 'PUT') {
      try {
        const product = await Product.findByIdAndUpdate(id,  {$set : body}, {new : true});

        if(!product) { return res.status(400).json({errorMessage : 'Product with Id was not found'})}
            
       res.status(200).json({product, successMessage : 'Product was successfully Updated'});
      } catch (error) {
        res.status(500).json({errorMessage : 'Internal server error'});
      }
  }

  if(method === 'DELETE') {
      try {
        const product = await Product.findByIdAndDelete(id);

        if(!product) { return res.status(400).json({errorMessage : 'Product with Id was not found'})}
            
        res.status(200).json({data : {}, successMessage : 'Product was successfully deleted'});
      } catch (error) {
        res.status(500).json({errorMessage : 'Internal server error'});
      }
  }
}