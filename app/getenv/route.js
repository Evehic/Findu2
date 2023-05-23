import { NextResponse } from 'next/server';
import dotenv from '@next/env';

export async function GET() {
  var myenv= process.env.MY
 // var myenv = "Hardcoded"
  return NextResponse.json({ msg: myenv});
 }
