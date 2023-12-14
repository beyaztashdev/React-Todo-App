import React from 'react'
import {FaRegThumbsUp, FaRegTrashAlt} from "react-icons/fa"

function Tasks({list}) {
  let ffalse = 'flex justify-between p-4 items-center rounded bg-transparent'
  let ttrue = 'flex justify-between p-4 items-center rounded bg-zinc-600'

  return (
		<div className='w-1/2 mx-auto'>
			<ul className='unstyled'>
				{list.map((item, index) => (
					<li key={index} className={item.isCompleted ? ttrue : ffalse}>
						<span className='text-3xl'>{item.text}</span>

						<div className='flex gap-3'>
							<FaRegThumbsUp size={35} className='cursor-pointer hover:text-green-600' />
							<FaRegTrashAlt size={35} className='cursor-pointer hover:text-red-600' />
						</div>

					</li>
				))}
			</ul>
		</div>
	)
}

export default Tasks