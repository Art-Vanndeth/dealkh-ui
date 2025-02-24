import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;
  // console.log('body', body);
  // console.log('Env', process.env.DEALKH_API_URL);
  const response = await fetch(`${process.env.DEALKH_API_URL}auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  // console.log('Response Login:', response);
  if (!response.ok) {
    return NextResponse.json(
      {
        message: 'Fail to login',
      },
      {
        status: response.status,
      }
    );
  }

  const data = await response.json();
  // console.log('Data Login:', data);
  // const user = data?.user || null;
  const accessToken = data?.payload?.accessToken || null;
  const refreshToken = data?.payload?.refreshToken || null;

  const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || 'refresh';
  const serialized = serialize(cookieName, refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  });

  return NextResponse.json(
    {
      // user: user,
      accessToken: accessToken,
    },
    {
      status: 200,
      headers: {
        'Set-Cookie': serialized,
      },
    }
  );
}
