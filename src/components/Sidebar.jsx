import React, { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className='relative'>
            {/* Mobile Toggle Button */}
            <button
                className='lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-100 p-4 border-r overflow-y-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:w-64`}>
                {/* Home */}
                <div className='bg-[#E9F2A2] p-2 font-bold rounded-lg mb-2'>
                    <button className='w-full text-left hover:bg-green-400 p-2 rounded-lg cursor-pointer' onClick={() => handleNavigation('/')}>Home</button>
                </div>

                {/* Searching */}
                <div className='p-2 bg-[#E9F2A2] rounded-lg mb-2'>
                    <h1 className='font-bold mb-2'>
                        <button className='w-full text-left hover:bg-green-400 p-2 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Searching')}>Searching</button>
                    </h1>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/LinearSearch')}>Linear Search</button>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/BinarySearch')}>Binary Search</button>
                </div>

                {/* Sorting */}
                <div className='p-2 bg-[#E9F2A2] rounded-lg mb-2'>
                    <h1 className='font-bold mb-2'>
                        <button className='w-full text-left hover:bg-green-400 p-2 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Sorting')}>Sorting Algorithm</button>
                    </h1>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/BubbleSort')}>Bubble Sort</button>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/MergeSort')}>Merge Sort</button>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/QuickSort')}>Quick Sort</button>
                </div>

                {/* Graph Algorithms */}
                <div className='p-2 bg-[#E9F2A2] rounded-lg mb-2'>
                    <h1 className='font-bold mb-2'>
                        <button className='w-full text-left hover:bg-green-400 p-2 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Graph')}>Graph</button>
                    </h1>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Bfs')}>Breadth First Search</button>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Dfs')}>Depth First Search</button>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Dijkstra')}>Dijkstra</button>
                </div>

                {/* Tree */}
                <div className='p-2 bg-[#E9F2A2] rounded-lg'>
                    <h1 className='font-bold mb-2'>
                        <button className='w-full text-left hover:bg-green-400 p-2 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Tree')}>Tree</button>
                    </h1>
                    <button className='w-full text-left p-2 hover:bg-green-400 rounded-lg cursor-pointer' onClick={() => handleNavigation('/Bst')}>Binary Search Tree</button>
                </div>
            </div>
        </div>
    );
}
