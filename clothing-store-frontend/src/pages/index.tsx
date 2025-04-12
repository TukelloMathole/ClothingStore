"use client";
import PhotoCollage from "@/components/PhotoCollage";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-6 sm:px-12 py-10">
      {/* Modernized Header Section */}
      <header className="text-center max-w-3xl mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Elevate Your Style
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Discover trendy, comfortable, and stylish outfits that match your personality.
        </p>
      </header>

      {/* Modernized Photo Collage Section */}
      <section className="w-full max-w-5xl">
        <PhotoCollage />
      </section>

      {/* Call to Action Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
        
        <Link 
          href="/shop-now"
          className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold transition-all shadow-md hover:shadow-xl"
        >
          Shop Now
        </Link>
        <Link
          href="#learn-more"
          className="rounded-lg border border-gray-300 hover:border-gray-400 px-6 py-3 text-lg font-semibold text-gray-900 transition-all shadow-sm hover:shadow-md"
        >
          Learn More
        </Link>
      </div>

      {/* Modernized Footer Section */}
      <footer className="mt-12 flex flex-wrap gap-6 text-gray-500 text-sm justify-center">
        <Link href="#about-us" className="hover:text-gray-700 transition">
          About Us
        </Link>
        <Link href="#contact-us" className="hover:text-gray-700 transition">
          Contact Us
        </Link>
        <Link href="#terms" className="hover:text-gray-700 transition">
          Terms & Conditions
        </Link>
      </footer>
    </div>
  );
}
