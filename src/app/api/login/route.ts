// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { signIn } from '@/lib/auth';
import { serialize } from 'cookie';

// Define the result types from signIn function
type AuthResult = { user: { id: string } } | { error: string };

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  // Perform the sign-in operation
  const result: AuthResult = await signIn(email, password);

  // Handle the error case
  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 401 });
  }

  // Safely access result.user
  const userId = result.user.id;

  // Create a cookie for the user (session management)
  const cookie = serialize('token', userId, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });

  // Send response with the cookie
  const response = NextResponse.json({ success: true });
  response.headers.set('Set-Cookie', cookie);

  return response;
}
