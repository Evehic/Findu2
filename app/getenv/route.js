import { NextResponse } from 'next/server';

export async function GET() {
 // var myenv= await process.env.MY
  var myenv = "Hardcoded"
 // import dotenv from 'dotenv';
  return NextResponse.json({ msg: myenv});
 }
