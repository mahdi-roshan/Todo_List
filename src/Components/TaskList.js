export default function TaskList() {
    return (
        <div className="space-y-3">
            <div className="bg-blue-800 w-[95%] flex justify-between items-center p-3 mx-auto rounded hover:scale-105 transition">
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="h-4 w-4" />
                        <p className="text-white font-light mr-2 line-through">این یک متن تستی است</p>
                    </label>
                </div>
                {/* <p className="text-white font-light">این یک متن تستی است</p> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    );
}