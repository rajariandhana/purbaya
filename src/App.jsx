import './App.css'

import { Routes, Route } from 'react-router'

import Layout from './components/Layout'
import UnderMaintenance from './components/UnderMaintenance'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<UnderMaintenance />} />
      </Route>
    </Routes>
  )
}

export default App