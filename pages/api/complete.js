import db from '../../utils/db';
import Order from '../../models/Order';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;
    await db.connect();
    try {
      //save to db
      let update = await Order.findOneAndUpdate(
        { id },
        {
          status: 'complete',
        }
      );

      if (update) res.status(200).json({ message: 'update successfully' });
      else {
        res.status(404).json({ message: 'update unsuccessful' });
      }
      await db.disconnect();
    } catch (err) {
      res.status(500).json({ message: 'server error, please try again' });
      await db.disconnect();
    }
  }
}
