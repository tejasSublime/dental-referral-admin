import { NextResponse } from 'next/server';
import axios from 'axios';
export async function GET() {
    var res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return NextResponse.json(res.data);
}
