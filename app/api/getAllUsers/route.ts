import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        select: {
          email: true,
        },
      });

      const emails = users.map((user: Prisma.UserGetPayload<{ email: true }>) => user.email);

      res.status(200).json(emails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching emails' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(400).json({ error: 'Invalid HTTP method' });
  }
}
