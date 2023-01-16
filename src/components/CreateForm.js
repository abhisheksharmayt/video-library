import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../features/Form/categorySlice'
import { addCategory, addNewVideo } from '../features/Videos/videosSlice'
import { setVideoCategory, setTitle, setVideoUrl } from '../features/Form/newVideoSlice'

const CreateForm = () => {
  const { category } = useSelector((store) => store.category);
  const { categories } = useSelector((store) => store.categories);
  const { title, video_url, videoCategory } = useSelector((store) => store.newVideo);
  // console.log(title, video_url, videoCategory);
  const dispatch = useDispatch();

  return (
    <div className='mx-2  p-5 border-2 border-blue-500 rounded-xl flex flex-col gap-5 lg:flex-row lg:justify-evenly'>
      <div className='mb-3 p-3 bg-white drop-shadow-lg w-full rounded lg:mb-0'>
        <h2 className='mb-3 text-2xl font-medium'>Add a category</h2>

        {/* Add category input */}
        <label className='font-medium' htmlFor="name">Category Name</label>

        <input className="p-2 my-3 w-full rounded border-2" type="text" value={category} placeholder="e.g. Education" onChange={(e) => { dispatch(setCategory(e.target.value)) }} />

        <button className='bg-blue-500 text-white px-5 py-2 rounded' onClick={() => {
          dispatch(addCategory(category))
          dispatch(setCategory(""))
        }}>Add</button>

      </div>
      <div className=' p-3 bg-white drop-shadow-lg w-full rounded lg:mt-0'>
        <h2 className='mb-3 text-2xl font-medium'>Add a new video</h2>
        {/* title input */}
        <label className='font-medium' htmlFor="name">Title</label>

        <input className="p-2 my-3 w-full rounded border-2" type="text" id="name" value={title} placeholder="Hire me you won't regret..." onChange={(e) => { dispatch(setTitle(e.target.value)) }} />

        {/* video url input */}
        <label className='font-medium' htmlFor="video_link">Video Link</label>

        <input className="p-2 my-3 w-full rounded border-2" type="text" id="video_link" value={video_url} placeholder="https://youtube.com/embed/f7ke3HznCCo" onChange={(e) => { dispatch(setVideoUrl(e.target.value)) }} />

        {/* category select input */}
        <label className='font-medium block' htmlFor="categories">
          Category
        </label>

        <select className='block w-36 p-2 my-3 rounded border-2' name="categories" id="categories" value={videoCategory} onChange={(e) => {
          dispatch(setVideoCategory(e.target.value))
          console.log(e.target.value)
        }}>
          {
            categories.map((current, index) => {
              const { categoryName } = current;
              return (
                <option key={index} value={categoryName}>{categoryName}</option>
              )
            })
          }
        </select>

        {/* Add button */}
        <button className='bg-blue-500 text-white px-5 py-2 rounded disabled:opacity-50' onClick={() => {
          dispatch(addNewVideo({ title, video_url, videoCategory }))
          dispatch(setTitle(""));
          dispatch(setCategory(""));
          dispatch(setVideoUrl(""));
        }} disabled={!categories.length} >Add</button>

      </div>
    </div>
  )
}

export default CreateForm