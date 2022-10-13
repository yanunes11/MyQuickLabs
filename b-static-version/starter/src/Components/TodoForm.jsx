import React, { useState } from 'react';
import DateCreated from './utils/DateCreated';

const TodoForm = () => {
    const [todoDescription, setTodoDescription] = useState(``);
    const [todoDateCreated, setTodoDateCreated] = useState(null);
    const [todoCompleted, setTodoCompleted] = useState(false);
    return (
        <form>
            <div className="form-group">
                <label htmlFor="todoDescription">Description:&nbsp;</label>
                <input
                    type="text"
                    name="todoDescription"
                    placeholder="Todo description"
                    className="form-control"
                    value={todoDescription}
                    onChange={event =>
                    setTodoDescription(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="todoDateCreated">
                    Created on:&nbsp;
                </label>
                <DateCreated
                    updateDateCreated={dateCreated =>
                    setTodoDateCreated(dateCreated)
                } />
            </div>
            <div className="form-group">
                <label htmlFor="todoCompleted">Completed:&nbsp;</label>
                <input
                type="checkbox"
                name="todoCompleted"
                    checked={todoCompleted}
                    onChange={event =>
                    setTodoCompleted(event.target.checked)}
                />
            </div>
            <div className="form-group">
                <input
                type="submit"
                value="Submit"
                className={'btn ${!todoDescription ? `btn-danger` : `btn-primary'}
                disabled={!todoDescription}
            /> </div>
        </form> 
        );
};
export default TodoForm;