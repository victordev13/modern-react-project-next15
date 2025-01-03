import { prismaClient } from '@/lib/prisma'

export async function GET() {
  const data = await prismaClient.product.findMany()

  return Response.json({ products: data })
}
