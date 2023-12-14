import React from 'react'
import {FaRegThumbsUp, FaRegTrashAlt} from "react-icons/fa"

function Tasks({list, setList}) {

  function deleteItem(index) {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  function checkItem(index) {
    let newList = [...list]
    if(newList[index].isCompleted){
      newList[index].isCompleted = false
    }else{
      newList[index].isCompleted = true
    }
    setList(newList)
  }

  let ffalse = 'flex justify-between p-4 items-center rounded bg-transparent'
  let ttrue = 'flex justify-between p-4 items-center rounded bg-zinc-600'

  return (
		<div className='w-1/2 mx-auto'>
			<ul className='unstyled'>
				{list.map((item, index) => (
					<li key={index} className={item.isCompleted ? ttrue : ffalse}>
						<span className='text-3xl'>{item.text}</span>

						<div className='flex gap-3'>
							<FaRegThumbsUp onClick={() => checkItem(index)} size={35} className='cursor-pointer hover:text-green-600' />
							<FaRegTrashAlt onClick={() => deleteItem(index)} size={35} className='cursor-pointer hover:text-red-600' />
						</div>

					</li>
				))}
			</ul>
		</div>
	)
}

export default Tasks