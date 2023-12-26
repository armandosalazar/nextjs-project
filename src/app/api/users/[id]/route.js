import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  console.log(searchParams.get("name"));

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return NextResponse.json(data);
}
