'use client';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const EditPage = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [companyProfile, setCompanyProfile] = useState(currentUser.profile);

  console.log(currentUser);


  const updateUser = (data) => {
    fetch('http://localhost:5000/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          response.json()
            .then(data => {
              console.log(data);
              setCurrentUser(data);
              setCompanyProfile(data.profile);
              sessionStorage.setItem('user', JSON.stringify(data));
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  const updateProfile = (data) => {
    console.log(data);
    fetch('http://localhost:5000/profile/update/' + companyProfile._id, {
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
              console.log(data);
              setCompanyProfile(data);
              toast.success('Profile Updated')
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ logo: file.name })
      }
    });
  };

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


  return (
    <>
      {
        !currentUser.profile ?
          <button onClick={createNewProfile} className='px-5 py-3 bg-blue-600 text-white rounded'>Create Profile</button> :
          (
            <div className=" py-4 px-16 mx-auto " >
              <div className="mb-8 text-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                  Edit page
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  Manage your site.
                </p>
              </div>
              <Formik initialValues={companyProfile} onSubmit={updateProfile} >
                {
                  ({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                      <div className="sm:col-span-3 ">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                          <b>Enter your company detail's Here</b>
                        </label>
                      </div>
                      {/* End Col */}
                      <div className="sm:col-span-9">
                        <div className="flex justify-center gap-5">
                          
                          <div className="flex gap-x-2 ">
                            <div>
                              <label
                                htmlFor='upload-file'
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
                              </label>
                              <input id='upload-file' type="file" onChange={uploadFile} hidden />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Col */}
                      <div className='grid grid-cols-2 gap-4'>

                        <div className="">
                          <label
                            htmlFor="af-account-full-name"
                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            onChange={handleChange}
                            value={values.name}
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0 text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Maria"
                          />
                        </div>
                        <div className="" >
                          <label
                            htmlFor="af-account-email"
                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 "
                          >
                            Category
                          </label>
                          <input
                            id="category"
                            onChange={handleChange}
                            value={values.category}
                            type="name"
                            className="py-2 px-3 pe-11 w-full  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500  "
                            placeholder="category"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="af-account-email"
                            className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            type="email"
                            className="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500  "
                            placeholder="maria@site.com"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="af-account-password"
                            className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                          >
                            Address
                          </label>
                          <input
                            id="address"
                            onChange={handleChange}
                            value={values.addres}
                            type="text"
                            className="py-2 px-3 pe-11  w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your address"
                          />
                        </div>
                      <div className="">
                          <label
                            htmlFor="af-account-phone"
                            className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                          >
                            Contact
                          </label>
                          
                          <input
                            id="contact"
                            onChange={handleChange}
                            value={values.contact}
                            type="text"
                            className="py-2 px-3 pe-11 w-full  border-gray-200 shadow-sm last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm justify-item-center "
                            placeholder="+x(xxx)xxx-xx-xx"
                          />
                      </div>
                      <div className="">
                        <label
                          htmlFor="af-account-password"
                          className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          City
                        </label>
                          <input
                            id="city"
                            onChange={handleChange}
                            value={values.city}
                            type="text"
                            className="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your city"
                          />
                      </div>
                      <div className="">
                        <label
                          htmlFor="af-account-password"
                          className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          State
                        </label>
                          <input
                            id="state"
                            onChange={handleChange}
                            value={values.state}
                            type="text"
                            className="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your state"
                          />
                     
                      </div>
                     <div className="">
                        <label
                          htmlFor="af-account-password"
                          className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          Zip code
                        </label>
                          <input
                            id="zipcode"
                            onChange={handleChange}
                            value={values.zipcode}
                            type="text"
                            className="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your Zip code"
                          />
                      
                      </div>
                      <div className="">
                        <label
                          htmlFor="af-account-password"
                          className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          Industry
                        </label>
                          <input
                            id="industry"
                            onChange={handleChange}
                            value={values.industry}
                            type="text"
                            className="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your Industry"
                          />
                      </div>
                      <div className="">
                        <label
                          htmlFor="af-account-password"
                          className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          Country
                        </label>
                          <input
                            id="country"
                            onChange={handleChange}
                            value={values.country}
                            type="text"
                            className="py-2 px-3 pe-11 w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your country"
                          />
                      </div>
                      <div className="">
                        <label
                          htmlFor="af-account-password"
                          className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                        >
                          About
                        </label>
                          <textarea
                            id="about"
                            onChange={handleChange}
                            value={values.about}
                            type="text"
                            rows={4}
                            className="py-2 px-3 pe-11 w-full  border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter your Industry"
                          ></textarea>
                      </div>
                      <div className=''>
                              <label
                                htmlFor='upload-file'
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
                                Gallery
                              </label>
                              <input id='upload-file' type="file" onChange={uploadFile} hidden />
                              <div>
                              <img
                        className="object-cover w-50 h-24 mx-2 rounded-full"
                        src={'/view-profile' + currentUser.profile.logo}
                        alt="avatar"
                    />
                              </div>
                            </div>
                      </div>
                     <div className="mt-5 flex gap-x-2 justify-end">
                        <button
                          type="submit"
                          className="py-2 px-3 text-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  )
                }
              </Formik>
            </div>
          )
      }

    </>

  )
}

export default EditPage