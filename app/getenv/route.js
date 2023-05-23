import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

export async function GET() {
  var myenv= await process.env.MY
 // var myenv = "Hardcoded"
 // import dotenv from 'dotenv';
  return NextResponse.json({ msg: myenv});
 }
