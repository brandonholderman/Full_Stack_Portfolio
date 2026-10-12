import { useEffect, useState } from "react";

const Weather = () => {
    const [IP, setIP] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        fetch(`${apiBase}/api/ip/`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`)
                return response.json()
            })
            .then(data => {
                setIP(data.ip)
                console.log(data.ip)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Detecing your IP...</p>
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

    return (
        <div style={{
            display: 'inline-block',
            padding: '1rem 1.5rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '1.1rem',
        }}>
            <span style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '4px' }}>
                Your IP address
            </span>
            <p style={{ color: 'white'}}>{IP}</p>
        </div>
    )
}

export default Weather;