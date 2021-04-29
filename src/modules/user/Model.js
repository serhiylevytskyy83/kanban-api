import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // email: {
  //   type: String,
  //   required: true,
  //   // index: true,
  //   // unique: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  //   // select: false,
  // },
  // name: String,
  description: String,
  priority: String,
  status: String,
  id: String,
  name: String,
});
userSchema.index({ email: 1 }, { unique: true }); // unique index to not duplicate email or set option in MongoDB

export default mongoose.model('User', userSchema);
