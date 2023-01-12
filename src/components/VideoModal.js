import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { closeVideoModal } from '../features/Modal/videoModalSlice'

const VideoModal = () => {
    const dispatch = useDispatch();
    const { title, video_url } = useSelector(store => store.categories.currentPlaying);
    return (
        <div className='fixed z-10 h-screen w-full  top-0 left-0 flex justify-center items-center p-5 bg-white/70 backdrop-blur-sm'>
            <div className='relative p-12 w-full max-w-3xl h-full max-h-[70vh] bg-white border-4 border-blue-500 rounded-xl flex'>
                <button className='closeButton  absolute right-0 top-0 m-1 p-2 rounded-lg font-bold' onClick={()=>{dispatch(closeVideoModal())}}><AiOutlineClose className='text-xl' /></button>
                <iframe className='w-full h-full' src={video_url} title="video player" frameBorder="0"  allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default VideoModal