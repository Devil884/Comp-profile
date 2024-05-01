'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const EditPage = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [companyProfile, setCompanyProfile] = useState(null);

  console.log(currentUser);

  useEffect(() => {
    if (currentUser !== null) {

    }
  }, [currentUser])

  const updateUser = (data) => {
    fetch('http://localhost:5000/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then(data => {
              setCurrentUser(data);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  const createNewProfile = () => {
    fetch('http://localhost:5000/profile/add', {
      method: 'POST',
      body: JSON.stringify({ name: currentUser.name + "'s Company" }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success('Created Profile Successfully');
          response.json()
            .then((result) => {
              console.log(result);
              updateUser({ profile: result._id })
            })
        } else {
          toast.error('Something went wrong');
        }
      }).catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  }

  const fetchCompanyProfile = () => {

  }

  return (
    <div className='bg-red-200'>
      {
        !currentUser.profile ?
          <button onClick={createNewProfile} className='px-5 py-3 bg-blue-600 text-white rounded'>Create Profile</button> :
          (
            <div><>
              {/* Card Section */}
              <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                {/* Card */}
                <div className="bg-red-300 rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                      Edit page
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
                          Name
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
                          Address
                        </label>
                      </div>
                      {/* End Col */}
                      <div className="sm:col-span-9">
                        <div className="space-y-2">
                          <input
                            id="af-account"
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your address"
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
                            Contact
                          </label>
                          <span className="text-sm text-gray-400 dark:text-neutral-600">

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
                            Add Contact
                          </a>
                        </p>
                      </div>
                      {/* End Col */}
                      <div className="sm:col-span">
                        <label
                          htmlFor="af-account-gender-checkbox"
                          className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          City
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
                              type="text"
                              name="af-account-gender-checkbox"
                              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="af-account-gender-checkbox"
                              defaultChecked=""
                            />

                          </label>
                          <label
                            htmlFor="af-account-gender-checkbox-female"
                            className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          >
                            <input
                              type="text"
                              name="af-account-gender-checkbox"
                              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="af-account-gender-checkbox-female"
                            />
                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                              State
                            </span>
                          </label>
                          <label
                            htmlFor="af-account-gender-checkbox-other"
                            className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          >
                            <input
                              type="text"
                              name="af-account-gender-checkbox"
                              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="af-account-gender-checkbox-other"
                            />
                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                              ZipCode
                            </span>
                          </label>
                        </div>
                      </div>
                      {/* End Col */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="af-account-Industry"
                          className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          Industry
                        </label>
                      </div>
                      {/* End Col */}
                      <div className="sm:col-span-8">
                        <input
                          id="af-account-Industry"
                          className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          rows={6}
                          placeholder="Name your industry"
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
          )
      }
    </div>









  )
}

export default EditPage