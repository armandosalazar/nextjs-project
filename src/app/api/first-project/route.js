import { NextResponse } from "next/server";
import Prisma from "@/lib/prisma";

async function GET() {
  const users = await Prisma.user.findMany();

  return NextResponse.json(users);
}

async function POST(req) {
  const { email, name } = await req.json();

  if (!email || !name) {
    return NextResponse.json({
      message: "Email and name are required",
    });
  }

  try {
    const user = await Prisma.user.create({
      data: {
        email: email,
        name: name,
        posts: {},
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: "Email already exists",
    });
  }
}

export { GET, POST };
