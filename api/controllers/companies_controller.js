import mongoose from 'mongoose';
import Company from '../models/companies';
import Price from '../models/prices';

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

//should assume month shall be based on current year's month
export const getCloseInfo = (req, res) => {
  //return average close value for each month in the year
	Price.aggregate([
    { $match: { name: req.params.symbol.toUpperCase() } },
    { $group: {
        "_id": { "month": { $substr: [ "$date", 5, 2 ] } },
        avgClose: { $avg: "$close" }
    }}
	]).exec( (err, aggregate) => {
		if(err) return res.status(400).json({'success':false,'message': err.message });

    let close = {};
    aggregate.sort((a,b) => { a._id.month - b._id.month });
    aggregate.map(a => {
      close[parseInt(a._id.month)] = parseFloat((a.avgClose).toFixed(4));
    });
    return res.json(close);
	});
};

export const getLatestInfo = (req, res) => {
  Price.findOne({ name: req.params.symbol.toUpperCase() }).sort({"date": -1}).exec((err, latest) => {
    if(err) return res.status(400).json({'success':false,'message': err.message });
    	return res.json(latest);
  });
};

export const getInfo = (req, res) => {
  if (Object.keys(req.query).length === 0){
    res.status(400).end("No query string specified");
  } else if (req.query.month != undefined){
    return getMonthInfo(req, res);
  } else if (req.query.date != undefined){
    return getDateInfo(req, res);
  }
  return res.status(400).end('Illegal Querystring param');
};

const getMonthInfo = (req, res) => {
  Price.find({ date: { $regex: `.*-0?${req.query.month}-.*` }, name: req.params.symbol.toUpperCase() }).sort({"date": 1}).exec((err, prices) => {
    if(err) return res.status(400).json({'success':false,'message': err.message });
    	return res.json(prices);
  });
};

const getDateInfo = (req, res) => {
  Price.findOne({ date : req.query.date, name: req.params.symbol.toUpperCase() }).exec((err, price) => {
    if(err) return res.status(400).json({'success':false,'message': err.message });
    	return res.json(price);
  });
};
