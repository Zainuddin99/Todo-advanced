import { createContext, useContext, useEffect, useRef, useState } from "react";

const appContext = createContext()

const ContextProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [input, setInput] = useState('')
    const [isEditing, setIsEditing] = useState({state: false, index: null})
    const [modalContent, setModalContent] = useState('')
    const [isThereDoneTasks, setIsThereDoneTasks] = useState(false)
    
    const inputRef = useRef(null)


    //Taking items from localStorage during initial mounting
    useEffect(()=>{
        const storedItems = JSON.parse(localStorage.getItem('items'))
        setItems(storedItems)
    }, [])


    //Adding items to localStorage whenever items gets changed
    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(items))

        //Setting clear done button state
        const findDoneTask = items.find((item)=>item.done)
        if(findDoneTask){
            setIsThereDoneTasks(true)
        }else{
            setIsThereDoneTasks(false)
        }
    }, [items])


    const handleSubmit = (e) =>{

        e.preventDefault()

        //Code to handleSubmit during editing the item
        if(isEditing.state){

            if(input){

                const editedItems = items.map((item, index)=>{
                    if(isEditing.index === index){
                        return {name: input, done: false}
                    }

                    return item
                })

                setItems(editedItems)
                setIsEditing({state: false, index: null})
                setInput('')
                inputRef.current.blur()
                setModalContent('Item edited successfully')
                window.location.href = '/'

                }else{

                    setModalContent('Please enter something to edit')
            }
            
            return

        }

        //Code to add items to array
        if(input){

            setItems(prev => [...prev, {name: input, done: false}])
            setModalContent('Item added successfully')
            window.location.href = '/'

        }else{

            //Setting message if there is no input
            setModalContent('No input is given')

        }
        setInput('')
    }

    //seting isEditing to true to handleSubmit when the form is in editing mode
    const editItem = (itemIndex) =>{

        const editingItem = items.find((item, index)=>index === itemIndex)
        setInput(editingItem.name)
        setIsEditing({state: true, index: itemIndex})

    }

    //function to update task done state of item
    const makeTaskDone = (id) =>{

        const findItem = items.find((item, index)=>index === id)
        const changedToDoneItem = {...findItem, done: true}

        const updatedItems = items.map((item, index)=>{
            if(index === id){
                return changedToDoneItem
            }
            return item
        })

        setItems(updatedItems)
    }

    //function to clear all done tasks
    const clearDoneTasks = () =>{
        const filteredItems = items.filter(item=>!item.done)
        setItems(filteredItems)
    }

    return (<appContext.Provider value={{handleSubmit, items, input, setInput, editItem, 
                inputRef, isEditing, modalContent, setModalContent, makeTaskDone, isThereDoneTasks, clearDoneTasks, setIsEditing}}>

                {children}

            </appContext.Provider>
    )
}

//Custom hook to call useContext
const useGlobalContext = () =>{
    return useContext(appContext)
}

export {useGlobalContext, ContextProvider}