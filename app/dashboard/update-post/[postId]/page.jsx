import { prisma } from "@/app/utils/prisma";
import UpdatePostForm from "@/components/UpdatePostForm";
import BackButton from "@/components/BackButton";

async function getPost(postId) {
  const post = await prisma.blogPost.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
}

export default async function SinglePostRoute({ params }) {
  const { postId } = await params;
  const post = await getPost(postId);
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-8xl mx-auto p-4 mb-2">
          <div className="flex items-center justify-between mb-4">
            <BackButton />
          </div>
          <h1 className="text-3xl font-bold text-center">Update Post</h1>
        </div>
        <div className="max-w-8xl mx-auto p-4">
          <p className="text-center text-lg text-gray-700">
            Update post content will go here.
          </p>
        </div>
        <div className="max-w-8xl mx-auto p-4">
          <UpdatePostForm post={post} />
        </div>
      </div>
    </>
  );
}
