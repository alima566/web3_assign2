import mongoose from 'mongoose';

var priceSchema = mongoose.Schema({
  date: Date,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
  name: String
});

export default mongoose.model('prices', priceSchema);
