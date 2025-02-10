import reactLogo from '../logo.svg'

const ReactLogo = () => {
  return (
    <img src={reactLogo}
        alt="React Logo"
        style={{ 
            position:  'fixed',
            bottom: '20px',
            right: '20px',
            width: '80px'
        }}
    />
  )
}

export default ReactLogo
