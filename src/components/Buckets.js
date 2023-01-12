import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { removeBucket } from '../features/Videos/videosSlice';
import { useDispatch } from 'react-redux';

const Buckets = () => {
  const { categories } = useSelector((store) => store.categories);
  // console.log(categories);
  const dispatch = useDispatch();

  return (
    <div className='mx-2 my-8 py-10 px-3 border-2 border-blue-500 rounded-xl xl:flex xl:gap-5 overflow-scroll xl:flex-row xl:px-10'>
      {/* <h2 className='mb-3 text-xl font-medium' >Watch History</h2> */}
      {
        categories.map((current, index) => {
          const { categoryName, videos } = current;
          // console.log(categoryName);
          return (
            <div key={index} className='relative bg-white drop-shadow-lg my-12 p-3 rounded-r rounded-b min-w-[400px]'>
              <div className='absolute px-5 p-2 bg-blue-500 text-white -top-10 left-0 rounded-t flex gap-4 items-center'>
                <div className='flex gap-1 items-center'>
                  <h3 className='font-medium'>{categoryName}</h3>
                  <span className='rounded-full  w-5 h-5 p-1 text-white text-sm flex justify-center items-center'>{videos.length}</span>
                </div>
                <div className='flex gap-3'>
                  <button><AiOutlineEdit /></button>
                  <button onClick={()=>{
                    dispatch(removeBucket(categoryName))
                  }}><AiOutlineDelete /></button>
                </div>
              </div>
              {
                videos.map((video, index) => {
                  const { id } = video;
                  return (
                    <Card key={id} category={categoryName} video={video} />
                  )
                })
              }
            </div>
          )
        })
      }

    </div>
  )
}

export default Buckets