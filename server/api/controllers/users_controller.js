import mongoose from 'mongoose';
import User from '../models/users';
import Portfolio from '../models/portfolio';
import md5 from 'crypto-md5';

export const login = (req, res) => {
  User.findOne({ 'email': req.body.email }, 'id salt first_name last_name password').exec((err, usr) => {
    if ( err || !usr || md5(`${req.body.password}${usr.salt}`, 'hex') !== usr.password )
      return res.status(401).json( err || {} );

    const _usr = { id: usr.id, first: usr.first_name, last: usr.last_name };
    req.app.get('socketio').sockets.emit('user_logged_in', _usr);
    return res.json(_usr);
  });
};

export const portfolioSummary = (req, res) => {
  Portfolio.find({ 'user': req.params.id }).exec((err, items) => {
    if (err) res.status(400).end("Cound not retrieve User portfolio summary");
    Portfolio.aggregate([
      { $match: { user: parseInt(req.params.id) } },
      { $group: { _id: null, totalOwned: { $sum: "$owned" }} }
    ], (aggErr, aggregate) => {
      if (aggErr) res.status(400).end("Cound not calculate User portfolio summary");
      let summary = [];
      items.map(i => {
        summary.push(
          { symbol: i.symbol,
            percentage: parseFloat((i.owned / aggregate[0].totalOwned).toFixed(4))
          }
        );
      });
      res.json(summary);
    });
  });
};

export const portfolioInfo = (req, res) => {
  Portfolio.aggregate([
    { $match: { user: parseInt(req.params.id) } },
    {
      $lookup:
         {
           from: "companies",
           localField: "symbol",
           foreignField: "symbol",
           as: "company"
         }
    },
    { $unwind: "$company" },
    // {
    //   $lookup:
    //      {
    //        from: "prices",
    //        localField: "symbol",
    //        foreignField: "name",
    //        as: "prices"
    //      }
    // },
    { $project : { _id: 0, user: 0, symbol: 0, company: { sector: 0, subindustry: 0, address: 0, "date_added": 0, CIK: 0, frequency: 0, "_id": 0 } } },
    { $addFields: { "currentValue": "abc" }}
  ], (err, resp) => {
    let obj = {
      stocks: resp,
      companyCount: 0,
      stockCount: resp.length,
      portfolioValue: 0.0
    };
    res.json(obj);
  });
};
