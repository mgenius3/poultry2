import db from '../../utils/db';
import Order from '../../models/Order';

export default async function handler(req, res) {
  await db.connect();
  if (req.method === 'GET') {
    try {
      // fetch all user
      let order = await Order.find();
      if (order) {
        await db.disconnect();
        return res.status(200).json({ data: order });
      }
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  if (req.method === 'POST') {
    const { id, name, productName } = req.body;
    await db.connect();
    try {
      let order = new Order({ id, name, productName });
      //save to db
      await order.save();

      res.status(200).json({ message: 'successful' });
      await db.disconnect();
    } catch (err) {
      res.status(500).json({ message: 'server error, please try again' });
    }
  }
}
