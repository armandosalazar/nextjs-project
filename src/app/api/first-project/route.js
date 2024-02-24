import { NextResponse } from "next/server";

export function POST(request) {
  console.log(JSON.stringify(request, null, 2));

  return NextResponse.json({
    message: "ok",
  });
}
