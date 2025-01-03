'use client'

import Link, { LinkProps } from 'next/link'
import { HTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = LinkProps &
  PropsWithChildren &
  HTMLAttributes<HTMLAnchorElement>

export default function LinkButton({ children, ...props }: ButtonProps) {
  return (
    <Link
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${props.className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
