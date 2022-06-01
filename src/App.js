
function App() {
  return (
    <div className="md:container md:mx-auto h-screen flex items-center justify-center font-vazir">
      <div className="w-[35%] bg-blue-600 rounded-md shadow-lg shadow-blue-500/50 p-4 space-y-5">
        <h5 className="text-white text-3xl mb-5">لیست کار های من</h5>
        <hr />
        <div className="space-y-3">
          <div className="bg-blue-800 w-[95%] flex justify-between items-center p-3 mx-auto rounded hover:scale-105 transition">
            <div class="mt-2">
              <label class="inline-flex items-center">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-white font-light mr-2 line-through">این یک متن تستی است</p>
              </label>
            </div>
            {/* <p className="text-white font-light">این یک متن تستی است</p> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div className="bg-blue-800 w-[95%] flex justify-between items-center p-3 mx-auto rounded hover:scale-105 transition">
            <div class="mt-2">
              <label class="inline-flex items-center">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-white font-light mr-2 line-through">این یک متن تستی است</p>
              </label>
            </div>
            {/* <p className="text-white font-light">این یک متن تستی است</p> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
        <hr />
        <div className="mx-auto w-[95%] space-y-4 mt-3">
          <input className="h-14 w-full outline-none rounded-lg bg-blue-700 p-2 shadow-l shadow-blue-500/50 text-white" placeholder="افزودن تسک جدید" />
          <button className="w-full h-14 bg-gray-800 text-white flex justify-center rounded-lg items-center hover:bg-gray-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="mr-2">تسک جدید</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
