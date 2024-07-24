import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}

export default App;
