import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const ButtonText: React.FC<ComponentProps<'span'>> = ({children, className, ...props}) => {
  return (
      <span 
        className={clsx('tracking-wide font-normal text-lg text-white', className)}
        {...props}>{children}</span>
  )
}

export default ButtonText