import React, { useState } from "react";
import useTodo from "../hooks/useTodo";

function TodoEditForm(props) {
  const { job, onDone } = props;
  const { hdlEdit } = useTodo();
  const [input, setInput] = useState(job.todo);
  const [check, setCheck] = useState(job.completed);

  const hdlSubmit = (e) => {
    e.preventDefault();
    let updatedJob = { todo: input, completed: check };
    hdlEdit(job.id, updatedJob);
    onDone();
  };

  return (
    <form className='todo-edit-form' onSubmit={hdlSubmit}>
      <label>
        <input
          type="checkbox"
          checked={check}
          onChange={() => setCheck((prev) => !prev)}
        />
        Completed
      </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Task description"
      />
      <div className="button-group">
        <button type="submit">Save</button>
        <button type="button" onClick={onDone}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TodoEditForm;
