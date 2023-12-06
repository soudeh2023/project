import React from "react";
import { Link } from "react-router-dom";

function AnmeldungSeite({ users }) {
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnmeldungSeite;
