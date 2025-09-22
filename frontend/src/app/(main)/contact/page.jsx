import React from 'react'

const Contact = () => {
  return (
    <div>
      <>
        {/* Contact */}
        <div
          className="bg-neutral-900"
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #b6851dff 0%, #732ad2ff 100%)",
            padding: "40px 0",
            fontFamily: "Segoe UI, sans-serif",
          }}
        >
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Contact us
              </h2>
              <p className="mt-1 text-yellow-100">
                Whatever your goal - we will get you there.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div>
                <img
                  src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg"
                  alt="Black handset toys"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* End Col */}
              <div className="space-y-14">
                {/* Item */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-yellow-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Our address:</h4>
                    <address className="mt-1 text-yellow-100 text-sm not-italic">
                      300 Bath Street, Tay House
                      <br />
                      Glasgow G2 4JR, United Kingdom
                    </address>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-yellow-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Email us:</h4>
                    <a
                      className="mt-1 text-yellow-100 text-sm"
                      href="mailto:hello@example.so"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hello@example.so
                    </a>
                  </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-yellow-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">We're hiring</h4>
                    <p className="mt-1 text-yellow-100">
                      We're thrilled to announce that we're expanding our team
                      and looking for talented individuals like you to join us.
                    </p>
                    <p className="mt-2">
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline"
                        href="#"
                      >
                        Job openings
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
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
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                {/* End Item */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Contact */}
      </>
    </div>
  )
}

export default Contact
