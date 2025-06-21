import { prisma } from "@/app/utils/prisma";
import BlogPostCard from "@/components/BlogPostCard";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CreatorCTA from "@/components/CreatorCTA";
import Hero2 from "@/components/Hero2";

export const revalidate = 20000;

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany();

  return posts.map((postId) => ({ id: postId }));
}

async function getPost() {
  const postsResponse = await prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return postsResponse;
}

export default function HomeRoute() {
  return (
    <>
      <div className="min-h-screen">
        <Hero2 />
        <div className="max-w-8xl mx-auto mb-4">
          <h1 className="text-2xl md:text-3xl mt-3 text-gray-800 font-bold tracking-tight mb-4">
            Latest Posts
          </h1>
          <div>
            <Suspense fallback={<BlogPostsGrid />}>
              <BlogPost />
            </Suspense>
          </div>
        </div>
        <CreatorCTA />
      </div>
    </>
  );
}

async function BlogPost() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const posts = await getPost();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-4">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function BlogPostsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[300px] flex flex-col overflow-hidden"
          key={index}
        >
          {/* Image skeleton */}
          <Skeleton className="h-48 w-full rounded-none" />

          <div className="p-4 flex-1 flex flex-col gap-3">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4" />

            {/* Content skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Footer skeleton */}
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center">
                <Skeleton className="h-8 w-8 rounded-full mr-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
