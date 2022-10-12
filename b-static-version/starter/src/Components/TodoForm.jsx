import React from "react";
import DateCreated from './utils/DateCreated';
const TodoForm = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    Todo Description:&nbsp;
                    <input className="form-control" type="text" placeholder="Todo Description"></input>
                </div>
                <div className="form-group" >
                    Todo Created:&nbsp;
                    <DateCreated/>
                </div>
                <div className="form-group" >
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                </div>
            </form>
        </>
    );
};

export default TodoForm;