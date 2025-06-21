import Link from "next/link";
import Image from "next/image";

export default function BlogPostCard({ post }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/blog/post/${post.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {post.content}
          </p>
        </div>
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={post.authorImage}
                alt={post.authorName}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-800">
              {post.authorName}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.createdAt))}
          </div>
        </div>
      </Link>
    </div>
  );
}
