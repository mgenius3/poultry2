import User from '../../models/User';
import db from '../../utils/db';

export default async function handler(req, res) {
  await db.connect();
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      // Check if user already exists in database
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ message: 'User with that email already exists' });
      }

      // Create new user object
      user = new User({ name, email, password });

      // Save new user to database
      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    <span className="badge badge-primary"></span>;
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
