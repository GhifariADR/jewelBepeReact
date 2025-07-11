import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#F9F9F9',
        height: '58px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid #ddd',
        marginTop: 'auto',
      }}
    >
      <p style={{ color: '#333', margin: 0 }}>© 2025 Your Company</p>
    </footer>
  )
}

export default Footer