function SystemStatus() {
  const [systemData] = useState({
    status: 'ready',
    cpu: 45,
    memory: 62,
    storage: 78,
    uptime: '2d 14h'
  })

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">System Status</h3>
        <span className={`card-status ${systemData.status}`}>
          <span className={`status-dot ${systemData.status}`}></span>
          {systemData.status}
        </span>
      </div>
      <div className="card-content">
        <div className="metric">
          <span className="metric-label">CPU Usage</span>
          <span className="metric-value">{systemData.cpu}%</span>
        </div>
        <div className="metric-bar">
          <div className="metric-fill" style={{width: `${systemData.cpu}%`}}></div>
        </div>

        <div className="metric" style={{marginTop: '12px'}}>
          <span className="metric-label">Memory</span>
          <span className="metric-value">{systemData.memory}%</span>
        </div>
        <div className="metric-bar">
          <div className="metric-fill" style={{width: `${systemData.memory}%`}}></div>
        </div>

        <div className="metric" style={{marginTop: '12px'}}>
          <span className="metric-label">Storage</span>
          <span className="metric-value">{systemData.storage}%</span>
        </div>
        <div className="metric-bar">
          <div className="metric-fill" style={{width: `${systemData.storage}%`}}></div>
        </div>

        <div className="metric" style={{marginTop: '12px'}}>
          <span className="metric-label">Uptime</span>
          <span className="metric-value">{systemData.uptime}</span>
        </div>
      </div>
    </div>
  )
}

export default SystemStatus
