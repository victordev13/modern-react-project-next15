import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from '@/app/components/ui/card'
import ToggleTheme from '@/app/components/toggle-theme'
import LinkButton from '../components/Button'

export default function Dashboard() {
  return (
    <Card className="container mx-auto max-w-screen-md">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>Welcome to your dashboard!</p>
        <ToggleTheme />

        <LinkButton href="/dashboard/products/new">Add Product</LinkButton>
      </CardContent>
      <CardFooter>
        <button>Logout</button>
      </CardFooter>
    </Card>
  )
}
