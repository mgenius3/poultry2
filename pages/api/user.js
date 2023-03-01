import User from '../../models/User';
import data from '../../utils/data';
import db from '../../utils/db';

export default async function handler(req, res) {
  await db.connect();
  if (req.method === 'GET') {
    try {
      // Check if user already exists in database
      let user = await User.find();
      if (user) {
        return res.status(200).json({ data: user });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    <span class="badge badge-primary"></span>;
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
