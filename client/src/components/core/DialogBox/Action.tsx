import clsx from 'clsx'
import React, { ComponentProps } from 'react'


const Action: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={clsx('flex w-full justify-end', className)} {...props}>
        {children}
    </div>
  )
}

export default Action