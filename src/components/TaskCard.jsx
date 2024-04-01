import React from 'react'
import { HiDotsVertical } from "react-icons/hi";

const TaskCard = (props) => {
    return (
        <div className="taskCard bg-gray-200 mb-4 md:mb-0 md:my-4 p-5 rounded-lg">
            <div className="taskTitle flex justify-between">
                <h3 className='font-semibold'>{props.tasktitle}</h3>
                <div className="kebab bg-sky-700 p-1 rounded-sm text-sm text-white">P0</div>
            </div>

            <div className="taskDesc py-2 leading-tight text-xs ">
                {props.taskdesc}
            </div>
            <div className="assignPerson flex justify-between items-center font-semibold py-4">
                <h3>@{props.assignee}</h3>
                <div className="kebab bg-sky-700 p-1 rounded-sm"><HiDotsVertical style={{ color: 'white' }} /></div>
            </div>
            <div className="btn">
                <button className='bg-sky-700 text-white text-sm md:px-10 px-12 py-1 rounded-md'>{props.button}</button>
            </div>
        </div>
    )
}

export default TaskCard
