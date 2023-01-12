import React from 'react'

const CreateForm = () => {
  return (
      <div className='mx-2  p-5 bg-slate-300 rounded flex flex-col gap-5 lg:flex-row lg:justify-evenly'>
        <div className='mb-3 p-3 bg-slate-400 w-full rounded lg:mb-0'>
            <h2 className='mb-3 text-xl font-medium'>Add a category</h2>
            <input className="p-2 my-3 w-full rounded" type="text" />
            <button className='bg-blue-500 text-white px-5 py-2 rounded'>Add</button>
        </div>
        <div className=' p-3 bg-slate-400 w-full rounded lg:mt-0'>
              <h2 className='mb-3 text-xl font-medium'>Add a new video</h2>
              <label className='font-medium' htmlFor="name">Title</label>
              <input className="p-2 my-3 w-full rounded" type="text" id="name" />
              <label className='font-medium' htmlFor="video_link">Video Link</label>
              <input className="p-2 my-3 w-full rounded" type="text" id="video_link" />
              <label className='font-medium block' htmlFor="categories">
                Category
              </label>
              <select className='block w-24 p-2 my-3 rounded' name="categories" id="categories">
                <option value="Hello">Hello</option>
                <option value="Hello">Hello</option>
              </select>
              <button className='bg-blue-500 text-white px-5 py-2 rounded'>Add</button>
        </div>
    </div>
  )
}

export default CreateForm