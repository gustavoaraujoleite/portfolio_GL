import { NextResponse } from "next/server";
import postMessage from "../service/postMessage";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await postMessage(data);
    //TODO - Criar log

    return new NextResponse(
      JSON.stringify({
        status: response.status,
        message: response.message,
      }),
      { status: response.status }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: 401,
        message: "Problemas com o servidor. Tente novamente mais tarde.",
      }),
      { status: 401 }
    );
  }
}
