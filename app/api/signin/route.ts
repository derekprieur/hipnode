// app/api/hello/route.ts
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();

  try {
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    console.log(newUser, "newUser");
    return new Response(JSON.stringify(newUser), {
      status: 200,
    });
  } catch (error) {
    console.log(error, "error");
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}