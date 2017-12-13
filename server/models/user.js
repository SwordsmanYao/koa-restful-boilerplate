import mongoose from 'mongoose';

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  loginName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    default: '123456'
  },
  name: {
    type: String,
    require: true
  },
  sex: {
    type: Number
  },
  updatedTime: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User',userSchema);