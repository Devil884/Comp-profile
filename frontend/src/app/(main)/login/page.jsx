'use client';
import useUserContext from '@/context/UserContext';
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const Login = () => {

  const {setLoggedIn} = useUserContext();

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Login Successfull');
            response.json()
            .then((data) => {
              console.log(data);
              setLoggedIn(true);
              sessionStorage.setItem('user', JSON.stringify(data));
              router.push('/user/edit-page');
            })
          } else {
            toast.error('Invalid Credentials');

          }
        }).catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
        });
    }
  })

  return (
    <div  >
    <div style={{ height:"40rem",  }} className='bg-purple-500 p-20 bg-[url("https://marketplace.canva.com/EAFCytpuJ08/1/0/1600w/canva-green-wateroclor-leaf-linktree-background-0Mp0WYk6_8E.jpg")]'   >
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-purple-300 rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto ">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
              alt=""
            />
          </div>
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>
          <form onSubmit={loginForm.handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                id='password'
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              {/* can add forget password link here */}
              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white  bg-blue-500 rounded-lg justify-center  ">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?{" "}
          </span>
          <Link
            href="./signup"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
</div>
    </div>
  )
}

export default Login
