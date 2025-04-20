// app/(admin)/admin/page.jsx



import { auth, currentUser } from '@clerk/nextjs/server'

const Page = async () => {
  const { userId } = await auth()

  if (!userId) {
    return <div>Sign in to view this page</div>
  }
  const user = await currentUser()

  // Use `user` to render user details or create UI elements
  return <div>Review, {user.firstName}!</div>
};

export default Page;
