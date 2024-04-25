import React from 'react'

const AdminProfile = () => {
  return (
    <div><div className="bg-darkpurple py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/* quote - start */}
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <a
          href="#"
          className="text-orange transition duration-100 hover:text-gray-500 active:text-gray-600"
        >
          <svg
            className="h-6 w-auto sm:h-8"
            width={173}
            height={39}
            viewBox="0 0 173 39"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M43.2727 31C50.3636 31 54.6591 26.6136 54.6591 19.3409C54.6591 12.0909 50.3636 7.72727 43.3409 7.72727H35.0227V31H43.2727ZM39.9432 26.7841V11.9432H43.0795C47.4432 11.9432 49.75 14.1705 49.75 19.3409C49.75 24.5341 47.4432 26.7841 43.0682 26.7841H39.9432ZM63.1903 31.3295C65.7699 31.3295 67.4403 30.2045 68.2926 28.5795H68.429V31H73.0199V19.2273C73.0199 15.0682 69.4972 13.3182 65.6108 13.3182C61.429 13.3182 58.679 15.3182 58.0085 18.5L62.4858 18.8636C62.8153 17.7045 63.8494 16.8523 65.5881 16.8523C67.2358 16.8523 68.179 17.6818 68.179 19.1136V19.1818C68.179 20.3068 66.9858 20.4545 63.9517 20.75C60.4972 21.0682 57.3949 22.2273 57.3949 26.125C57.3949 29.5795 59.8608 31.3295 63.1903 31.3295ZM64.5767 27.9886C63.0881 27.9886 62.0199 27.2955 62.0199 25.9659C62.0199 24.6023 63.1449 23.9318 64.8494 23.6932C65.9062 23.5455 67.6335 23.2955 68.2131 22.9091V24.7614C68.2131 26.5909 66.7017 27.9886 64.5767 27.9886ZM86.0597 13.5455H82.7756V9.36364H77.9347V13.5455H75.5483V17.1818H77.9347V26.2727C77.9119 29.6932 80.2415 31.3864 83.7528 31.2386C85.0028 31.1932 85.8892 30.9432 86.3778 30.7841L85.6165 27.1818C85.3778 27.2273 84.8665 27.3409 84.4119 27.3409C83.446 27.3409 82.7756 26.9773 82.7756 25.6364V17.1818H86.0597V13.5455ZM94.1903 31.3295C96.7699 31.3295 98.4403 30.2045 99.2926 28.5795H99.429V31H104.02V19.2273C104.02 15.0682 100.497 13.3182 96.6108 13.3182C92.429 13.3182 89.679 15.3182 89.0085 18.5L93.4858 18.8636C93.8153 17.7045 94.8494 16.8523 96.5881 16.8523C98.2358 16.8523 99.179 17.6818 99.179 19.1136V19.1818C99.179 20.3068 97.9858 20.4545 94.9517 20.75C91.4972 21.0682 88.3949 22.2273 88.3949 26.125C88.3949 29.5795 90.8608 31.3295 94.1903 31.3295ZM95.5767 27.9886C94.0881 27.9886 93.0199 27.2955 93.0199 25.9659C93.0199 24.6023 94.1449 23.9318 95.8494 23.6932C96.9062 23.5455 98.6335 23.2955 99.2131 22.9091V24.7614C99.2131 26.5909 97.7017 27.9886 95.5767 27.9886ZM114.207 31.2841C117.026 31.2841 118.491 29.6591 119.162 28.2045H119.366V31H124.139V7.72727H119.31V16.4773H119.162C118.514 15.0568 117.116 13.3182 114.196 13.3182C110.366 13.3182 107.128 16.2955 107.128 22.2955C107.128 28.1364 110.23 31.2841 114.207 31.2841ZM115.741 27.4318C113.366 27.4318 112.071 25.3182 112.071 22.2727C112.071 19.25 113.344 17.1705 115.741 17.1705C118.094 17.1705 119.412 19.1591 119.412 22.2727C119.412 25.3864 118.071 27.4318 115.741 27.4318ZM128.119 31H132.96V21.125C132.96 18.9773 134.528 17.5 136.665 17.5C137.335 17.5 138.256 17.6136 138.71 17.7614V13.4659C138.278 13.3636 137.676 13.2955 137.188 13.2955C135.233 13.2955 133.631 14.4318 132.994 16.5909H132.812V13.5455H128.119V31ZM141.213 31H146.054V13.5455H141.213V31ZM143.645 11.2955C145.088 11.2955 146.27 10.1932 146.27 8.84091C146.27 7.5 145.088 6.39773 143.645 6.39773C142.213 6.39773 141.031 7.5 141.031 8.84091C141.031 10.1932 142.213 11.2955 143.645 11.2955ZM159.318 13.5455H155.852V12.375C155.852 11.1932 156.33 10.5 157.75 10.5C158.33 10.5 158.92 10.625 159.307 10.75L160.159 7.11364C159.557 6.93182 158.227 6.63636 156.739 6.63636C153.455 6.63636 151.011 8.48864 151.011 12.2841V13.5455H148.545V17.1818H151.011V31H155.852V17.1818H159.318V13.5455ZM171.56 13.5455H168.276V9.36364H163.435V13.5455H161.048V17.1818H163.435V26.2727C163.412 29.6932 165.741 31.3864 169.253 31.2386C170.503 31.1932 171.389 30.9432 171.878 30.7841L171.116 27.1818C170.878 27.2273 170.366 27.3409 169.912 27.3409C168.946 27.3409 168.276 26.9773 168.276 25.6364V17.1818H171.56V13.5455Z" />
            <rect y={26} width={24} height={5} />
            <rect x={9} y={17} width={15} height={5} />
          </svg>
        </a>
        <div className="max-w-md text-center text-green lg:text-lg">
          “This is a section of some simple filler text, also known as placeholder
          text.”
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
              loading="lazy"
              alt="Photo by Radu Florin"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <div className="text-center text-sm font-bold text-black sm:text-left md:text-base">
              John McCulling
            </div>
            <p className="text-center text-sm text-black sm:text-left md:text-sm">
              CEO / Datadrift
            </p>
          </div>
        </div>
      </div>
      {/* quote - end */}
    </div>
    <div>
    <form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="email"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email address
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="password"
      name="floating_password"
      id="floating_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Password
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
      type="password"
      name="repeat_password"
      id="floating_repeat_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_repeat_password"
      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Confirm password
    </label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_first_name"
        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        First name
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_last_name"
        id="floating_last_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_last_name"
        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Last name
      </label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="floating_phone"
        id="floating_phone"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_phone"
        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Phone number (123-456-7890)
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_company"
        id="floating_company"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_company"
        className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Company (Ex. Google)
      </label>
    </div>
  </div>
  <button
    type="submit"
    className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>
 </div>
 <br />
    <div className="p-6">
    <ol className="items-center sm:flex">
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
    </div>
    <div className="mt-3 sm:pe-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Flowbite Library v1.0.0
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Released on December 2, 2021
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Get started with dozens of web components and interactive elements.
      </p>
    </div>
  </li>
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
    </div>
    <div className="mt-3 sm:pe-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Flowbite Library v1.2.0
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Released on December 23, 2021
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Get started with dozens of web components and interactive elements.
      </p>
    </div>
  </li>
  <li className="relative mb-6 sm:mb-0">
    <div className="flex items-center">
      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
    </div>
    <div className="mt-3 sm:pe-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Flowbite Library v1.3.0
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Released on January 5, 2022
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Get started with dozens of web components and interactive elements.
      </p>
    </div>
  </li>
</ol>
<hr />
    </div>
    <div>
    <footer className="bg-blue rounded-lg shadow dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://flowbite.com/"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

    </div>
  </div>
  </div>
  )
}

export default AdminProfile;