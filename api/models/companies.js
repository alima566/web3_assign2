import mongoose from 'mongoose';

var companySchema = mongoose.Schema({
  symbol: String,
  name: String,
  sector: String,
  subindustry: String,
  address: String,
  date_added: Date,
  CIK: Number,
  frequency: Number
});

export default mongoose.model('Company', companySchema);
