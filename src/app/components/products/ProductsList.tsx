import { prismaClient } from '@/lib/prisma'

type Product = {
  id: number
  name: string
  description: string | null
  price: number
  createdAt: Date
  updatedAt: Date
}

export async function ProductsList() {
  let products: Product[] = []
  let errorMessage = null

  try {
    products = await prismaClient.product.findMany()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    errorMessage = 'An error occurred while fetching products'
  }

  return (
    <div className="grid grid-cols-3 gap-4 my-4 p-6 rounded-lg border-2 border-solid border-blue-500 border-opacity-15">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {products &&
        products.map((product) => (
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
