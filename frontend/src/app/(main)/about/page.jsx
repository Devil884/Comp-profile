import React from 'react'
import 'flowbite';

const About = () => {
  return (
    <div>
      <div className='bg-black'>
        <>
          {/* component */}
          {/* This is an example component */}
          <div className="max-w-2xl mx-auto">
            <div id="default-carousel" className="relative" data-carousel="static">
              {/* Carousel wrapper */}
              <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                  <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                    First Slide
                  </span>
                  <img
                    src="/alfa.png"
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                  <img
                    src="/alphabeta.webp"
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg/1200px-New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg"
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
              </div>
              {/* Slider indicators */}
              <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 1"
                  data-carousel-slide-to={0}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to={1}
                />
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to={2}
                />
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-prev=""
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="hidden">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-next=""
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="hidden">Next</span>
                </span>
              </button>
            </div>
          </div>
        </>

      </div>
      <>

        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="aspect-w-16 aspect-h-7">

          </div>
          {/* Grid */}
          <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                We tackle the challenges start-ups face
              </h2>
              <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
                Besides working with start-up enterprises as a partner for
                digitalization, we also support them with our platform in digitalizing their business .
              </p>
            </div>
            {/* End Col */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={18} height={10} x={3} y={11} rx={2} />
                    <circle cx={12} cy={5} r={2} />
                    <path d="M12 7v4" />
                    <line x1={8} x2={8} y1={16} y2={16} />
                    <line x1={16} x2={16} y1={16} y2={16} />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Easy to Fine
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      It's easy to find what you're looking for with rich search
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Loved by everyone
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      Our platform is loved by everyone, from individuals to
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Best for start-up businesses
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      Our platform is the best for start-up businesses to grow

                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Designing for Company
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      Our platform is designed for Company to use easily and effectively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        {/* End Features */}
      </>
      <>
        {/* Features */}
        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('https://png.pngtree.com/png-clipart/20220928/original/pngtree-man-boss-desk-png-image_8639299.png')] bg-center bg-cover bg-no-repeat relative rounded-xl">
            <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
              {/* Card */}
              <div className="px-5 py-4 inline-block  rounded-lg md:p-7 ">

                <div className="md:mt-16">
                  <a
                    className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-gray-500 dark:text-white dark:hover:text-neutral-400"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch our story
                  </a>
                </div>
              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
        {/* End Features */}
      </>

    </div>
  )
}

export default About;