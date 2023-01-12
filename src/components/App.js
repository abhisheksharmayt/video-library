import React from 'react'
import CreateForm from './CreateForm';
import History from './History';
import Buckets from './Buckets';
import VideoModal from './VideoModal';
import { useSelector } from 'react-redux';

function App() {
  const { isVideoModalOpen } = useSelector((store) => store.videoModal);
  console.log(isVideoModalOpen);

  return (
    <>
      {isVideoModalOpen && <VideoModal />}
      <div className={`relative p-5 bg-white h-screen ${isVideoModalOpen ? 'overflow-hidden' : ''}`}>
        <h1 className='text-3xl font-semibold ml-7 mb-5'>Video Library</h1>
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
