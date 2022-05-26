import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dbConnect();

export default async (req, res) => {
  const {method, body} = req;

  if(method === 'POST') {
    try {
      const {email, password} = body;
      let user = await User.findOne({email}).select("+password");
      const {firstname, lastname, location, _id} = user;
      if(!user) {
        return res.status(400).json({errorMessage : 'Invalid login credentials'})
      }

      let matchedPassword = await bcrypt.compare(password, user.password);
      if(!matchedPassword) {
        return res.status(400).json({errorMessage : 'Invalid login credentials'})
      }

      let jwtPayload = {
        id : user._id
      }

      jwt.sign(jwtPayload, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRE}, (error, token) => {
        if(error) {
            return res.status(400).json({errorMessage : 'Jwt Error'})
        }

        return res.status(200).json({ 
            token,
            user : {_id, firstname, lastname, email, location}
        });

      })

    } catch (error) {
      return res.status(500).json({errorMessage : 'Internal server error'});
    }
  }
  
}