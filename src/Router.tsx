import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
      <ConditionalHeader />
      <Routes>
        <Route path='/' element={<JobsFeedPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/wdlist' element={<WdListPage />} />
        <Route path="/wd/:id" element={<Wd />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>   
  )
}

const ConditionalHeader = () => {
  const location = useLocation()
  const conditonalHeader = () => {
    const path = location.pathname
    return !['/login', '/signup'].includes(path)
  }
  return conditonalHeader() ? <Header /> : null 
}

const ConditionalFooter = () => {
  const location = useLocation()
  const conditionalFooter = () => {
    const path = location.pathname
    return ![ '/login', '/signup'].includes(path)
  }
  return conditionalFooter() ? <Footer /> : null
}

export default Router