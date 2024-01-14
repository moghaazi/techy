import prisma from "../../utilis/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
     const { searchParams } = new URL(req.url);
     const page = searchParams.get('page');
     const tag = searchParams.get('tag');
     const POST_PER_PAGE = 3;

     try {
          const posts = await prisma.Posts.findMany({
               skip: POST_PER_PAGE * (page - 1),
               take: POST_PER_PAGE,
               where: {
                    ...(tag && tag !== 'all' ? { tagSlug: tag } : {}), 
               },
          });


          return new NextResponse(JSON.stringify(posts, { status: 200 }));
     } catch (err) {
          console.log(err);
          return new NextResponse(
               JSON.stringify({ Error }, { status: 500 })
          );
     }
};
