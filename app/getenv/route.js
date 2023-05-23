import { NextResponse } from 'next/server';

export async function GET() {
  var myenv= process.env.MY
  return NextResponse.json({ msg: myenv});
 }
