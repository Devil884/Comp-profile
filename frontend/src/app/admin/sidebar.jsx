import React from 'react'

const Sidebar = ({children}) => {
  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-white">
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto 2xl:max-w-7xl sm:px-6 md:px-8">
                {/* === Remove and replace with your own content... === */}
                <div className="py-4">
                 {children}
                </div>
                {/* === End ===  */}
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
