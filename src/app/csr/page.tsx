'use client';

import { useEffect, useState } from 'react';

export default function ClientSideRendering() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Client-Side Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
