"use client"

import { UploadButton } from "~/utils/uploadthing";
import React from 'react'
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter()
  return (
    <div>
      <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
        router.refresh()
      }} />
    </div>
  )
}

export default Button
