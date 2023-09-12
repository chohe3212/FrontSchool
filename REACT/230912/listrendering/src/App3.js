import React, { useState } from "react";

function UserItem({ user }) {
  const [showInfo, setshowInfo] = useState(false);

  return (
    <li onClick={() => setshowInfo(!showInfo)}>
      {user.name}
      {showInfo ? (
        <div>
          <div>email : {user.email}</div>
          <div>job : {user.job}</div>
        </div>
      ) : null}
    </li>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.id} user={item} />;
      })}
    </ul>
  );
}

function App3() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];
}
export default App3;
