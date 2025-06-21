import Link from "next/link";
export default async function Hero() {
  return (
    <header>
      <div className="w-full rounded-sm bg-[url('/medium-shot-couple-with-laptop.jpg')] bg-cover bg-center h-[300px] md:rounded-2xl">
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl tracking-wide font-semibold mb-10 text-white lg:text-4xl">
              Explore <span className="text-blue-400">Interesting</span>
              Contents!
            </h1>
            <div className="mt-5">
              <Link
                href="/explore-now"
                className=" text-sm md:text-md lg:text-lg p-3 md:p-4 font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
