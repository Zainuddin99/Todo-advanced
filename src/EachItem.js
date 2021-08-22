import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'

function EachItem({index, item}) {
    const {makeTaskDone} = useGlobalContext()

    return (
        <li>

            <div>{index+1}</div>

            <div>{item.name}</div>

            <div><button className={`btn-done ${item.done ? 'true' : ''}`}>{item.done ? 'Done' : 'Undone'}</button></div>

                <div className="icons">
                    <Link to={`/edit-task/${index}`}><button className={`btn-edit`} disabled={item.done ? true : false}>Edit</button></Link>
                    {!item.done && <button className='btn-done-click' onClick={()=>makeTaskDone(index)}>Done</button>}
                </div>

        </li>
    )
}

export default EachItem
