import React from 'react'
import { useSelector } from 'react-redux'
import Card from './VideoCard';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { changeCategory, removeBucket } from '../features/Videos/videosSlice';
import { useDispatch } from 'react-redux';
import { openEditCategoryModal } from '../features/Modal/editCategoryModalSlice';
import { setNewCategoryName, setPrevCategoryName } from '../features/Form/updateCategorySlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  left: 0;

`;

const Buckets = () => {
  const { categories } = useSelector((store) => store.categories);
  // const { newCategoryName, prevCategoryName } = useSelector((store) => store.updateCategory);
  const dispatch = useDispatch();

  // onDrag Handler
  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log(result);

    //if a user tries to drop in an unknown destination
    if (!destination) return;

    //if a user drags and drops back within same column
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    //if a user drops in different column
    const sourceCategory = source.droppableId;
    const videoSourceIndex = source.index;
    const destinationCategory = destination.droppableId;
    const videoDestinationIndex = destination.index;

    dispatch(changeCategory({ sourceCategory, videoSourceIndex, destinationCategory, videoDestinationIndex }));

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='bg-white p-2 mx-2 my-8 border-2 border-blue-500 rounded-xl '>
        <div className='pt-10 px-3 pb-3 xl:flex xl:gap-5 overflow-scroll xl:flex-row xl:px-10 md:px-8'>
          {
            categories.map((current, index) => {
              const { categoryId, categoryName, videos } = current;

              return (
                <div key={categoryId} className='bg-white drop-shadow-lg my-12 mb-16 rounded md:min-w-[400px] xl:w-[450px] xl:mb-12 self-start'>

                  {/*---- category title div ----*/}

                  <div className='px-5 p-2 bg-blue-500 text-white -top-10 left-0 rounded-t flex gap-4 items-center justify-between'>

                    {/* category title */}
                    <div className='flex gap-1 items-center'>
                      <h3 className='font-medium'>{categoryName}</h3>
                      <span className='rounded-full  w-5 h-5 p-1 text-white text-sm flex justify-center items-center'>{videos.length}</span>
                    </div>

                    {/* category edit & delete buttons */}
                    <div className='flex gap-3'>
                      <button onClick={() => {
                        dispatch(setPrevCategoryName(categoryName));
                        dispatch(setNewCategoryName(categoryName));
                        dispatch(openEditCategoryModal());
                      }}><AiOutlineEdit /></button>
                      <button onClick={() => {
                        dispatch(removeBucket(categoryName));
                      }}><AiOutlineDelete /></button>
                    </div>

                  </div>

                  {/*---- video cards div ----*/}
                  <Droppable droppableId={categoryId}>

                    {(droppableProvided, droppableSnapshot) => {
                      return (<div
                        className='min-h-[50px] p-3 pb-1'
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                      >
                        {
                          videos.map((video, index) => {
                            const { id } = video;
                            return (
                              <Card key={id} category={categoryName} video={video} index={index} />
                            )
                          })
                        }
                        {droppableProvided.placeholder}
                      </div>)
                    }}

                  </Droppable>

                </div>
              )

            })
          }
        </div>
      </div>
    </DragDropContext>
  )
}

export default Buckets