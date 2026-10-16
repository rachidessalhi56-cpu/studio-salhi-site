import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import Privacy from './pages/Privacy.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  )
}
