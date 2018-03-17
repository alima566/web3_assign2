import mongoose from 'mongoose';

var priceSchema = mongoose.Schema({
  date: String,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
  name: String
});

export default mongoose.model('prices', priceSchema);
