import { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Random Users</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;