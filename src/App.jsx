import { useState } from 'react'
import Pending from './components/Pending';
import Progress from './components/Progress';
import Completed from './components/Completed';
import Deployed from './components/Deployed';
import Deffered from './components/Deffered';

import { BsPersonCircle } from "react-icons/bs";
import './App.css'

function App() {

  
  return (
    <>
      <div className="bg">
        {/* Navbar */}
        <nav className='md:mx-28 mx-10 md:my-12 my-6 flex justify-between items-center'>
          <h1 className='font-bold text-3xl'>Task Board</h1>
          <div className="logo"><BsPersonCircle style={{ fontSize: '3rem' }} /></div>
        </nav>


        


        {/* Main container */}
        <div className="container md:mx-10 mx-5 my-10 outline outline-white outline-4 rounded-xl" style={{ width: '-webkit-fill-available' }}>
          <div className="form  md:px-10 px-5 py-5 flex flex-row justify-between">
            {/* Filter form */}
            <div className="filterForm ">
              <div className="filter md:flex pb-5">

                <label htmlFor="FilterBy" className='md:mx-2 text-xl font-semibold'>Filter By:</label>
                <div className="input flex flex-row mt-2 md:mt-0">

                  <input type="text" id='FilterBy' placeholder='Assignee' className='md:mx-2 md:px-4 px-2  py-1 rounded-md w-[30%]' />

                  <select name="Priority" id="Priority" className='mx-2 px-4 py-1 rounded-md'>
                    <option value="priority" disabled selected hidden>Priority</option>
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                  </select>

                  <input type="date" name="date" id="date" className='mx-2 px-4 py-1 rounded-md'/>
                </div>


              </div>
              <div className="sort hidden md:block">
                <label htmlFor="SortBy" className='mx-3 text-xl font-semibold'>Sort By:</label>
                <select name="Priority" id="Priority" className='mx-2 px-4 py-1 rounded-md'>
                  <option value="priority" disabled selected hidden>Priority</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </div>
            </div>
            {/* Add a new task button (Shows on Laptop)*/}
            <div className="addNewTask hidden md:block">
              <button className="btn bg-sky-700 text-white text-lg px-14 py-1 rounded-md ">Add New Task</button>
            </div>

          </div>



          {/* Task Cards */}
          <div className="cards flex flex-row overflow-x-auto md:overflow-x-hidden md:px-4 px-1">

            <Pending title="Pending"/>
            <Progress title="In Progress"/>
            <Completed title="Completed"/>
            <Deployed title="Deployed"/>
            <Deffered title="Deffered"/>

          </div>
            {/* Add a new task button (Shows on Mobile)*/}
          <div className="addNewTask md:hidden flex justify-center p-5 ">
            <button className='bg-sky-700 text-white text-lg px-24 py-1 rounded-md'>Add New Task</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
