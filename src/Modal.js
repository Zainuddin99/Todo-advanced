import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

function Modal() {
    const {modalContent, setModalContent} = useGlobalContext()

    //removing modal after message gets displayed
    useEffect(()=>{
        const timeOut = setTimeout(()=>setModalContent(''), 800)

        return ()=>clearTimeout(timeOut)
    })

    return (

        <div className="modal">
            {modalContent}
        </div>

    )
}

export default Modal
