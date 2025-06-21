"use client";
import { useActionState } from "react";
import { createPost } from "@/app/actions";

export default function CreatePostForm() {
  const [state, action, pending] = useActionState(createPost, undefined);
  return (
    <div className="shadow-sm w-full md:max-w-4xl mx-auto md:shadow-md bg-white p-4 rounded-md">
      <form action={action} className="flex flex-col gap-5 rounded-md p-5">
        <div>
          <label htmlFor="title" className="text:sm md:text-lg text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="rounded pl-2 p-2 w-full mt-4 border border-gray-100 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          {state?.errors?.title && (
            <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>
          )}
        </div>

        <div>
          <p className="text:sm md:text-lg text-gray-700">Content</p>
          <textarea
            name="content"
            id="content"
            rows="7"
            placeholder="Content"
            className="rounded pl-2 p-3 w-full border border-gray-100 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          ></textarea>
          {state?.errors?.content && (
            <p className="text-red-500 text-sm mt-1">{state.errors.content}</p>
          )}
        </div>

        <div>
          <label htmlFor="imageUrl" className="text:sm md:text-lg text-gray-700">
            Image Url
          </label>
          <input
            type="url"
            name="imageUrl"
            placeholder="Image Url"
            id="imageUrl"
            className="rounded pl-2 p-2 border border-gray-100 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          {state?.errors?.imageUrl && (
            <p className="text-red-500 text-sm mt-1">{state.errors.imageUrl}</p>
          )}
        </div>

        <div>
          <button
            disabled={pending}
            className="w-full p-3 rounded bg-blue-500 text-white disabled:bg-blue-300 hover:bg-blue-600 transition-colors duration-200"
            type="submit"
          >
            {pending ? <span className="animate-pulse duration-200">Creating Post...</span>: "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
