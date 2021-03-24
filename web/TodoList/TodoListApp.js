import {TodoListContainer, AddTodoContainer} from './TodoListContainers'
//creating todolistapp
const TodoListApp = () =>
    <div>
        <div className="todo-header">to do list</div>
        <AddTodoContainer />
        <TodoListContainer />
    </div>

export default TodoListApp
