import Image from "next/image"

export default function SobrePage(){
    

    
    return(

        <main className="p-8 bg-amber-50 h-screen">
            <div className="border-2 w-4xl mx-auto rounded-2xl border-black p-6 bg-white shadow-2xl">
                <div className="mx-auto flex justify-center items-center">
                    <h1 className="mb-8 font-bold text-3xl text-black">Sobre Nós</h1>
                </div>
                
                <div className="w-2xl flex items-center justify-center mx-auto text-2xl">
                    <p className="text-black text-justify">
                        Somos um restaurante familiar, localizado em [...], na cidade de Petrolina.
                        Servimos diversos pratos típicos, possuindo o melhor sabor da cidade.
                        Nos contate pelo número: 87 9XXXX-0XXX.
                        Venha visitar nosso restaurante!
                    </p>
                </div>

                <div className="flex mx-auto justify-center mt-20">
                    <Image
                    src="/restaurante.png"
                    alt="Restaurante"
                    width={120}
                    height={120}
                    className="w-40 h-40"
                    />
                </div>
            </div>
        </main>
    )
}