import { NextResponse } from "next/server";

function numeroAleatorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min) + min);
}

export async function GET() {
  return NextResponse.json([
    { id: numeroAleatorio(), nome: "Caneta", preco: 5.6 },
    { id: numeroAleatorio(), nome: "Caderno", preco: 15.6 },
    { id: numeroAleatorio(), nome: "Borracha", preco: 7.3 },
    { id: numeroAleatorio(), nome: "Tesoura", preco: 21.55 },
  ]);
}
