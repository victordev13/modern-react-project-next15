import { auth } from '@clerk/nextjs/server'
import LinkButton from './components/Button'
import { Button } from './components/ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Card, CardContent, CardHeader } from './components/ui/card'

export default async function Home() {
  const { userId } = await auth()

  return (
    <Card>
      <CardHeader>
        <span>Hi!</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {userId ? (
          <>
            <p>You{"'"}re logged in</p>
            <LinkButton href="/dashboard">Go to dashboard</LinkButton>
          </>
        ) : (
          <>
            <p>You{"'"}re not logged in</p>
            <div className="flex gap-4 text-center items-center">
              <Button asChild>
                <SignInButton>Sign in</SignInButton>
              </Button>
              <Button asChild variant="secondary">
                <SignUpButton>Sign up</SignUpButton>
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
