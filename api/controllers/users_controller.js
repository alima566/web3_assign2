import mongoose from 'mongoose';
import User from '../models/users';
import crypto from 'crypto';

export const login = (req, res) => {
  const md5 = crypto.createHash("md5");

  User.findOne({ 'email': req.body.email }, 'id first_name last_name password').exec((err, usr) => {
    if ( err || !usr || md5.update(req.body.password).digest("hex") !== usr.password )
      return res.status(401).json( err || {} );
    usr.password = undefined;
    return res.json(usr);
  });
};
