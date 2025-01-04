'use client'
import { createProduct } from '@/app/actions/products/create'
import LinkButton from '@/app/components/Button'
import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'
import React, { useActionState } from 'react'

export default function NewProduct() {
  const [state, formAction, isFormPending] = useActionState(createProduct, {
    message: '',
  })

  return (
    <Card className="container mx-auto max-w-screen-md">
      <CardHeader>
        <CardTitle>New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <Input name="name" required minLength={3} />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="productPrice"
            >
              Product Price
            </label>
            <Input name="price" type="number" step="0.01" required />
          </div>
          {state?.message && (
            <p aria-live="polite" className="text-red-500 mb-6">
              {state.message}
            </p>
          )}
          {state?.success && (
            <p aria-live="polite" className="text-green-500 mb-6">
              Product added successfully!
            </p>
          )}
          <div className="flex items-center justify-between">
            <Button type="submit" variant="secondary" disabled={isFormPending}>
              Add Product
            </Button>
            <div className="flex gap-4">
              <LinkButton href="/dashboard">Dashboard</LinkButton>
              <LinkButton href="/dashboard/products">List Products</LinkButton>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
