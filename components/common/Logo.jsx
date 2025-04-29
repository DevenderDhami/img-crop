import Link from 'next/link'
import React from 'react'
import { CMP_NAME } from '../constant'

const Logo = () => {
  return (
    <Link href={"/"} className='font-bold'>
      {CMP_NAME}
    </Link>
  )
}

export default Logo
