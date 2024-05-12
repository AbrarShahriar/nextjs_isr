import React from "react";

async function getSingleBlog(slug: string) {
  const res = await fetch(`http://localhost:3000/api/blog/getSingle/${slug}`, {
    next: { revalidate: 60 },
  });

  return await res.json();
}

export default async function BlogPage({ params }: any) {
  const { slug } = params;

  const blog = await getSingleBlog(slug);

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.blogBody}</p>
      <p>{JSON.stringify(blog.createdAt)}</p>
    </div>
  );
}
