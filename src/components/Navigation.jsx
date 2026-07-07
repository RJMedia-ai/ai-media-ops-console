import { useState } from 'react'

function Navigation({ currentView, setCurrentView }) {
  const navSections = [
    {
      title: 'System',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: '⚙️' },
        { id: 'gpu', label: 'GPU Monitor', icon: '📊' },
        { id: 'models', label: 'Models', icon: '🧠' },
      ]
    },
    {
      title: 'Media',
      items: [
        { id: 'queue', label: 'Job Queue', icon: '⏱️' },
        { id: 'media', label: 'Media Library', icon: '🎬' },
        { id: 'transcripts', label: 'Transcripts', icon: '📝' },
      ]
    },
    {
      title: 'Services',
      items: [
        { id: 'plex', label: 'Plex Status', icon: '🎭' },
        { id: 'iptv', label: 'IPTV Control', icon: '📺' },
        { id: 'git', label: 'Git Checkpoints', icon: '🔄' },
      ]
    },
    {
      title: 'Workspace',
      items: [
        { id: 'settings', label: 'Settings', icon: '⚡' },
        { id: 'logs', label: 'Logs', icon: '📋' },
      ]
    }
  ]

  return (
    <nav>
      <div className="nav-logo">
        <h1>📡 AI Media Ops</h1>
      </div>

      {navSections.map((section) => (
        <div key={section.title} className="nav-section">
          <div className="nav-section-title">{section.title}</div>
          {section.items.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ))}
    </nav>
  )
}

export default Navigation
