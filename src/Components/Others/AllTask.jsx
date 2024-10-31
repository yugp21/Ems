import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    return (
        <>
            <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
                <div className='mb-3 py-2 px-4 flex text-black bg-yellow-500 justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5 text-black'>Employee Name</h2>
                    <h3 className='text-lg font-medium w-1/5 text-black'>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5 text-black'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5 text-black'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5 text-black'>Failed</h5>
                </div>
                <div id='tasklist'>
                    {userData.map(function (elem, idx) {
                        return <div key={idx} className='border border-green-500 rounded-md mb-3 py-2 px-4 flex justify-between'>
                            <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default AllTask