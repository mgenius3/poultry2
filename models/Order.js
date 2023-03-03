import mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    productName: { type: String, required: true },
    id: { type: String, required: true },
    status: { type: String, default: 'pending' },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
