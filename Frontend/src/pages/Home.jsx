import { useState, useEffect } from 'react';
import axiosClient from '../lib/axiosClient';

function Home() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkBackendHealth = async () => {
      try {
        const data = await axiosClient.get('/health');
        setHealthStatus(data);
        setError(null);
      } catch (err) {
        setError('Cannot connect to Backend API. Make sure the server is running on port 8080.');
        console.error('Health check failed:', err);
      } finally {
        setLoading(false);
      }
    };

    checkBackendHealth();
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Inter, system-ui, sans-serif',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: '#fff',
      padding: '2rem',
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '0.5rem',
        background: 'linear-gradient(90deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        🚀 OnlineRegisterSystem
      </h1>
      <p style={{ color: '#a0aec0', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Frontend + Backend Setup Complete
      </p>

      {/* Backend Health Check Card */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          🏥 Backend Health Check
        </h2>

        {loading && (
          <p style={{ color: '#fbd38d' }}>⏳ Checking backend connection...</p>
        )}

        {error && (
          <div style={{ 
            background: 'rgba(245, 101, 101, 0.1)', 
            border: '1px solid rgba(245, 101, 101, 0.3)',
            borderRadius: '8px', 
            padding: '1rem',
          }}>
            <p style={{ color: '#fc8181', margin: 0 }}>❌ {error}</p>
          </div>
        )}

        {healthStatus && (
          <div style={{ 
            background: 'rgba(72, 187, 120, 0.1)', 
            border: '1px solid rgba(72, 187, 120, 0.3)',
            borderRadius: '8px', 
            padding: '1rem',
          }}>
            <p style={{ color: '#68d391', margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>
              ✅ {healthStatus.status} - Connected!
            </p>
            <p style={{ color: '#a0aec0', margin: '0.25rem 0', fontSize: '0.9rem' }}>
              Service: {healthStatus.service}
            </p>
            <p style={{ color: '#a0aec0', margin: '0.25rem 0', fontSize: '0.9rem' }}>
              Version: {healthStatus.version}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack Info */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginTop: '2rem', 
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {['React + Vite', 'Spring Boot 3.3', 'Supabase'].map((tech) => (
          <span key={tech} style={{
            background: 'rgba(102, 126, 234, 0.15)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '9999px',
            padding: '0.5rem 1rem',
            fontSize: '0.85rem',
            color: '#a3bffa',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Home;
