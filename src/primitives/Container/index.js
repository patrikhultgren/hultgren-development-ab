import React from 'react'

export default function Container({ children }) {
  return (
    <div className="flex px-4 md:px-0 relative">
      <div className="w-[256px] hidden md:block" />
      <div className="max-w-[1100px]">{children}</div>
    </div>
  )
}
