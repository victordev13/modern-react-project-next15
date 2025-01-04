'use server'

import { prismaClient } from '@/lib/prisma'

export async function createProduct(prevState, formData: FormData) {
  const name = formData.get('name')
  const price = Number(formData.get('price')?.toString())
  if (!name || !price) {
    return {
      message: 'Name and price are required',
    }
  }

  await prismaClient.product.create({
    data: {
      name: name?.toString(),
      price: Number(price),
    },
  })

  return {
    success: true,
  }
}
