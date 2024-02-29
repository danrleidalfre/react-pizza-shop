import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/layouts/app.tsx'
import { AuthLayout } from '@/layouts/auth.tsx'
import { Dashboard } from '@/pages/app/dashboard.tsx'
import { SignIn } from '@/pages/auth/sign-in.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
