import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { removeCard } from '../features/Videos/videosSlice';

const Card = ({category, video }) => {
    const { id, title, video_url } = video;
    const dispatch = useDispatch();
    return (
        <div className='bg-slate-300 p-3 rounded flex justify-between items-center mb-3'>
            <p className=''>{title}</p>
            <div className='flex gap-4'>
                <button className='bg-green-400 py-2 px-5 rounded'>play</button>
                <div className='flex flex-col justify-between'>
                    <button ><AiOutlineEdit /></button>
                    <button onClick={() => dispatch(removeCard({category, id}))}><AiOutlineDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default Card