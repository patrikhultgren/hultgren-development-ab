import React from 'react'

export default function Container({ children }) {
  return (
    <div className="px-6 md:px-0 relative">
      <div className="ml-0 sm:ml-[128px] md:ml-[256px] max-w-[1100px] md:pr-14">
        {children}
      </div>
    </div>
  )
}
