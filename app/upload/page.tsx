"use client"

import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const UploadPage = () => {
  return (
    <CldUploadWidget
    uploadPreset='dxehi8tj'
    onUpload={(result, widget)=>{
        console.log(result)
    }}
    >
        {({open})=><button className='btn btn-primary' onClick={()=>open()} >Upload</button>}
    </CldUploadWidget>
  )
}

export default UploadPage