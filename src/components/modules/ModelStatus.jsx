import { useState } from 'react'

function ModelStatus() {
  const [modelData] = useState({
    loaded: 1,
    available: 5,
    models: [
      { name: 'Mixtral-8x7B', status: 'loaded', vram: 22 },
      { name: 'Llama2-70B', status: 'available', vram: 0 },
      { name: 'Whisper-Large', status: 'available', vram: 0 },
    ]
  })

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Models</h3>
        <span className="card-status active">
          <span className="status-dot active"></span>
          {modelData.loaded} loaded
        </span>
      </div>
      <div className="card-content">
        <div style={{fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px'}}>
          {modelData.loaded}/{modelData.available} available
        </div>

        {modelData.models.map((model) => (
          <div key={model.name} className="metric">
            <span className="metric-label">{model.name}</span>
            <span className={`card-status ${model.status}`} style={{margin: 0}}>
              <span className={`status-dot ${model.status}`}></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModelStatus
