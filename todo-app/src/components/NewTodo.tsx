import React, { useState } from "react";

interface Props {
  onAddTodo: (title: string) => void;
}

const NewTodo = ({ onAddTodo }: Props) => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        id="title"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-2">
        Add todo
      </button>
    </form>
  );
};

export default NewTodo;
