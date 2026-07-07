import { useState } from 'react'

function GPUMonitor() {
  const [gpuData] = useState({
    status: 'active',
    name: 'NVIDIA RTX 3070',
    utilization: 68,
    memory: 5.2,
    maxMemory: 8,
    temperature: 62,
    powerUsage: 185,
    maxPower: 220
  })

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">GPU Status</h3>
        <span className={`card-status ${gpuData.status}`}>
          <span className={`status-dot ${gpuData.status}`}></span>
          {gpuData.status}
        </span>
      </div>
      <div className="card-content">
        <div style={{fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px'}}>
          {gpuData.name}
        </div>

        <div className="metric">
          <span className="metric-label">GPU Util</span>
          <span className="metric-value">{gpuData.utilization}%</span>
        </div>
        <div className="metric-bar">
          <div className="metric-fill" style={{width: `${gpuData.utilization}%`}}></div>
        </div>

        <div className="metric" style={{marginTop: '12px'}}>
          <span className="metric-label">VRAM</span>
          <span className="metric-value">{gpuData.memory}/{gpuData.maxMemory}GB</span>
        </div>
        <div className="metric-bar">
          <div className="metric-fill" style={{width: `${(gpuData.memory/gpuData.maxMemory)*100}%`}}></div>
        </div>

        <div className="metric" style={{marginTop: '12px'}}>
          <span className="metric-label">Temp</span>
          <span className="metric-value">{gpuData.temperature}°C</span>
        </div>

        <div className="metric" style={{marginTop: '12px'}}>
          <span className="metric-label">Power</span>
          <span className="metric-value">{gpuData.powerUsage}W / {gpuData.maxPower}W</span>
        </div>
      </div>
    </div>
  )
}

export default GPUMonitor
