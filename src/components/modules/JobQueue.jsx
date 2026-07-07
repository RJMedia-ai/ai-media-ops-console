import { useState } from 'react'

function JobQueue() {
  const [jobs] = useState([
    {
      id: 1,
      name: 'Topaz Upscale - Video_001.mp4',
      type: 'media',
      progress: 75,
      status: 'running',
      eta: '2m 15s'
    },
    {
      id: 2,
      name: 'Whisper Transcription - Podcast_ep42.wav',
      type: 'transcript',
      progress: 45,
      status: 'running',
      eta: '5m 30s'
    },
    {
      id: 3,
      name: 'Model Fine-tune - Dataset_batch3',
      type: 'training',
      progress: 0,
      status: 'queued',
      eta: 'Queued'
    }
  ])

  return (
    <div className="card">
      <div className="card-content">
        {jobs.length === 0 ? (
          <div style={{textAlign: 'center', padding: '40px 20px', color: 'var(--text-secondary)'}}>
            <p>No active jobs</p>
          </div>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {jobs.map((job) => (
              <div key={job.id} style={{
                padding: '15px',
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: '6px',
                borderLeft: `3px solid ${job.status === 'running' ? 'var(--accent)' : 'var(--text-secondary)'}`
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                  <span style={{fontSize: '14px', fontWeight: '600'}}>{job.name}</span>
                  <span className={`card-status ${job.status}`}>
                    <span className={`status-dot ${job.status}`}></span>
                  </span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px'}}>
                  <span style={{color: 'var(--text-secondary)'}}>{job.type}</span>
                  <span style={{color: 'var(--text-secondary)'}}>{job.eta}</span>
                </div>
                {job.status === 'running' && (
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: `${job.progress}%`}}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default JobQueue
