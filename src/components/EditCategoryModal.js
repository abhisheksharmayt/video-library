import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setNewCategoryName, setPrevCategoryName } from '../features/Form/updateCategorySlice'
import { updateCategory } from '../features/Videos/videosSlice'
import { closeEditCategoryModal } from '../features/Modal/editCategoryModalSlice'


const EditCategoryModal = () => {
    const dispatch = useDispatch();
    const { prevCategoryName, newCategoryName } = useSelector((store) => store.updateCategory);
    return (
        <div className='fixed z-10 h-screen w-full  top-0 left-0 flex justify-center items-center p-5 bg-white/70 backdrop-blur-sm'>
            <div className='relative p-12 w-full max-w-xl h-[400px] overflow-auto bg-white border-4 border-blue-500 rounded-xl'>

                {/* modal close button */}
                <button className='closeButton absolute right-0 top-0 m-1 p-2 rounded-lg font-bold bg-white drop-shadow-md' onClick={() => { dispatch(closeEditCategoryModal()) }}><AiOutlineClose className='text-xl' /></button>

                <h2 className='mb-3 text-2xl font-medium'>Enter New Details</h2>
                {/* category name input */}
                <label className='font-medium' htmlFor="name">Category Name</label>

                <input className="p-2 my-3 w-full rounded border-2" type="text" id="name" value={newCategoryName} placeholder="Hire me you won't regret..." onChange={(e) => { dispatch(setNewCategoryName(e.target.value)) }} />

                {/* Add button */}
                <button className='bg-blue-500 text-white px-5 py-2 rounded' onClick={() => {
                    dispatch(updateCategory({prevCategoryName, newCategoryName }));
                    dispatch(setNewCategoryName(""));
                    dispatch(setPrevCategoryName(""));
                    dispatch(closeEditCategoryModal());
                }}>Update</button>
            </div>
        </div>
    )
}

export default EditCategoryModal