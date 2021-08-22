import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'

function Form() {
    const {handleSubmit, input, setInput, inputRef, isEditing, editItem, setIsEditing} = useGlobalContext()
    const {id} = useParams()

    //Reusing component for editing and adding mode
    useEffect(()=>{

        if(id){
            editItem(Number(id))
        }else{
            if(isEditing.state){
                setIsEditing({state: false, index: null})
                setInput('')
            }
        }
        
    }, [])

    return (

        <form onSubmit={handleSubmit} className={isEditing.state ? 'editing' : ''}>

            <input type="text" placeholder="Enter tasks to be added" value={input} onChange={(e)=>{setInput(e.target.value)}} ref={inputRef}/>
            <button type="submit">{isEditing.state ? 'EDIT' : 'ADD'}</button>
            <button className='btn-cancel' onClick={()=>window.location.href='/'}>Cancel</button>

        </form>

    )
}

export default Form
