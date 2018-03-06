import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  salt: String,
  password: String
});

export default mongoose.model('User', userSchema);
