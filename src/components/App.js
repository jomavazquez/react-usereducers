import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '../helpers/todoReducer';
import { TodoList } from './TodoList';
import { TodoForm } from '../components/TodoForm';

export const App = () => {

  // ----------------------
  // Initialization
  // ----------------------
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [ todos, dispatch ] = useReducer( todoReducer, [], init );

  useEffect( () =>{
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [todos]);
  
  // ----------------------
  // Actions for useReducer
  // ----------------------
  const handleDelete = ( todoId ) => {

    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch( action );

  }

  const handleToggle = ( todoId ) => {
    
    dispatch({
      type: 'toggle',
      payload: todoId
    });

  }

  const handleAddTodo = ( newTodo ) => {

    dispatch({
      type: 'add',
      payload: newTodo
    });

  }

  return (
    <div>
      <h1>ToDo List <small>({ todos.length })</small></h1>
      <hr />
      <p>
        Using reducers, localStorage and custom Hooks. Just add a task, and <strong>click on one of them if you've completed it!</strong>
      </p>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <TodoList 
            todos={ todos }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
          />
        </div>
        <div className="col-md-5">
          <TodoForm
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </div>
  )
}