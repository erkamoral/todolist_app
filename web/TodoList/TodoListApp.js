import {TodoListContainer, AddTodoContainer} from './TodoListContainers'

const TodoListApp = () =>
    <div>
        <div className="todo-header">to do list</div>
        <AddTodoContainer />
        <TodoListContainer />
    </div>

export default TodoListApp
