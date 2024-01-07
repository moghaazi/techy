import prisma from "../../utilis/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
      try {
            const posts = await prisma.posts.findMany()

            return new NextResponse(JSON.stringify(posts, { status: 200 }));
      } catch (err) {
            console.log(err);
            return new NextResponse(
                  JSON.stringify({Error}, { status: 500 })
            );
      }
};
