import { NextResponse } from 'next/server';

export async function GET() {
  var myenv= process.env.MY
  process.env['MY']=myenv+"$"
  //process.env['NODE_ENV'] = 'production';
 // var myenv = "Hardcoded"
  return NextResponse.json({ msg: myenv});
 }
