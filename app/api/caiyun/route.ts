
import { NextResponse } from 'next/server'

export async function GET() {
  // const data = await axios.post('https://www.dominio.com/xxx', { param: req.body.param }, headers)
  const res = await fetch(
    "https://api.caiyunapp.com/v2.6/TAkhjf8d1nlSlspN/120.1552,30.2741/realtime"
  );
  const data = await res.json()

  return NextResponse.json({ data })

}