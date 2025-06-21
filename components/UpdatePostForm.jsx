"use client";
import { useActionState } from "react";
import { updatePost } from "@/app/actions";

export default function UpdatePostForm({ post }) {
  const [state, action, pending] = useActionState(updatePost, undefined);
  return (
    <div className="mb-5 max-w-4xl mx-auto bg-white p-4 rounded-md">
      <form
        action={action}
        className="flex flex-col gap-5 rounded-md p-5 border border-gray-200"
      >
        <input type="hidden" name="postId" value={post.id} />
        <div>
          <label htmlFor="title" className="text-lg text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            defaultValue={post.title}
            className="rounded pl-2 p-2 w-full mt-4 border border-gray-200 shadow-sm shadow-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          {state?.errors?.title && (
            <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>
          )}
        </div>

        <div>
          <p className="text-lg text-gray-700">Content</p>
          <textarea
            name="content"
            id="content"
            rows="7"
            placeholder="Content"
            defaultValue={post.content}
            className="rounded pl-2 p-3 w-full border border-gray-200 shadow-sm shadow-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          ></textarea>
          {state?.errors?.content && (
            <p className="text-red-500 text-sm mt-1">{state.errors.content}</p>
          )}
        </div>

        <div>
          <label htmlFor="imageUrl" className="text-lg text-gray-700">
            Image Url
          </label>
          <input
            type="url"
            name="imageUrl"
            placeholder="Image Url"
            id="imageUrl"
            defaultValue={post.imageUrl}
            className="rounded pl-2 p-2 border border-gray-200 w-full shadow-sm shadow-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          {state?.errors?.imageUrl && (
            <p className="text-red-500 text-sm mt-1">{state.errors.imageUrl}</p>
          )}
        </div>

        <div>
          <button
            disabled={pending}
            className="w-full p-3 rounded bg-blue-500 text-white disabled:bg-blue-300 hover:bg-blue-600 transition-colors duration-50"
            type="submit"
          >
            {pending ? (
              <span className="animate-pulse duration-50">
                Updating Post...
              </span>
            ) : (
              "Update Post"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
