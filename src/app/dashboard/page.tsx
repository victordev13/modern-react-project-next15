import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/app/components/ui/card'
import ToggleTheme from '../components/toggle-theme'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="container mx-auto max-w-screen-md">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Welcome to your dashboard!</p>
          <ToggleTheme />
        </CardContent>
        <CardFooter>
          <button>Logout</button>
        </CardFooter>
      </Card>
    </div>
  )
}
