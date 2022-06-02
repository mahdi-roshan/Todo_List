
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToServer } from '../Services/Api'
import { addTodo } from '../Store/Slices/TodoSlice'

export default function AddTask() {

    const dispatch = useDispatch()
    const [input, setInput] = useState("");
    const handleInput = e => setInput(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.length > 0) {
            try {
                let response = await addToServer({
                    text: input,
                    done: false
                })
                dispatch(addTodo(response.data.data))
                setInput("")
            } catch (err) {
                setInput("")
                alert(err)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input value={input} onChange={handleInput} className="h-14 w-full outline-none rounded-lg bg-blue-700 p-2 shadow-l shadow-blue-500/50 text-white" placeholder="افزودن تسک جدید" />
            <button type="submit" className="w-full h-14 bg-gray-800 text-white flex justify-center rounded-lg items-center hover:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="mr-2">تسک جدید</span>
            </button>
        </form>
    )
}