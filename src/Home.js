import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import Items from './Items'

function Home() {
    const {isThereDoneTasks, clearDoneTasks} = useGlobalContext()

    return (
        <main>
            
            {isThereDoneTasks && <p className='clear' onClick={clearDoneTasks}>Clear all the done tasks</p>}

            <Link className='btn-add' to='/add-task'>ADD TASK</Link>

            <Items/>
            
        </main>
    )
}

export default Home
