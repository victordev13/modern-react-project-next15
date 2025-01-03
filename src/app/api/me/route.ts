import { currentUser } from '@clerk/nextjs/server'

export async function GET() {
  const user = await currentUser()

  if (!user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return Response.json({
    user: {
      username: user?.username,
      fullName: `${user?.firstName} ${user?.lastName}`.trim() || null,
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
    },
  })
}
