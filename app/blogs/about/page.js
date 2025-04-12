import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Tech Keeda Logo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Tech Keeda</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Welcome to <strong>Tech Keeda</strong> — your go-to platform for everything tech. Whether you’re a developer, enthusiast, or just someone who loves staying updated, we’ve got you covered.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                From in-depth technical blogs and coding tutorials to the latest updates in the tech world, we strive to bring value to our readers. Stay ahead with trending technologies, learn new skills, and join us on a mission to decode the world of technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Journey</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              How Tech Keeda started, what we aim to do, and why we’re passionate about tech.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/1.jpg" alt="Starting Tech Keeda" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Idea</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Tech Keeda was born out of a simple yet powerful idea — to create a space where tech enthusiasts can explore, learn, and stay updated. We noticed a gap between complex documentation and easy-to-understand resources, and we decided to bridge it.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/2.jpg" alt="Growing Tech Keeda" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Growth & Community</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  As our content grew, so did our community. We began covering a wide range of topics — from programming tutorials to the latest trends in AI, Web3, Cloud Computing, DevOps, and beyond. Our readers are the heart of Tech Keeda.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/3.jpg" alt="Tech Keeda team working" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  We’re committed to providing high-quality, up-to-date content for learners of all levels. Our goal is to empower developers and tech enthusiasts to keep learning, keep building, and keep growing — one blog at a time.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/4.jpg" alt="Tech Keeda sharing knowledge" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Let’s Build the Future</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Technology is evolving faster than ever, and we’re here to make sense of it all. At Tech Keeda, we believe in the power of knowledge sharing and community. Let’s decode technology together and shape the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
