import Image from "next/image";

export default function CardapioPage(){

    const produtos = [
        {
            id:1,
            nome:"Hambúrguer Artesanal",
            descricao:"Pão brioche, carne bovina artesanal, queijo cheddar, alface e tomate",
            preco:29.90,
            imagem:"/hamburguer.png"
        },
        {
            id:2,
            nome:"Pizza de calabresa",
            descricao:"Massa de trigo, molho de tomate, queijo mussarela, oregano e calabresa",
            preco:39.99,
            imagem:"/pizzaCalabresa.png"
        },
        {
            id:3,
            nome:"Coca-Cola 2L",
            preco:16.00,
            imagem:"/coca.png"
        }
    ]

    return(
        <main className="p-8 bg-amber-50 h-screen">
            <h1 className="mb-6 text-3xl font-bold text-black">Cardapio</h1>

            <div className="grid grid-cols-3 gap-6">
                {
                    produtos.map((produto)=>(
                        <div key={produto.id}>
                            <Image
                            src={produto.imagem}
                            alt={produto.nome}
                            width={400}
                            height={250}
                            className="h-80 w-full rounded-2xl object-cover border-3 border-black"
                            />

                            <h2 className="mt-3 text-xl font-semibold text-black">
                                {produto.nome}
                            </h2>

                            <p className="mt-2 text-lg text-green-600">
                                R$ {produto.preco.toFixed(2)}
                            </p>

                            <button className="mt-4 w-full h-10 rounded bg-green-500 text-white cursor-pointer hover:bg-green-600">
                                Fazer pedido
                            </button>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}