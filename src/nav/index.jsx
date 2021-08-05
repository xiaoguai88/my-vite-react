import React, { useState } from 'react'
import 'antd/dist/antd.css'; 
import { Button } from 'antd'
import './index.css';

const Nav = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <Button onClick={()=>setCount(count+1)}>button is:{count}</Button>
      <div className='vite'>
          <h3>vite vs webpack</h3>
          <p>vite通过新版本浏览器支持的es modules来加载依赖</p>
      </div>
    </div>
  )
}

export default Nav
