import AddTodoForm from './AddTodoForm'
import ShowTodoList from './ShowTodoList'
import { connect } from 'react-redux'
import { addTodo, removeTodo, editTodo, toggleTodo } from '../actions'

export const AddTodoContainer = connect(
    null,
    dispatch => ({
        onAdd(title,durum) {
            dispatch(addTodo(title,durum))
        }
    })
)(AddTodoForm)

export const TodoListContainer = connect(
    state => ({
        todos: state.todos,
    }),
    dispatch => ({
        onRemove(id) {
            dispatch(removeTodo(id))
        },
        onEdit(id, title) {
            dispatch(editTodo(id, title))
        },
        onToggle(id, durum) {
            dispatch(toggleTodo(id, durum))
        }
    })
)(ShowTodoList)
