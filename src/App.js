import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { User } from './pages/user/user'
import { Home } from './pages/home/index'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  )
}
