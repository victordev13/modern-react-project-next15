import { auth } from '@clerk/nextjs/server'
import SignInButton from './components/home/SignInButton'
import LinkButton from './components/Button'

export default async function Home() {
  const { userId } = await auth()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center rounded-lg border-2 border-solid border-blue-500 border-opacity-15 p-6">
          <span>Hi!</span>
          {userId ? (
            <>
              <p>You{"'"}re logged in</p>
              <LinkButton href="/dashboard">Go to dashboard</LinkButton>
            </>
          ) : (
            <>
              <p>You{"'"}re not logged in</p>
              <SignInButton />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
