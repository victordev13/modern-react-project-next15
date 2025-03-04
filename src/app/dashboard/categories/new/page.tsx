'use client'
import { createCategory } from '@/app/actions/categories/create'
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

export default function NewCategory() {
  const [state, formAction, isFormPending] = useActionState(createCategory, {
    message: '',
  })

  return (
    <Card className="container mx-auto max-w-screen-md">
      <CardHeader>
        <CardTitle>New Category</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Category name
            </label>
            <Input name="name" required minLength={3} />
          </div>

          {state?.message && (
            <p aria-live="polite" className="text-red-500 mb-6">
              {state.message}
            </p>
          )}

          {state?.success && (
            <p aria-live="polite" className="text-green-500 mb-6">
              Category registered successfully!
            </p>
          )}
          <div className="flex items-center justify-between">
            <Button type="submit" variant="secondary" disabled={isFormPending}>
              Add Category
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
