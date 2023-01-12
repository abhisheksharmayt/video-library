import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { openVideoModal } from '../features/Modal/videoModalSlice';
import { addCurrentPlaying } from '../features/Videos/videosSlice';

const History = () => {
    const { watchHistory } = useSelector((store) => store.categories);
    const dispatch = useDispatch();
    console.log(watchHistory);
    return (
        <div className='mx-2 my-8 p-3 bg-white border-2 border-blue-500 rounded-xl xl:my-0'>
            <h2 className='mb-3 text-xl font-medium p-2' >Watch History</h2>
            <div className='max-h-56 overflow-auto xl:h-56'>
                {
                    (watchHistory.length == 0) ?
                        (<div className='h-full text-lg font-medium text-center my-10'> You haven't watched anything yet.</div>) :
                        (
                            watchHistory.map((video, index) => {
                                const { title, video_url, date } = video;
                                return (
                                    <div key={index} className='px-2 py-2 mx-2 my-4 rounded bg-white drop-shadow-lg flex justify-evenly items-center'>
                                        <p className='w-full ml-4'>{title}</p>
                                        <p className='w-full'>{date}</p>
                                        <button className='p-2 mx-2' onClick={() => {
                                            dispatch(openVideoModal())
                                            dispatch(addCurrentPlaying({ title, video_url }));
                                        }}> <AiFillPlayCircle className='text-3xl text-blue-600'/> </button>
                                    </div>
                                )
                            })
                        )
                }
            </div>
        </div>
    )
}

export default History