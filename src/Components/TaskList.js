import { useState } from 'react'
import { deleteTodo, doneTodo } from "../Store/Slices/TodoSlice";
import { useDispatch } from 'react-redux'
import { changeStatus, deleteFromServer } from '../Services/Api'
import EditTask from './EditTask'
export default function TaskList({ todo }) {
    
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    const deleteHandler = async () => {
        try {
            let response = await deleteFromServer(todo.id)
            dispatch(deleteTodo(todo.id))
        } catch (err) {
            alert(err)
        }

    }
    const doneHandler = async () => {
        try {
            let response = await changeStatus(todo.id, { ...todo, done: !todo.done });
            dispatch(doneTodo(todo.id))
        } catch (err) {
            alert(err)
        }
    }
    const editHandler = () => {
        setEdit(true);
    }

    return (
        <>
            {
                !edit ?
                    <div className="space-y-3">
                        <div className="bg-blue-800 w-[95%] flex justify-between items-center p-3 mx-auto rounded hover:scale-105 transition">
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input onChange={doneHandler} type="checkbox" className="h-4 w-4" checked={todo.done} />
                                    <p className={`text-white font-light  mr-2 ${todo.done ? 'line-through' : ''}`} >{todo.text}</p>
                                </label>
                            </div>
                            <div className="flex">
                                <svg onClick={editHandler} xmlns="http://www .w3.org/2000/svg" className="h-6 w-6 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <svg onClick={deleteHandler} id={todo.id} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    : <EditTask data={todo} setEdit={setEdit} />
            }
        </>
    );
}