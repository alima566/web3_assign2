import mongoose from 'mongoose';
import User from '../models/users';

export const getAll = (req, res) => {
  //return res.json({'success':true,'message':'Users fetched successfully'});
  User.find().exec((err, todos) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
}

export const getDetail = (req, res) => {



};
