import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false});

        const data = userData;

        data.forEach(function(elem) {
            if(asignTo == elem.firstName) {
                elem.tasks.push(newTask);
                elem.taskCounts.newTask = elem.taskCounts.newTask+1;
            }
        })

        setUserData(data)
        console.log(data)

        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setNewTask('');
        setTaskDescription('');
    }

    return (
        <>
            <div className='p-5 bg-[#1c1c1c] mt-6 rounded'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div className='text-md text-gray-300 mb-4'>
                            <h3>Task Title</h3>
                            <input value={taskTitle} onChange={(e) => {setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded border border-white mt-2 outline-none bg-transparent' type="text" placeholder='Make a ui design' />
                        </div>
                        <div className='text-md text-gray-300 mb-4'>
                            <h3>Date</h3>
                            <input value={taskDate} onChange={(e) => {setTaskDate(e.target.value)}} className='text-sm py-1 text-white px-2 w-4/5 rounded border border-white mt-2 outline-none bg-transparent' type="date" />
                        </div>
                        <div className='text-md text-gray-300 mb-4'>
                            <h3>Asign to</h3>
                            <input value={asignTo} onChange={(e) => {setAsignTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded border border-white mt-2 outline-none bg-transparent' type="text" placeholder='Employee Name' />
                        </div>
                        <div className='text-sm text-gray-300 mb-4'>
                            <h3>Category</h3>
                            <input value={category} onChange={(e) => {setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded border border-white mt-2 outline-none bg-transparent' type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-md bg-[#1c1c1c] text-gray-300 mb-4'>Description</h3>
                        <textarea className='w-full bg-[#1c1c1c] border border-green-500 h-50 text-sm py-2 px-4 rounded outline-none' name="" id="" cols="30" rows="10"></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateTask