import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle, setVideoCategory, setVideoUrl } from '../features/Form/newVideoSlice'
import { closeEditVideoModal } from '../features/Modal/editVideoModalSlice'
import { updateVideo } from '../features/Videos/videosSlice'


const EditVideoModal = () => {
    const dispatch = useDispatch();
    const { id, title, video_url, videoCategory } = useSelector((store) => store.newVideo);
    const { categories } = useSelector((store) => store.categories)

    return (
        <div className='fixed z-10 h-screen w-full  top-0 left-0 flex justify-center items-center p-5 bg-white/70 backdrop-blur-sm'>
            <div className='relative p-12 w-full max-w-xl h-[400px] overflow-auto bg-white border-4 border-blue-500 rounded-xl'>

                {/* modal close button */}
                <button className='closeButton absolute right-0 top-0 m-1 p-2 rounded-lg font-bold bg-white drop-shadow-md' onClick={() => { dispatch(closeEditVideoModal()) }}><AiOutlineClose className='text-xl' /></button>

                <h2 className='mb-3 text-2xl font-medium'>Enter New Details</h2>
                {/* title input */}
                <label className='font-medium' htmlFor="name">Title</label>

                <input className="p-2 my-3 w-full rounded border-2" type="text" id="name" value={title} placeholder="Hire me you won't regret..." onChange={(e) => { dispatch(setTitle(e.target.value)) }} />

                {/* video url input */}
                <label className='font-medium' htmlFor="video_link">Video Link</label>

                <input className="p-2 my-3 w-full rounded border-2" type="text" id="video_link" value={video_url} placeholder="https://youtube.com/embed/f7ke3HznCCo" onChange={(e) => { dispatch(setVideoUrl(e.target.value)) }} />

                {/* category select input */}

                {/* ----Currently not including this due to some bug drag-n-drop will be enough---- */}

                {/* <label className='font-medium block' htmlFor="categories">
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
                </select> */}

                {/* Add button */}
                <button className='bg-blue-500 text-white px-5 py-2 rounded' onClick={() => {
                    dispatch(updateVideo({id, title, video_url, videoCategory }))
                    dispatch(setTitle(""));
                    dispatch(setVideoUrl(""));
                    dispatch(closeEditVideoModal());
                }}>Update</button>
            </div>
        </div>
    )
}

export default EditVideoModal