import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice'; // Redux action to update a todo

function UpdateTodo({ todo, setEditTodo }) {
  const [editInput, setEditInput] = useState(todo.text); // Initialize with current todo text
  const dispatch = useDispatch();

  useEffect(() => {
    setEditInput(todo.text); // Update input whenever the todo prop changes
  }, [todo]);

  const updateTodoHandler = (e) => {
    e.preventDefault();
    if (editInput && todo.id) {
      dispatch(updateTodo({ id: todo.id, text: editInput })); // Dispatch updateTodo action to Redux
      setEditTodo(null); // Close the update form after submitting
    }
  };

  return (
    <form onSubmit={updateTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Update Todo"
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Update Todo
      </button>
    </form>
  );
}

export default UpdateTodo;
