import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
