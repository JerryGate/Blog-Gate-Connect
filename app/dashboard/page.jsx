import Link from "next/link";
import { prisma } from "../utils/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCard from "@/components/BlogPostCard";
import { notFound } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany();
  return posts.map((post) => ({ slug: post.authorId }));
}

async function getPosts(userId) {
  const posts = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!posts) {
    return notFound();
  }

  return posts;
}

export default function DashboardRoute() {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-white p-2">
          <div>
            <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-tight">
              Welcome to your Dashboard
            </h2>
            <p className="text-md text-gray-700 text-center font-medium mt-6">
              Inspire people with your mind blowing and creative thoughts!
            </p>

            <div className="flex items-center justify-center mt-5 space-x-10">
              <Link
                href="/dashboard/create-post"
                className="bg-blue-500 rounded-md p-2 md:p-3 tranistion-colors duration-200 md:hover:bg-blue-700 text-white"
              >
                Create Post
              </Link>
              <Link
                href="/dashboard/manage-blog-posts"
                className="bg-blue-500 rounded-md p-2 md:p-3 tranistion-colors duration-200 md:hover:bg-blue-700 text-white"
              >
                Manage Posts
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold mb-4">Your Posts</h2>
            <p className="text-gray-600 mb-6">
              Here you can manage your blog posts.
            </p>
          </div>
        </div>

        <Suspense fallback={<BlogPostsGrid />}>
          <BlogPost />
        </Suspense>
      </div>
    </>
  );
}

async function BlogPost() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await getPosts(user?.id);

  return (
    <div className="bg-white md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.length === 0 ? (
          <div className="h-20 p-2 mx-auto">
            <p className="text-gray-900 text-2xl md:text-3xl text-center py-2">
              You don't have any post to fetch
            </p>
          </div>
        ) : (
          posts.map((post) => <BlogPostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}

function BlogPostsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[250px] flex flex-col overflow-hidden"
          key={index}
        >
          {/* Image skeleton */}
          <Skeleton className="h-40 w-full rounded-none" />

          <div className="p-4 flex-1 flex flex-col gap-3">
            {/* Title skeleton */}
            <Skeleton className="h-4 w-3/4" />

            {/* Content skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
            </div>

            {/* Footer skeleton */}
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center">
                <Skeleton className="h-6 w-6 rounded-full mr-2" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Skeleton className="h-2 w-14" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
