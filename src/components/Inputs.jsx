import React from 'react'

function Inputs() {
  return (
    <div>
      <div className='flex justify-center gap-4 mt-12 mb-5'>
        <input type="text" className='block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
        <button className='px-3 py-1 bg-slate-600 rounded text-white'>Todo Ekle</button>
      </div>
    </div>
  )
}

export default Inputs