import TaskList from './Components/TaskList'
import AddTask from './Components/AddTask'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from './Services/Api'
import { useEffect } from 'react';
import { setTodo } from './Store/Slices/TodoSlice'

function App() {
  const todos = useSelector(state => state.todos.list);
  const dispatch = useDispatch()
  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    let response = await getTodos();
    dispatch(setTodo(response.data.data))
  }

  return (
    <div className="md:container md:mx-auto h-screen flex items-center justify-center font-vazir">
      <div className="w-[35%] bg-blue-600 rounded-md shadow-lg shadow-blue-500/50 p-4 space-y-5">
        <h5 className="text-white text-3xl mb-5">لیست کار های من</h5>
        <hr />
        <div className='max-h-80 overflow-y-scroll space-y-2'>
          {
            todos.length ? todos.map(todo => <TaskList key={todo.id} todo={todo} />)
              : <h5 className="text-white">شما در حال حاضر تسکی ندارید</h5>
          }
        </div>
        <hr />
        <div className="mx-auto w-[95%] mt-3">
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default App;
