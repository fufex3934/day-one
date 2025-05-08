// app/page.tsx
import React from 'react';

type User = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function ServerSideRendering() {
  const users = await fetchUsers();

  return (
    <main>
      <h1>Server-Side Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
