import prisma from "@/lib/prisma";
import Link from "next/link";

async function getAllBLogs() {
  // const res = await fetch("http://localhost:3000/api/blog/getAll", {
  //   next: { revalidate: 60 },
  // });
  return await prisma.blog.findMany();
}

export const revalidate = 60;

export default async function Home() {
  const blogs = await getAllBLogs();
  return (
    <main className="">
      {blogs.map((blog: any) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>

          <p>{blog.blogBody}</p>
          <p>{JSON.stringify(blog.createdAt)}</p>

          <Link href={`/${blog.slug}`}>Continue Reading</Link>
          <hr />
        </div>
      ))}
    </main>
  );
}
