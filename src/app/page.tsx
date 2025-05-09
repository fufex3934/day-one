'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main className="p-10">
      <h1 className="text-2xl">Welcome to the App</h1>

      {session ? (
        <>
          <p>Hello, {session.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={() => signIn("github")}>Login with GitHub</button>
        </>
      )}
    </main>
  );
}
