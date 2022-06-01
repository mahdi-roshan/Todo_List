import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../Store/Slices/TodoSlice';

export default function EditTask({ data, setEdit }) {
    const dispatch = useDispatch();
    const [input, setInput] = useState(data.text)
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const handleTodo = () => {
        dispatch(editTodo({ id: data.id, text: input }))
        setEdit(false)
    }
    const closeEdit = () => {
        setEdit(false)
    }

    return (
        <div className="space-y-3">
            <div className="bg-blue-800 w-[95%] p-3 mx-auto rounded hover:scale-105 transition">
                <div className="">
                    <input value={input} onChange={inputHandler} className="h-9 w-full p-2 rounded outline-none" />
                </div>
                <div className="flex mt-2">
                    <svg onClick={handleTodo} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <svg onClick={closeEdit} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    );
}