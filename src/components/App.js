import React from 'react'
import CreateForm from './CreateForm';
import History from './History';
import Buckets from './Buckets';
import VideoModal from './VideoModal';
import EditVideoModal from './EditVideoModal';
import EditCategoryModal from './EditCategoryModal';
import { useSelector } from 'react-redux';

function App() {
  const { isVideoModalOpen } = useSelector((store) => store.videoModal);
  const { isEditVideoModalOpen } = useSelector((store) => store.editVideoModal);
  const { isEditCategoryModalOpen } = useSelector((store) => store.editCategoryModal);
  // console.log(isVideoModalOpen);

  return (
    <>
      
      {isEditVideoModalOpen && <EditVideoModal />}
      {isEditCategoryModalOpen && <EditCategoryModal />}
      {isVideoModalOpen && <VideoModal />}
      <div className={`p-5 bg-white h-screen ${isVideoModalOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
        <h1 className='main-heading text-5xl font-semibold ml-7 mb-5 py-5'>Video Library</h1>
        <div className='flex flex-col w-full xl:flex-row'>
          <div className='xl:w-2/3'>
            <CreateForm></CreateForm>
          </div>
          <div className='xl:w-1/3'>
            <History></History>
          </div>
        </div>
        <Buckets></Buckets>
      </div>
    </>
  );
}

export default App;
