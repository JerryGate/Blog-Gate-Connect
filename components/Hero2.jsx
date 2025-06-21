import Link from "next/link";
import Image from "next/image";

export default function Hero2() {
  return (
    <section className="relative w-full h-[40vh] md:h-[80vh] rounded-md flex items-center justify-center">
      <Image
        src="/medium-shot-couple-with-laptop.jpg"
        alt="Tech background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0"
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Welcome to Tech Insights
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto">
          Discover the latest in technology, tutorials, and industry trends
        </p>
        <Link href="/explore-now">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg transition duration-300">
            Explore Now
          </button>
        </Link>
      </div>
    </section>
  );
}
