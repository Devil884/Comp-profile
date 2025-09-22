import React from 'react';
import 'flowbite';
import 'animate.css'; // Make sure to install animate.css or use Tailwind animations

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-400 via-green-300 to-green-500 font-sans text-gray-900 dark:text-gray-100">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate__animated animate__fadeInDown">
            Tackling Challenges Start-ups Face
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
            We partner with start-up enterprises to support their digital transformation journey and help them grow with our innovative platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            icon={
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width={18} height={10} x={3} y={11} rx={2} />
                <circle cx={12} cy={5} r={2} />
                <path d="M12 7v4" />
                <line x1={8} y1={16} x2={8} y2={16} />
                <line x1={16} y1={16} x2={16} y2={16} />
              </svg>
            }
            title="Easy to Find"
            description="It's easy to find what you're looking for with rich search capabilities."
          />

          <FeatureItem
            icon={
              <svg
                className="w-10 h-10 text-pink-600 dark:text-pink-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            }
            title="Loved by Everyone"
            description="Our platform is loved by everyone, from individuals to enterprises."
          />

          <FeatureItem
            icon={
              <svg
                className="w-10 h-10 text-green-600 dark:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            }
            title="Best for Start-ups"
            description="Our platform is the best choice for start-up businesses to grow and thrive."
          />

          <FeatureItem
            icon={
              <svg
                className="w-10 h-10 text-yellow-600 dark:text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            title="Designed for Companies"
            description="Our platform is designed for companies to use easily and effectively."
          />
        </div>

        {/* Video Section */}
        <div className="mt-28 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl relative group">
          <div
            className="aspect-w-16 aspect-h-9 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://www.solutionsget.com/wp-content/uploads/2016/10/About-Us-1.jpg')",
            }}
          >
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300"
              aria-label="Watch our story"
            >
              <svg
                className="w-20 h-20 text-red-600 hover:text-red-400 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className="sr-only">Watch our story</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate__animated animate__fadeInUp">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default About;
