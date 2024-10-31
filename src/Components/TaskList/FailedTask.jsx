import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-[#79bdf8] rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-5'>
                <button className='w-full bg-red-600 rounded-md py-2'>Failed!</button>
            </div>
        </div>
    )
}

export default FailedTask