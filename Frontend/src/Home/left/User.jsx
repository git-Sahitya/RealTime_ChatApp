import React from 'react'

const User = () => {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-14 rounded-full">
          <img src="https://img.freepik.com/premium-vector/8000-110_138676-7697.jpg?semt=ais_hybrid&w=740" />
        </div>
      </div>
      <div>
        <h1 className=''>Sahitya Singh </h1>
        <span>sahi@gmail.com</span>
      </div>
    </div>
    </div>
  )
}

export default User
