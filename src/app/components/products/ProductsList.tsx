import { prismaClient } from '@/lib/prisma'

export async function ProductsList() {
  const products = await prismaClient.product.findMany()

  return (
    <div className="grid grid-cols-3 gap-4 my-4 p-6 rounded-lg border-2 border-solid border-blue-500 border-opacity-15">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      ))}
    </div>
  )
}
