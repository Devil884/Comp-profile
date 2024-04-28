import React from 'react'

const EditPage = () => {
  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
  <a href="#" className="mx-auto">
    <img
      className="w-auto h-6 sm:h-7"
      src="https://merakiui.com/images/full-logo.svg"
      alt=""
    />
  </a>
  <div className="flex flex-col items-center mt-6 -mx-2">
    <img
      className="object-cover w-24 h-24 mx-2 rounded-full"
      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="avatar"
    />
    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
      John Doe
    </h4>
    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
      john@example.com
    </p>
  </div>
  <div className="flex flex-col justify-between flex-1 mt-6">
    <nav>
      <a
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Dashboard</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Accounts</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Tickets</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Settings</span>
      </a>
    </nav>
  </div>
</aside>

{/* slide bar ends here   */}




<div><>
{/* Card Section */}
<div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
  {/* Card */}
  <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
        Profile
      </h2>
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        Manage your name, password and account settings.
      </p>
    </div>
    <form>
      {/* Grid */}
      <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
        <div className="sm:col-span-3">
          <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
            Profile photo
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <div className="flex items-center gap-5">
            <img
              className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
              src="../assets/img/160x160/img1.jpg"
              alt="Image Description"
            />
            <div className="flex gap-x-2">
              <div>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1={12} x2={12} y1={3} y2={15} />
                  </svg>
                  Upload photo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Col */}
        <div className="sm:col-span-3">
          <label
            htmlFor="af-account-full-name"
            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
          >
            Full name
          </label>
          <div className="hs-tooltip inline-block">
            <button type="button" className="hs-tooltip-toggle ms-1">
              <svg
                className="inline-block size-3 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </button>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
              role="tooltip"
            >
              Displayed on public forums, such as Preline
            </span>
          </div>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input
              id="af-account-full-name"
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Maria"
            />
            <input
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Boone"
            />
          </div>
        </div>
        {/* End Col */}
        <div className="sm:col-span-3">
          <label
            htmlFor="af-account-email"
            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
          >
            Email
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <input
            id="af-account-email"
            type="email"
            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="maria@site.com"
          />
        </div>
        {/* End Col */}
        <div className="sm:col-span-3">
          <label
            htmlFor="af-account-password"
            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
          >
            Password
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <div className="space-y-2">
            <input
              id="af-account-password"
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter current password"
            />
            <input
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter new password"
            />
          </div>
        </div>
        {/* End Col */}
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label
              htmlFor="af-account-phone"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
            >
              Phone
            </label>
            <span className="text-sm text-gray-400 dark:text-neutral-600">
              (Optional)
            </span>
          </div>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input
              id="af-account-phone"
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="+x(xxx)xxx-xx-xx"
            />
            <select className="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
              <option selected="">Mobile</option>
              <option>Home</option>
              <option>Work</option>
              <option>Fax</option>
            </select>
          </div>
          <p className="mt-3">
            <a
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
              href="../docs/index.html"
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
                <circle cx={12} cy={12} r={10} />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              Add phone
            </a>
          </p>
        </div>
        {/* End Col */}
        <div className="sm:col-span-3">
          <label
            htmlFor="af-account-gender-checkbox"
            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
          >
            Gender
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <label
              htmlFor="af-account-gender-checkbox"
              className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            >
              <input
                type="radio"
                name="af-account-gender-checkbox"
                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox"
                defaultChecked=""
              />
              <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                Male
              </span>
            </label>
            <label
              htmlFor="af-account-gender-checkbox-female"
              className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            >
              <input
                type="radio"
                name="af-account-gender-checkbox"
                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox-female"
              />
              <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                Female
              </span>
            </label>
            <label
              htmlFor="af-account-gender-checkbox-other"
              className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            >
              <input
                type="radio"
                name="af-account-gender-checkbox"
                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-account-gender-checkbox-other"
              />
              <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                Other
              </span>
            </label>
          </div>
        </div>
        {/* End Col */}
        <div className="sm:col-span-3">
          <label
            htmlFor="af-account-bio"
            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
          >
            BIO
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-9">
          <textarea
            id="af-account-bio"
            className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            rows={6}
            placeholder="Type your message..."
            defaultValue={""}
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      <div className="mt-5 flex justify-end gap-x-2">
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        >
          Cancel
        </button>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Save changes
        </button>
      </div>
    </form>
  </div>
  {/* End Card */}
</div>
{/* End Card Section */}
</>
</div>
</div>









  )
}

export default EditPage