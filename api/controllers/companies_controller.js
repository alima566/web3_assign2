import mongoose from 'mongoose';
import Company from '../models/companies';

export const getAll = (req, res) => {
  //return res.json({'success':false,'message':'Some Error'});
  Company.find().exec((err, companies) => {
    if(err){
      return res.status(400).json({'success':false,'message': err.message });
    }
    
    return res.json(companies.map(c => ({ name: c.name, symbol: c.symbol })));
  });
}
