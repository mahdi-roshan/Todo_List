export default function AddTask() {
    return (
        <form className="space-y-3">
            <input className="h-14 w-full outline-none rounded-lg bg-blue-700 p-2 shadow-l shadow-blue-500/50 text-white" placeholder="افزودن تسک جدید" />
            <button className="w-full h-14 bg-gray-800 text-white flex justify-center rounded-lg items-center hover:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="mr-2">تسک جدید</span>
            </button>
        </form>
    )
}