import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RemoteReactApp from './remoteReactApp'
import RemoteAngularApp from './remoteAngularApp'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  {/* <RemoteReactApp /> */}
  <RemoteAngularApp />
</div>
  )
}

export default App
