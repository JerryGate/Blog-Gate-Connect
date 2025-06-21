import CreatePostForm from "@/components/CreatePostForm";
import Link from "next/link";
export default async function () {
  return (
    <>
      <div className="min-h-screen">
        <div>
          <Link
            href="/dashboard"
            className="bg-blue-500 rounded-md p-3 tranistion-colors duration-200 hover:bg-blue-700 text-white"
          >
            Back to Dashboard
          </Link>
        </div>
        <div className="max-w-7xl mx-auto mt-2 mb-5">
          <div className="p-4 py-3">
            <h2 className="text-3xl text-center font-semibold tracking-tight">
              Create a New Post
            </h2>
            <p className="text-md text-gray-700 text-center font-medium mt-6">
              Share your thoughts with the world!
            </p>
          </div>

          <div className="p-4">
            <CreatePostForm />
          </div>
        </div>
      </div>
    </>
  );
}
