import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const Buckets = () => {
  const { categories } = useSelector((store) => store.categories);
  // console.log(categories);

  return (
    <div className='mx-2 my-8 py-10 px-3 bg-slate-300 rounded xl:flex xl:gap-5 overflow-scroll xl:flex-row'>
      {/* <h2 className='mb-3 text-xl font-medium' >Watch History</h2> */}
      {
        categories.map((current, index) => {
          const { categoryName, videos } = current;
          // console.log(categoryName);
          return (
            <div key={index} className='relative bg-slate-400 my-12 p-3 rounded-r rounded-b min-w-[400px]'>
              <div className='absolute px-5 p-2 bg-orange-300 -top-10 left-0 rounded-t flex gap-4 items-center'>
                <div className='flex gap-1 items-center'>
                  <h3 className='font-medium'>{categoryName}</h3>
                  <span className='rounded-full bg-black w-5 h-5 p-1 text-white text-sm flex justify-center items-center'>{videos.length}</span>
                </div>
                <div className='flex gap-3'>
                  <button><AiOutlineEdit /></button>
                  <button><AiOutlineDelete /></button>
                </div>
              </div>
              {
                videos.map((video, index) => {
                  const { id } = video;
                  return (
                    <Card key={id} video={video} />
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