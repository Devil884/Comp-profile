import Link from 'next/link'
import React from 'react'

const categry = () => {
  return (
    <div>
      <>
        {/* Team */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-blue-200">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
              Find your needs here
            </h2>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div  className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <Link className="text-center" href={'/browse-profile/hospital'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://www.who.int/images/default-source/wpro/health-topic/hospitals/f8-11102016-my-6042.tmb-1024v.jpg?Culture=en&sfvrsn=57e1f33d_4"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Hospitals
                </h3>
              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center" href={'/browse-profile/Cafe'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://c.ndtvimg.com/2024-01/nmncfji_indian-cuisine_625x300_26_January_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Cafe's
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/school&college'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://www.research-in-germany.org/dam/jcr:1e10a168-41cc-4655-8923-86da01270076/school_iStock-1358014313.jpg"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Schools & College
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/appartment'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/28140224/Urban-City-Apartment-by-marcololstudio.png"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Appartments
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/carservice'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjfgHnoWxAHcVbR9bEhgX7CHJJkcCacf33Z0y2cARCQ&s"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  CAR service
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/malls'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://static.vecteezy.com/system/resources/previews/007/526/988/original/building-mall-icon-logo-design-template-flat-style-trendy-free-vector.jpg"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Malls
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/coching&institude'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BG3XzFo9UB4j8qxiLg2_OxGBBMl7El2qqPkSXxr4cw&s"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Cochings & Institude
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/publicservice'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8as0wkJyMzUTiQgG0QTgNmZtG2ybwFPJCCTJHUH1iyA&s"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Publice service
                </h3>

              </div>
            </Link>
            {/* End Col */}
            <Link className="text-center"href={'/browse-profile/hotel'}>
              <img
                className="rounded-xl sm:size-48 lg:size-60 mx-auto"
                src="https://img.freepik.com/premium-vector/hotel-icon-logo-vector-design-template_827767-3569.jpg"
                alt="Image Description"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                  Hotel
                </h3>

              </div>
            </Link>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Team */}
      </>

    </div>
  )
}

export default categry
