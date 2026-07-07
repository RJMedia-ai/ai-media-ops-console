import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Navigation from './components/Navigation'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')

  return (
    <div className="app-container">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        {currentView === 'dashboard' && <Dashboard />}
      </main>
    </div>
  )
}

export default App
