import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import AuthPage from './pages/AuthPage'
import SignUp from './components/auth/SignUp'
import JobsFeedPage from './pages/JobsFeedPage'
import WdListPage from './pages/WdListPage'
import Wd from './components/wd/Wd'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<JobsFeedPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/wdlist' element={<WdListPage />} />
        <Route path="/wd/:id" element={<Wd />} />
      </Routes>
      <Footer />
     </BrowserRouter>   
  )
}

export default Router