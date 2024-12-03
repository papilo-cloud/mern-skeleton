import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const Text: React.FC<ComponentProps<'span'>> = ({children, className, ...props}) => {
  return (
      <span 
        className={clsx('tracking-wide text-orange-950', className)}
        {...props}>{children}</span>
  )
}

export default Text