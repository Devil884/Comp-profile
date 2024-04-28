import Link from "next/link";
const login = () => {

  return (
    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
      </div>
      <div className="relative flex justify-end items-center max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl gap-x-10">
        <img
          src="https://img.freepik.com/premium-vector/3d-user-login-form-page_169241-6920.jpg"
          className="w-1/2"
          alt=""
        />
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white-900 sm:text-4xl sm:leading-none">
              We will bring your
              <br className="hidden md:block" />
              business{' '}
              <span className="inline-block text-deep-purple-accent-400">
                online
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              You can write content here
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row">
              <input
                placeholder="User ID"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Password"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Login
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <Link href="/signup">SignUp</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="content 1 p-4 space-y-2">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                20 Nov 2020
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                    What it means when a man falls from outer space
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                Call it magical realism, call it realistic fantasy—call it whatever
                you want, but Arimah's playfully subversive style is wholly her own.
              </p>
              <div className="flex items-center">
                <a href="/" aria-label="Author" className="mr-3">
                  <img
                    alt="avatar"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    href="/"
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Petru Vîrtos
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 lg:col-span-3">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  14 Jul 2020
                </p>
                <div className="mb-3">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      Mascarpone cheese triangles taleggio
                    </p>
                  </a>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  Brie cheese triangles cheesecake. Cauliflower cheese cheese and
                  wine manchego bocconcini croque monsieur queso airedale brie.
                </p>
                <div className="flex items-center">
                  <a href="/" aria-label="Author" className="mr-3">
                    <img
                      alt="avatar"
                      src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Alex Stratulat
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  18 Mar 2020
                </p>
                <div className="mb-3">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      The quick, brown fox jumps over a lazy dog
                    </p>
                  </a>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  "A kitten, a nice little, sleek playful kitten, that I can play
                  with, and teach, and feed--and feed--and feed!" I was not
                  unprepared for this request, for I had noticed how his pets went
                  on increasing in size.
                </p>
                <div className="flex items-center">
                  <a href="/" aria-label="Author" className="mr-3">
                    <img
                      alt="avatar"
                      src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Susie the Cat
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default login;