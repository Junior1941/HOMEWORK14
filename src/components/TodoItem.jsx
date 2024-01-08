import React from "react";
import useTodo from "../hooks/useTodo";

function TodoItem(props) {
  const { job, setEditId } = props;
  const { hdlDel } = useTodo();

  const onDelete = () => {
    if (window.confirm('Delete this item?')) {
      hdlDel(job.id);
    }
  };
  return (
    <div className={`todo-item ${job.completed ? 'job-done' : ''}`} style={{ margin: '10px', padding: '5px' }}>
      <p>{job.todo}</p>
      <div className="btn-group">
        <button className="btn--group2 btn--edit" onClick={() => setEditId(job.id)}>Edit</button>
        <button className="btn--group2 btn--delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
  
  
}

export default TodoItem;
