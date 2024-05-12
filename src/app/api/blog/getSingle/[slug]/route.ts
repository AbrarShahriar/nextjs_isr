import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  return NextResponse.json(
    await prisma.blog.findFirst({ where: { slug: params.slug } })
  );
};
