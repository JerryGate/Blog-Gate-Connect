import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

export default function CreatorCTA() {
  return (
    <>
      <Suspense fallback={<CreatorSkeleton />}>
        <section className="bg-white dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
            <div className="lg:w-1/2">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="https://img.freepik.com/premium-photo/senior-asian-man-using-laptop_53876-9365.jpg?ga=GA1.1.588398340.1750165249&semt=ais_hybrid&w=740"
                  fill
                  className="object-cover"
                  alt="blog-user suggest"
                />
              </div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                Suggest Your New <span className="text-blue-500">Idea</span>
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-300">
                We’re always looking for ways to make your experience better! If
                you have any suggestions, ideas, or features you’d love to see
                on the blog, we’d really appreciate hearing from you. Your
                feedback helps us grow and serve you better—so don’t hesitate to
                reach out and let us know how we can improve.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <a
                  href="mailto:jerrydominic11@gmail.com"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  Email Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}

async function CreatorSkeleton() {
  await new Promise((res) => setTimeout(res, 2000));
  return (
    <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
      <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

        <div className="flex mt-4 item-center gap-x-2">
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>

        <div className="flex justify-between mt-6 item-center">
          <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

          <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
