import { NextRequest } from "next/server";

export async function GET(req: NextRequest){
    // Example URL : http://localhost:3000/api/user?testParam=123TestParam
    // Curl TEST : curl -X GET "http://localhost:3000/api/user?testParam=123TestParam" -H  "accept: application/json"
    const { searchParams } = new URL(req.url)
    const mySearchParams = searchParams.get("testParam")
    // console.log("mySearchParams", mySearchParams);
    

    return new Response (JSON.stringify({message: "Log: GET Test"}));
}

export async function POST(req: NextRequest){

    // Example URL : http://localhost:3000/api/user?testParam=123TestParam
    // Curl TEST : curl -X POST "http://localhost:3000/api/user?testParam=123TestParam" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"test-body\":\"5566\"}"
    const body = await req.json();
    // console.log("body", body);
    // console.log("Log: POST Test");

    return new Response("OK")
}