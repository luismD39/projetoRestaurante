"use client"
import Image from "next/image";


export default function Home() {




  async function cadastrar(e:any) {
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }

  return (
    <main className="min-h-screen flex items-center justify-center p6 bg-amber-50">
      <div className="max-w-lg w-2xl rounded-2xl border-2 text-center justify-center items-center border-amber-950 bg-white p-5 shadow-2xl grid grid-cols gap-1">

        <Image
        className="mx-auto"
        src="/restaurante.png"
        alt=""
        width={100}
        height={100}
        />
        

        <h1 className="text-2xl font-bold mb-3 text-black">Restaurante Legal</h1>

        <a href="cardapio"
        className="text-white p-3 mb-1 bg-green-600 rounded-2xl hover:bg-green-700">
        Fazer pedido</a>

        <a href="sobre"
        className="text-white p-3 mb-1 bg-green-600 rounded-2xl hover:bg-green-700">
        Sobre nós</a>

        <a href="login"
        className="text-white p-3 mb-1 bg-green-600 rounded-2xl hover:bg-green-700">
        Logar</a>

      </div>
    </main>
    
  );
}