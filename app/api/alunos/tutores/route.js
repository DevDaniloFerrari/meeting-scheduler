import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([100, 200, 300, 400]);
}
