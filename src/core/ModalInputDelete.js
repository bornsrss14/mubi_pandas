import React, { useState } from "react";

export const ModalInputDelete = () => {
  const [inputDelete, setInputDelete] = useState(""); // esto es un false
  const handleInput = (e) => {
    setInputDelete(e.target.value);
  };
  return (
    <div>
      <div>
        <h1>Are you sure you want to delete your account?</h1>
        <p>type "yes" to confirm or press another key to abort the process</p>
        <form onSubmit={"handle"} noValidate>
          <div>
            <label></label>
            <input
              id="permission"
              value={inputDelete}
              type="text"
              onChange={handleInput}
            ></input>
          </div>
          <div className="actions">
            <button type="button" className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
