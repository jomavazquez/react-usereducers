// -----------------------------------------------------------
// React libreries
// -----------------------------------------------------------
import React from 'react'

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li key={ todo.id } className="list-group-item">
            <p 
                className={ `pointer ${ todo.done && 'complete' }`}
                onClick={ () => handleToggle( todo.id )}
            >
                {index + 1}. { todo.desc }
            </p>
            <button className="btn btn-danger" onClick={ () => handleDelete( todo.id ) }>
                Delete
            </button>
        </li>
    )
}
