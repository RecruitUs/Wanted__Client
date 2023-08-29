import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import SignUp from './components/auth/SignUp'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     </BrowserRouter>   
  )
}

export default Router