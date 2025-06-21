import Link from "next/link";
import { prisma } from "@/app/utils/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deletePost } from "@/app/actions";
import { notFound } from "next/navigation";

async function getPosts(userId) {
  const posts = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
  });
  return posts;
}

export default async function ManagePostBoard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return notFound();
  }
  const posts = await getPosts(user?.id);
  return (
    <div className="min-h-screen bg-white py-2 sm:px-4 lg:px-6">
      <div className="shadow max-w-6xl md:shadow-lg mx-auto bg-white lg:shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Manage Blog Posts
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="text-gray-600">
              <tr className="bg-white text-gray-700">
                <th className="px-4 py-3 text-left text-lg font-semibold">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-lg font-semibold">
                  Update
                </th>
                <th className="px-4 py-3 text-left text-lg font-semibold">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-gray-800">{post.title}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/update-post/${post.id}`}
                      className="cursor-pointer"
                    >
                      <button className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                        <FaEdit className="inline mr-1 size-4" />
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <form action={deletePost}>
                      <input type="hidden" name="postId" value={post.id} />
                      <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                      >
                        <MdDelete className="inline mr-1 size-4" />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No posts message */}
        {posts.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No posts available.</p>
        )}

        {/* Add New Post Button */}
        <div className="mt-6 text-center">
          <Link href="/dashboard/create-post">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
              Create New Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
