import React from 'react'
import { useGlobalContext } from './context'
import Form from './Form'

function FormPage() {
    const {isEditing} = useGlobalContext()

    return (
        <div>

            <h2 className='form-head'>{isEditing.state ? 'Edit your task' : 'Add new task'}</h2>
            <hr />

            <Form/>
            
        </div>
    )
}

export default FormPage
