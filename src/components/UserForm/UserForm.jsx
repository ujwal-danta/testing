/* eslint-disable react/prop-types */
import { useState } from "react";

function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onUserAdd({
      name,
      email,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}

export default UserForm;
