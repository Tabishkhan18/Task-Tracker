import React from 'react'
import TaskCard from './TaskCard'

const Deployed = (props) => {
  return (
    <div className="card md:flex md:flex-col flex-none w-[21rem] md:w-[16rem] md:mx-3 mx-4 mb-5">
            <div className="taskType bg-blue-900 p-2 text-white text-lg font-semibold text-center rounded-t-xl"> 
                {props.title}
            </div>
            <div className="taskArea bg-white h-[28rem] md:px-4 p-4 md:p-0  rounded-b-xl">
                {/* Added tasks will shows here */}
                <TaskCard tasktitle="Task 5" taskdesc="Hello, this is the cards description. Just some random text" assignee="Pravin" button="Assign"/>
                <TaskCard tasktitle="Task 6" taskdesc="Hello, this is the cards description. Just some random text" assignee="John Doe" button="Assign"/>
            </div>
        </div>
  )
}

export default Deployed
