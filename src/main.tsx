import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'sonner'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './routes/form.tsx'
import EditAddress from './routes/edit-address.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Form />
      },
      {
        path: 'addresses',
        element: <EditAddress />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
