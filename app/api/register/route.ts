import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  // console.log(body);
  const {
    email,
    password,
    confirmedPassword,
    firstName,
    lastName,
    username,
    gender,
    phoneNumber,
    dob,
    location,
  } = body;

  const response = await fetch(`${process.env.DEALKH_API_URL}auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      confirmedPassword,  
      firstName,
      lastName,
      username,
      gender,
      phoneNumber,
      dob,
      location,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message: 'Fail to register',
      },
      {
        status: response.status,
      }
    );
  }

  return NextResponse.json(
    {
      message: 'Register success',
    },
    {
      status: 200,
    }
  );
}
