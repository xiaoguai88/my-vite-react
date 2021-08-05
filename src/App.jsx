import React, { useState } from 'react'
import 'antd/dist/antd.css'; 
import { Button } from 'antd'
import Nav from './nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button>button is:++</Button>
      <Nav />
    </div>
  )
}

export default App
