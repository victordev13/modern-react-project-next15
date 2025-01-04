import LinkButton from '@/app/components/Button'
import { ProductsList } from '@/app/components/products/ProductsList'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import React, { Suspense } from 'react'

export default async function NewProduct() {
  return (
    <Card className="container mx-auto max-w-screen-md">
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductsList />
        </Suspense>
        <div className="flex justify-between gap-4">
          <LinkButton href="/dashboard">Back to Dashboard</LinkButton>
          <LinkButton href="/dashboard/products/new">New product</LinkButton>
        </div>
      </CardContent>
    </Card>
  )
}
