import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
    return NextResponse.json([
        {
            "id":1,
            "name":"Thanuja Fernando"
        },
        {
            "id":2,
            "name":"Bishen Sathsara"
        }
    ])
}