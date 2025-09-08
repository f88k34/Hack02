import React from 'react'
import { HomeOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <div>
      <h1 style={{textAlign: 'center', backgroundColor:'#00968a',color:'white',padding:'20px', margin:'20px' ,borderRadius:'10px', fontFamily:"sans-serif", fontWeight:"bolder", fontSize:'35px', overflow:"clip", cursor:"pointer", transition:'ease-in-out 0.5s', transform:'inherit' } }> <HomeOutlined /> Quản lý kho</h1>
    </div>
  )
}
