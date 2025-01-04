import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from '@/app/components/ui/card'
import ToggleTheme from '@/app/components/toggle-theme'
import LinkButton from '../components/Button'
import { Button } from '../components/ui/button'

export default function Dashboard() {
  return (
    <Card className="container mx-auto max-w-screen-md">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>Welcome to your dashboard!</p>
        <ToggleTheme />
      </CardContent>
      <CardFooter className="flex gap-4">
        <LinkButton href="/dashboard/products">List Products</LinkButton>
        <LinkButton href="/dashboard/products/new">Add Product</LinkButton>
        <Button variant="destructive">Logout</Button>
      </CardFooter>
    </Card>
  )
}
