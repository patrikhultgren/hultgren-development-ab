import React from 'react'

export default function Container({ children }) {
  return (
    <div className="px-6 mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      {children}
    </div>
  )
}
