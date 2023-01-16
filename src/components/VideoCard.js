import React, { useEffect } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { removeCard } from '../features/Videos/videosSlice';
import { openVideoModal } from '../features/Modal/videoModalSlice';
import { addCurrentPlaying } from '../features/Videos/videosSlice';
import { setId, setTitle, setVideoCategory, setVideoUrl } from '../features/Form/newVideoSlice'
import { openEditVideoModal } from '../features/Modal/editVideoModalSlice';
import {Draggable } from 'react-beautiful-dnd';


const Card = ({ category, video, index }) => {
    const { id, title, video_url } = video;
    const dispatch = useDispatch();
    return (
        <Draggable key={id} draggableId={`${id}`} index={index}>
            {(draggableProvided, draggableSnapshot) => {

                //---- to correct offset of draggable ----                
                if (draggableSnapshot.isDragging) {
                    draggableProvided.draggableProps.style.left = draggableProvided.draggableProps.style.offsetLeft;
                    draggableProvided.draggableProps.style.top = draggableProvided.draggableProps.style.offsetTop;
                }
                return (<div
                    className='video-card bg-white border-2 p-3 rounded flex justify-between items-center mb-3'
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                >
                    <p className='text-sm pr-4 sm:text-base'>{title}</p>
                    <div className='flex gap-4'>
                        <button className='bg-green-400 py-2 px-5 rounded' onClick={() => {
                            dispatch(openVideoModal())
                            dispatch(addCurrentPlaying({ id, title, video_url }));
                        }}>play</button>
                        <div className='flex flex-col justify-between'>

                            {/* edit video card button */}
                            <button onClick={() => {
                                dispatch(setTitle(title));
                                dispatch(setVideoCategory(category));
                                dispatch(setVideoUrl(video_url));
                                dispatch(setId(id));
                                dispatch(openEditVideoModal());
                            }}>
                                <AiOutlineEdit />
                            </button>

                            {/* delete video card button */}
                            <button onClick={() => dispatch(removeCard({ category, id }))}>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                </div>)
            }}
        </Draggable>
    )
}

export default Card