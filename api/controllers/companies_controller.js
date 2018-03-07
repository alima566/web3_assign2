import mongoose from 'mongoose';
import Company from '../models/companies';

export const getAll = (req, res) => {
  Company.find({}, 'symbol name').exec((err, companies) => {
    if(err) return res.status(400).json({ 'success': false, 'message': err.message });
    return res.json(companies);
  });
}

export const getSingle = (req, res) => {
  Company.findOne({ 'symbol': req.params.symbol.toUpperCase() }).exec((err, company) => {
    if(err) return res.status(400).json({'success':false,'message': err.message });
    return res.json(company);
  });
}