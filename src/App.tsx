import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Contact from './pages/Contact'
import Formations from './pages/Formations'
import Inscription from './pages/Inscription'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="formations" element={<Formations />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}
