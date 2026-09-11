"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
useRouter
import Swal from "sweetalert2"

export default function Login(){

    const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    async function entrar(){
        if(usuario === "admin" && senha === "123456"){
            localStorage.setItem("admin_logado","true")

            await Swal.fire({
                title: "Logado com sucesso!",
                icon:"success",
                confirmButtonText:"Ok"
            })

            router.push("/admin")
            return
        }else{
            await Swal.fire({
                title: "Falha ao logar!",
                icon:"error",
                confirmButtonText:"Ok"
            })
        }
    }

    return(
        <main className="flex min-h-screen items-center justify-center bg-amber-50">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
                <h1 className="mb-8 text-center font-bold text-black">Área administrativa</h1>
                
                <p className="mb-8 text-center text-black">Faça login para acessar o painel</p>

                <div>
                    <label className="text-black">Usuario</label>
                    <input type="text" 
                    placeholder="Digite o nome de usuário..."
                    value={usuario}
                    onChange={(e)=>setUsuario(e.target.value)}
                    className="w-full rounded-lg border p-3 outline-none text-black focus:ring-2 focus:ring-green-500 placeholder:text-gray-500"
                    />

                    <label className="text-black">Senha</label>
                    <input type="password" 
                    placeholder="Digite o nome de usuário..."
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)}
                    className="w-full rounded-lg border p-3 outline-none text-black focus:ring-2 focus:ring-green-500 placeholder:text-gray-500"
                    />

                    <button onClick={entrar}
                    className="w-full rounded-lg bg-green-500 hover:bg-green-600 text-white cursor-pointer
                    py-3 mt-6 font-semibold">
                        Entrar
                    </button>
                </div>
            </div>
        </main>
    )
}