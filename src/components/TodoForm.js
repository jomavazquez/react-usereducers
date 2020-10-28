// -----------------------------------------------------------
// React libreries
// -----------------------------------------------------------
import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoForm = ( { handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo );
        reset();
    }

    return (
        <div className="bg-gray p-3">
            <h4 className="mt-2 mb-3">Add a task</h4>
            <form onClick={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter whatever you want ..."
                    autoComplete="off"
                    className="form-control mb-2"
                    onChange={ handleInputChange }
                    value={ description }
                >
                </input>
                <button 
                    type="submit"
                    className="btn btn-primary mt-1 btn-block"
                >
                    Send
                </button>
            </form>
        </div>
    )
}
