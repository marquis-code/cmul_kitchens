import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

dbConnect();

export default async (req, res) => {
  const {method, body} = req;

  if(method === 'POST') {
    try {
      const {firstname, lastname, email, password, location} = body;
      let user = await User.findOne({email});
      if(user) {
        return res.status(400).json({errorMessage : 'User already exist'})
      }

      const salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({ firstname, lastname, email, password:hashedPassword, location });
      
      await newUser.save();
      return res.status(200).json({successMessage : 'Signup success'});
    } catch (error) {
      return res.status(500).json({errorMessage : 'Internal server error'});
    }
  }
  
}