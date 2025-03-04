'use server'

import { prismaClient } from '@/lib/prisma'

export async function createCategory(prevState: unknown, formData: FormData) {
  const name = formData.get('name')
  if (!name) {
    return {
      message: 'Name is required',
    }
  }

  await prismaClient.category.create({
    data: {
      name: name?.toString(),
    },
  })

  return {
    success: true,
  }
}
