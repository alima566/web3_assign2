import mongoose from 'mongoose';

var portfolioSchema = mongoose.Schema({
  id: Number,
  symbol: String,
  user: Number,
  owned: Number
});

export default mongoose.model('Portfolio', portfolioSchema, 'portfolio');
