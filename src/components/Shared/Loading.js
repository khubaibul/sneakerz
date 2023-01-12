import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <h2 className='text-5xl text-pink-600 font-bold'>L</h2>
            <div className='w-10 h-10 rounded-full border-4 border-pink-700 border-dotted animate-spin'></div>
            <h2 className='text-5xl text-pink-600 font-bold'>A</h2>
            <h2 className='text-5xl text-pink-600 font-bold'>D</h2>
            <h2 className='text-5xl text-pink-600 font-bold'>i</h2>
            <h2 className='text-5xl text-pink-600 font-bold'>n</h2>
            <h2 className='text-5xl text-pink-600 font-bold'>g</h2>
        </div>
    );
};

export default Loading;