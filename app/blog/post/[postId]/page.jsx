import BackButton from "@/components/BackButton";
import { prisma } from "@/app/utils/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

async function getPost(postId) {
  const post = await prisma.blogPost.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
}

export default async function SingleBlogPage({ params }) {
  const { postId } = await params;

  if (!postId) {
    return notFound();
  }
  const post = await getPost(postId);

  if (!post) {
    return notFound();
  }
  return (
    <div className="min-h-screen max-w-6xl mx-auto py-8 px-4">
      <div className="mt-5">
        <BackButton />
      </div>
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative rounded-full size-10 overflow-hidden">
          <Image
            src={post.authorImage}
            alt={post.authorName}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm text-ray-500">
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(post.createdAt)}
        </p>
        <div>
          <p className="text-sm font-semibold">{post.authorName}</p>
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-gray-200">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="text-md text-gray-700 p-3 shadow-sm text-justify rounded-lg">
        {post.content}
      </div>
    </div>
  );
}
