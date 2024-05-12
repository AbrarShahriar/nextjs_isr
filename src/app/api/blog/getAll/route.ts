import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const GET = async () => {
  return NextResponse.json(await prisma.blog.findMany());
};
