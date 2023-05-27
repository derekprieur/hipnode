import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(400).json({ error: 'No user found for this email' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Incorrect password' });
      }

      res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to log in' });
    }
  } else {
    res.status(400).json({ error: 'Invalid HTTP method' });
  }
};
