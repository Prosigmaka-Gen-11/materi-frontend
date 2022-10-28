import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import BookLayout from './pages/BookLayout'
import BookList from './pages/BookList'
import BookForm from './pages/BookForm'
import BookDetail from './pages/BookDetail'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/book', element: <BookLayout />, children: [
    { path: 'list', element: <BookList /> },
    { path: 'form', element: <BookForm /> },
    { path: ':bookId', element: <BookDetail /> },
  ] }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
