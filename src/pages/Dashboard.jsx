import { useState } from 'react'
import SystemStatus from '../components/modules/SystemStatus'
import GPUMonitor from '../components/modules/GPUMonitor'
import ModelStatus from '../components/modules/ModelStatus'
import JobQueue from '../components/modules/JobQueue'

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>AI Media Operations Console</h1>
          <p>Local-first GPU workstation control & media workflow management</p>
        </div>
      </div>

      {/* Top Row - Quick Status */}
      <div className="dashboard-grid">
        <SystemStatus />
        <GPUMonitor />
        <ModelStatus />
      </div>

      {/* Job Queue Section */}
      <div className="dashboard-section">
        <div className="section-title">⏱️ Active Workloads</div>
        <JobQueue />
      </div>
    </div>
  )
}

export default Dashboard
