import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const columnSchema = new Schema({ title: String });

export default mongoose.model('Column', columnSchema);
