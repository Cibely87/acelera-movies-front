import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { User } from './pages/user/user'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} exact />
      </Routes>
    </BrowserRouter>
  )
}
