"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Tech News', 'Web Development', 'Programming Tips', 'Career Advice', 'Tutorials'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true, 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Dive into a world of <span className="font-semibold">insightful content</span> on <br className="hidden lg:block" />
            <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Stay updated with the latest articles, coding tutorials, and tips from industry professionals.
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="blog visual" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Featured Articles</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Explore the most popular posts from our authors</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Reuse blog cards */}
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Mastering TypeScript in 2025</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">A deep dive into TypeScript features and how to build scalable apps.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Building Modern Web Apps</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Explore frameworks, tools, and best practices for modern web development.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Top Remote Work Tips</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Boost your productivity and stay balanced while working from home.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Readers Say</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Real feedback from our readers</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonials here (unchanged) */}
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center hover:scale-105 transform transition">
                <p className="text-gray-600 dark:text-gray-400">"The tutorials are clear and extremely helpful. A must-read blog!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Alice Johnson</h3>
                <p className="text-gray-500 dark:text-gray-300">Developer</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center hover:scale-105 transform transition">
                <p className="text-gray-600 dark:text-gray-400">"Consistently insightful content that keeps me up-to-date with tech trends."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Emma Wilson</h3>
                <p className="text-gray-500 dark:text-gray-300">Blogger</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center hover:scale-105 transform transition">
                <p className="text-gray-600 dark:text-gray-400">"It’s my go-to blog every morning. Love the writing style and topics!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Chris Martin</h3>
                <p className="text-gray-500 dark:text-gray-300">Tech Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
