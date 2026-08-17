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
        
        <input type="text"
        placeholder="Digite o nome" 
        className="text-black rounded-2xl border-2 m-1 w-3xs h-10 p-2" />

        <input type="text"
        placeholder="Digite a descrição."
        className="text-black rounded-2xl border-2 m-1 w-3xs h-10 p-2" />

        <input type="number"
        placeholder="Digite o preço"
        className="text-black rounded-2xl border-2 m-1 w-3xs h-10 p-2" />

        <input type="text"
        placeholder="Digite a categoria"
        className="text-black rounded-2xl border-2 m-1 w-3xs h-10 p-2" />

        <button onClick={cadastrar} className="w-full h-10 bg-green-600 rounded-2xl cursor-pointer hover:bg-green-700">
        Cadastrar
        </button>

      </div>
    </main>
    
  );
}