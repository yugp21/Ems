import React from 'react'

const NewTask = ({ data }) => {
    return (
        <>
            <div className='h-full flex-shrink-0 w-[300px] p-5 bg-[#95f977] rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-8'>
                    <button className='bg-blue-500 rounded-md py-1 px-3 text-xs'>Accept Task</button>
                </div>
            </div>
        </>
    )
}

export default NewTask