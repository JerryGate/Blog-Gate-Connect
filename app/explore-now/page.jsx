import BackButton from "@/components/BackButton";
import BlogPostCard from "@/components/BlogPostCard";
import Link from "next/link";

async function getPost() {
  const posts = await prisma.blogPost.findMany();

  return posts;
}
export default async function ExploreNow() {
  const posts = await getPost();
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <BackButton />
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-gray-800 font-bold text-4xl">All Blog Posts</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
