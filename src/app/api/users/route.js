import { NextResponse } from "next/server";

export async function GET() {
  // extract params from the request
  // query data from database
  // commit to other services
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return NextResponse.json(data);
}

export async function POST(request) {
  console.log(await request.json()); // request body

  return NextResponse.json({
    message: "Hello from the API!",
    method: "POST",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Hello from the API!",
    method: "PUT",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Hello from the API!",
    method: "DELETE",
  });
}
