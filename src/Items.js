import React from 'react'
import { useGlobalContext } from './context'
import EachItem from './EachItem'

function Items() {
    const {items} = useGlobalContext()

    //checking if items length is 0
    if(items.length === 0) return <h2 className="no-item">No Tasks Added</h2>

    return (
        
        <ul className="items-container">
            <li className='head'>
                <div>#</div>
                <div>Task name</div>
                <div>Status</div>
                <div>Action</div>
            </li>

            <hr />

            {
                items.map((item, index) => <EachItem key={index} item={item} index={index}/>)
            }
        </ul>
    )
}

export default Items
