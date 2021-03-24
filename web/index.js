import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import TodoListApp from './TodoList/TodoListApp'
import storeFactory from './store/index'
import styles from './styles/main.css'

import { fetchTodos } from './actions'

window.React = React

const _store = storeFactory()

//Get todos for initial list render
_store.dispatch(fetchTodos())

render(
  <Provider store={_store}>
      <TodoListApp />
  </Provider>,
  document.getElementById("react-container")
)
